type SchoolLogoProps = {
  className?: string;
};

export default function SchoolLogo({ className = '' }: SchoolLogoProps) {
  return (
    <svg
      viewBox="0 0 120 132"
      role="img"
      aria-label="The Science Scope school crest"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 3 108 23l-7 34c-4 26-17 46-41 65C36 103 19 83 15 57L12 23 60 3Z"
        fill="#b61118"
        stroke="#17632f"
        strokeWidth="4"
      />
      <circle cx="60" cy="49" r="31" fill="#f6d923" stroke="#111" strokeWidth="3" />
      <path d="M41 40h38v25H41z" fill="#fff" stroke="#111" strokeWidth="3" />
      <path d="M60 40v25M45 44l15 4 15-4" fill="none" stroke="#111" strokeWidth="2" />
      <path d="M59 37c-1-8 3-12 7-15 1 7-1 12-7 15Z" fill="#17632f" />
      <path d="M28 85c19 8 45 8 64 0l-5 13c-17 8-37 8-54 0l-5-13Z" fill="#f6d923" stroke="#17632f" strokeWidth="3" />
      <path d="M18 103c27 12 57 12 84 0l-7 17c-23 8-47 8-70 0l-7-17Z" fill="#17632f" stroke="#b61118" strokeWidth="3" />
      <text x="60" y="96" textAnchor="middle" fontSize="6" fontWeight="700" fill="#9a1b16">MULTAN</text>
      <text x="60" y="112" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f6d923">A GREAT WAY</text>
    </svg>
  );
}
