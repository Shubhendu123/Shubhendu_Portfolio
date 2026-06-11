// Faint original contour-line background. Decorative only — kept quiet so
// it never competes with the typography.
export default function Contour({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#171310" strokeOpacity="0.07" strokeWidth="1" fill="none">
        <path d="M-60 620 C 220 480, 420 700, 700 560 C 980 420, 1140 640, 1500 480" />
        <path d="M-60 560 C 240 420, 440 640, 720 500 C 1000 360, 1160 580, 1500 420" />
        <path d="M-60 500 C 260 360, 460 580, 740 440 C 1020 300, 1180 520, 1500 360" />
        <path d="M-60 440 C 280 310, 480 520, 760 390 C 1040 250, 1200 460, 1500 300" />
        <path d="M-60 380 C 300 260, 500 460, 780 340 C 1060 210, 1220 400, 1500 240" />
        <path d="M900 80 C 1020 140, 1060 260, 980 340 C 900 420, 1100 480, 1240 420" />
        <path d="M960 40 C 1100 110, 1150 270, 1050 370 C 950 470, 1170 540, 1330 460" />
        <path d="M1020 0 C 1180 80, 1240 280, 1120 400 C 1000 520, 1240 600, 1420 500" />
      </g>
    </svg>
  );
}
