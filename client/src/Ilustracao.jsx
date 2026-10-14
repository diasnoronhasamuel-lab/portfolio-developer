export function AboutIllustration() {
  return (
    <figure className="about-illustration">
      <svg
        viewBox="0 0 520 300"
        role="img"
        aria-label="Ilustração: interface em React conversando com uma API em Node.js e um banco de dados SQLite"
      >
        <rect x="30" y="20" width="150" height="130" rx="12" className="ti-box" />
        <circle cx="46" cy="36" r="3.5" fill="#ff6b81" />
        <circle cx="58" cy="36" r="3.5" fill="#ffd166" />
        <circle cx="70" cy="36" r="3.5" fill="#4ade80" />
        <g transform="translate(105 96)" fill="none" stroke="#4fd1ff" strokeWidth="2">
          <circle r="6" fill="#4fd1ff" stroke="none" />
          <ellipse rx="34" ry="13" />
          <ellipse rx="34" ry="13" transform="rotate(60)" />
          <ellipse rx="34" ry="13" transform="rotate(120)" />
        </g>

        <polygon points="260,47 293,66 293,104 260,123 227,104 227,66" className="ti-box" stroke="#8b7bff" />
        <text x="260" y="90" textAnchor="middle" className="ti-big">API</text>

        <g fill="none" stroke="#4ade80" strokeWidth="2">
          <path d="M374 60 v50 a36 12 0 0 0 72 0 v-50" />
          <ellipse cx="410" cy="60" rx="36" ry="12" />
          <path d="M374 85 a36 12 0 0 0 72 0" />
        </g>

        <line x1="182" y1="85" x2="225" y2="85" className="ti-flow" />
        <line x1="295" y1="85" x2="372" y2="85" className="ti-flow" />

        <text x="105" y="172" textAnchor="middle" className="ti-label">React</text>
        <text x="260" y="172" textAnchor="middle" className="ti-label">Node.js · Express</text>
        <text x="410" y="172" textAnchor="middle" className="ti-label">SQLite</text>

        <rect x="30" y="192" width="460" height="92" rx="12" className="ti-box" />
        <circle cx="46" cy="208" r="3.5" fill="#ff6b81" />
        <circle cx="58" cy="208" r="3.5" fill="#ffd166" />
        <circle cx="70" cy="208" r="3.5" fill="#4ade80" />
        <text x="48" y="238" className="ti-code">$ npm run dev</text>
        <text x="48" y="257" className="ti-code ti-ok">✓ front-end em React</text>
        <text x="48" y="275" className="ti-code ti-ok">✓ API em Node.js + banco SQLite</text>
      </svg>
      <figcaption>Como este portfólio funciona: React, API e banco de dados.</figcaption>
    </figure>
  )
}