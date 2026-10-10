// A loose, hand-drawn style botanical sprig in fine brass line work.
const Sprig = ({ className = "", ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 120 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.9"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    <path d="M62 156 C60 120 58 88 63 52 C66 32 70 18 74 6" />
    <path d="M61 128 C46 124 34 114 28 100 C42 100 55 110 61 128 Z" />
    <path d="M61 104 C74 98 86 86 90 72 C77 74 65 86 61 104 Z" />
    <path d="M61 82 C48 76 40 64 38 50 C50 54 59 66 61 82 Z" />
    <path d="M65 58 C75 52 82 42 84 30 C74 34 66 44 65 58 Z" />
    <path d="M70 30 C64 24 61 16 62 8 C68 12 71 21 70 30 Z" />
    <path d="M61 128 L44 110 M61 104 L80 82 M61 82 L46 60 M65 58 L78 38" strokeWidth="0.5" />
  </svg>
);

export default Sprig;
