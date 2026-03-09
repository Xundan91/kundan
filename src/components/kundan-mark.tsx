export function KundanMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      {/* KK monogram: two block K's */}
      <path
        fill="currentColor"
        d="M 96 0 L 136 0 L 136 128 L 216 0 L 256 0 L 176 128 L 256 256 L 216 256 L 136 128 Z M 256 0 L 296 0 L 296 128 L 376 0 L 416 0 L 336 128 L 416 256 L 376 256 L 296 128 Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M 48 0 L 68 0 L 68 64 L 108 0 L 128 0 L 88 64 L 128 128 L 108 128 L 68 64 Z M 128 0 L 148 0 L 148 64 L 188 0 L 208 0 L 168 64 L 208 128 L 188 128 L 148 64 Z"/></svg>`;
}
