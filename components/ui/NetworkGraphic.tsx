interface Node {
  x: number;
  y: number;
  r: number;
}

const nodes: Node[] = [
  { x: 60, y: 190, r: 6 },
  { x: 150, y: 95, r: 8 },
  { x: 235, y: 55, r: 6 },
  { x: 320, y: 100, r: 10 },
  { x: 355, y: 195, r: 6 },
  { x: 265, y: 235, r: 7 },
  { x: 150, y: 250, r: 6 },
  { x: 95, y: 130, r: 5 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
  [1, 7],
  [7, 0],
  [2, 5],
  [3, 6],
];

export default function NetworkGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--color-cyan)"
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 7} fill="var(--color-cyan)" fillOpacity={0.12} />
          <circle cx={n.x} cy={n.y} r={n.r} fill="var(--color-cyan)" />
        </g>
      ))}
    </svg>
  );
}
