import * as React from "react";

type Props = {
  className?: string;
  drift?: boolean;
  flecks?: boolean;
  fleckCount?: number;
  grain?: boolean;
};

export function MyoBackground({
  className = "",
  drift = false,
  flecks = true,
  fleckCount = 11,
  grain = true,
}: Props) {
  return (
    <div
      className={`pointer-events-none overflow-hidden bg-myo-cream ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        className={`absolute inset-0 h-full w-full ${drift ? "myo-drift" : ""}`}
        style={{ minHeight: "100%" }}
      >
        <defs>
          <radialGradient id="myoBloomPink" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--color-myo-pink)"  stopOpacity="0.85" />
            <stop offset="55%"  stopColor="var(--color-myo-pink)"  stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-myo-pink)"  stopOpacity="0" />
          </radialGradient>
          <radialGradient id="myoBloomPeach" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--color-myo-peach)" stopOpacity="0.8" />
            <stop offset="55%"  stopColor="var(--color-myo-peach)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-myo-peach)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="myoBloomRose" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--color-myo-rose)"  stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-myo-rose)"  stopOpacity="0" />
          </radialGradient>
          <filter id="myoEdge" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves={2} seed={3} />
            <feDisplacementMap in="SourceGraphic" scale={55} />
          </filter>
        </defs>
        <g filter="url(#myoEdge)">
          <ellipse className="bloom-a" cx={800} cy={200} rx={540} ry={380} fill="url(#myoBloomPink)"  />
          <ellipse className="bloom-b" cx={1000} cy={700} rx={380} ry={280} fill="url(#myoBloomRose)"  />
          <ellipse className="bloom-c" cx={300}  cy={600} rx={500} ry={340} fill="url(#myoBloomPeach)" />
          <ellipse cx={800} cy={400} rx={400} ry={280} fill="url(#myoBloomPink)" opacity={0.5} />
        </g>
      </svg>

      {flecks && <Flecks count={fleckCount} />}

      {grain && (
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.3 0 0 0 0.18 0'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>\")",
          }}
        />
      )}
    </div>
  );
}

function Flecks({ count }: { count: number }) {
  const rand = (n: number) => {
    const x = Math.sin(n * 9301 + 2 * 49297) * 233280;
    return x - Math.floor(x);
  };
  const items = Array.from({ length: count }, (_, i) => {
    const x = rand(i + 1) * 1600;
    const y = rand(i + 31) * 1000;
    const r = 2 + rand(i + 71) * 3.5;
    const o = 0.4 + rand(i + 113) * 0.45;
    const rot = rand(i + 5) * 360;
    return { x, y, r, o, rot, i };
  });
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      {items.map(({ x, y, r, o, rot, i }) => {
        const r03 = r * 0.3;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`} opacity={o}>
            <path
              d={`M 0 -${r} L ${r03} -${r03} L ${r} 0 L ${r03} ${r03} L 0 ${r} L -${r03} ${r03} L -${r} 0 L -${r03} -${r03} Z`}
              fill="var(--color-myo-yellow)"
            />
          </g>
        );
      })}
    </svg>
  );
}
