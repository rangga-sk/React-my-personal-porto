export default function TechStack({ items = [], max, variant = '' }) {
  if (items.length === 0) return null;
  const visible = max ? items.slice(0, max) : items;
  const hidden = items.length - visible.length;

  return (
    <ul className="chip-list" aria-label="Tech stack">
      {visible.map((item) => (
        <li key={item} className={`chip ${variant}`}>
          {item}
        </li>
      ))}
      {hidden > 0 && <li className="chip chip--muted">+{hidden}</li>}
    </ul>
  );
}
