/**
 * Daftar project lokal.
 *
 * Data project utama tetap diambil dari Firestore (data-profile/4-full-project).
 * Setiap entri di sini digabung dengan data Firestore berdasarkan `slug`:
 *   - slug sama  -> field di sini melengkapi / menimpa data Firestore
 *   - slug baru  -> tampil sebagai project baru
 *
 * Slug otomatis dibuat dari judul, mis. "Sahabat Wahana" -> "sahabat-wahana",
 * dan menjadi URL halaman detail: /projects/sahabat-wahana
 *
 * Semua field opsional, kecuali `title` untuk project baru.
 * Field yang sama juga bisa disimpan langsung di Firestore.
 *
 * Template project baru:
 *
 * {
 *   slug: 'nama-project',
 *   title: 'Nama Project',
 *   category: 'Web Application',
 *   year: '2025',
 *   role: 'Front-end Developer',
 *   client: 'Nama Klien / Perusahaan',
 *   summary: 'Satu kalimat singkat yang tampil di kartu project.',
 *   description: 'Paragraf pertama.\nParagraf kedua (pisahkan dengan baris baru).',
 *   stack: ['React', 'Vite', 'Firebase'],
 *   highlights: ['Fitur atau pencapaian utama', 'Fitur lain'],
 *   images: ['/nama-gambar-1.png', '/nama-gambar-2.png'],  // file di folder /public atau URL
 *   cover: '/nama-gambar-1.png',                           // default: gambar pertama
 *   links: [
 *     { label: 'Live Demo', href: 'https://...' },
 *     { label: 'Source Code', href: 'https://github.com/...' },
 *   ],
 * },
 */
export const localProjects = [
  {
    slug: 'sahabat-wahana',
    category: 'Web Application',
    role: 'Front-end Developer & API Integration',
    summary:
      'A Quasar + Vue.js web application with camera and map features, backed by a Perl RESTful API.',
    stack: ['Quasar Framework', 'Vue.js', 'Perl', 'RESTful API', 'MySQL'],
    highlights: [
      'Responsive interface built with Quasar Framework and Vue.js',
      'Camera access and map functionality through third-party libraries',
      'Perl back-end designed as a RESTful API for efficient client–server communication',
      'External API integration in collaboration with partner teams',
      'MySQL data customization to meet the application’s functional requirements',
    ],
  },
];
