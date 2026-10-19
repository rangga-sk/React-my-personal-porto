// Mengubah data mentah Firestore menjadi bentuk yang konsisten untuk komponen UI.

const clean = (value) => (typeof value === 'string' ? value.trim() : value);
const hasText = (value) => typeof value === 'string' && /[a-z0-9]/i.test(value);
const toTextList = (value) => (Array.isArray(value) ? value.filter(hasText).map(clean) : []);

export function slugify(text = '') {
  return String(text)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function firstSentence(text = '', maxLength = 180) {
  const sentence = String(text).trim().split(/(?<=[.!?])\s/)[0] ?? '';
  return sentence.length > maxLength ? `${sentence.slice(0, maxLength).trimEnd()}…` : sentence;
}

export function toParagraphs(text = '') {
  return String(text)
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

// Format link di Firestore: "Label | https://url"
export function parseLink(entry) {
  if (entry && typeof entry === 'object') return { label: clean(entry.label), href: clean(entry.href) };
  const [label = '', href = ''] = String(entry).split('|').map((part) => part.trim());
  return { label, href: href.replace(/^(https?:)\/(?!\/)/, '$1//') };
}

export function normalizeProfile(raw = {}) {
  return {
    name: clean(raw.name) ?? '',
    nickname: clean(raw.aka) ?? '',
    role: clean(raw.titlejob) ?? '',
    contacts: (raw.contact ?? []).map(parseLink).filter((link) => link.href),
  };
}

export function normalizeAbout(raw = {}) {
  const addr = raw.aboutaddr ?? {};
  const home = addr.home ?? {};
  const education = (entry) =>
    entry && { school: clean(entry.name), major: clean(entry.jurusan), period: clean(entry.date) };

  return {
    description: clean(raw.aboutdesc) ?? '',
    photo: addr.img_profile ?? '',
    location: [home.kecamatan, home.kota, home.provinsi].map(clean).filter(Boolean).join(', '),
    education: [education(addr.kuliah), education(addr.smk)].filter(Boolean),
  };
}

export function normalizeExperience(raw = {}) {
  return (raw.data ?? []).map((item) => ({
    role: clean(item.judul) ?? '',
    period: clean(item.date_range) ?? '',
    description: clean(item.desc) ?? '',
    skills: toTextList(item.skills),
  }));
}

export function normalizeProject(raw = {}) {
  const title = clean(raw.title ?? raw.judul) || 'Untitled project';
  const description = clean(raw.description ?? raw.desc) ?? '';
  const images = (raw.images ?? raw.image_base ?? []).filter(Boolean);

  return {
    slug: slugify(raw.slug ?? title),
    title,
    category: clean(raw.category) ?? '',
    year: raw.year ? String(raw.year) : '',
    role: clean(raw.role) ?? '',
    client: clean(raw.client) ?? '',
    summary: clean(raw.summary) || firstSentence(description),
    description,
    stack: toTextList(raw.stack),
    highlights: toTextList(raw.highlights),
    images,
    cover: raw.cover ?? images[0] ?? '',
    links: (raw.links ?? []).map(parseLink).filter((link) => link.href),
  };
}

// Project dengan slug yang sama digabung: field dari `local` menimpa field dari `remote`.
export function mergeProjects(remote = [], local = []) {
  const bySlug = new Map();
  [...remote, ...local].forEach((raw) => {
    const key = slugify(raw.slug ?? raw.title ?? raw.judul ?? '');
    bySlug.set(key, { ...bySlug.get(key), ...raw });
  });
  return [...bySlug.values()].map(normalizeProject);
}

// Gabungan skill unik dari seluruh pengalaman kerja, untuk ditampilkan sebagai toolkit.
export function collectSkills(experience = []) {
  return [...new Set(experience.flatMap((item) => item.skills))];
}
