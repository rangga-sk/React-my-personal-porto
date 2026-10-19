import { useId } from 'react';

// Bidang-bidang kristal (hexagonal bipyramid) beserta warna gradiennya.
const FACETS = [
  { points: '100,0 18,78 88,96', colors: ['#d4f6e3', '#6ee0a8'] },
  { points: '100,0 88,96 186,72', colors: ['#f7fffa', '#b9f3d4'] },
  { points: '18,78 18,214 88,238 88,96', colors: ['#6ee0a8', '#12a86c'] },
  { points: '88,96 88,238 186,220 186,72', colors: ['#2fc887', '#0b6a4b'] },
  { points: '18,214 104,300 88,238', colors: ['#12a86c', '#0a4d39'] },
  { points: '88,238 104,300 186,220', colors: ['#0b8a5c', '#06372a'] },
];

export default function Gem({ className = '', ...props }) {
  const id = useId().replace(/:/g, '');

  return (
    <svg
      viewBox="6 -6 192 314"
      className={`gem ${className}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        {FACETS.map((facet, i) => (
          <linearGradient key={i} id={`${id}-f${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={facet.colors[0]} />
            <stop offset="100%" stopColor={facet.colors[1]} />
          </linearGradient>
        ))}
      </defs>
      {FACETS.map((facet, i) => (
        <polygon
          key={i}
          points={facet.points}
          fill={`url(#${id}-f${i})`}
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ))}
      <polygon points="110,18 160,66 128,78" fill="#ffffff" opacity="0.45" />
      <polygon points="30,96 36,190 44,192 40,100" fill="#ffffff" opacity="0.28" />
    </svg>
  );
}

export function LogoMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <polygon points="12,1 3,9 12,10" fill="#6ee0a8" />
      <polygon points="12,1 12,10 21,9" fill="#d4f6e3" />
      <polygon points="3,9 12,23 12,10" fill="#12a86c" />
      <polygon points="12,10 12,23 21,9" fill="#0b6a4b" />
    </svg>
  );
}
