type TechRow = { label: string; value: string };

export function TechPanel({ rows, className = '' }: { rows: TechRow[]; className?: string }) {
  return (
    <div className={`tech-panel ${className}`}>
      {rows.map((row) => (
        <div className="tech-row" key={row.label}>
          <span>{row.label}</span>
          <p>{row.value}</p>
        </div>
      ))}
    </div>
  );
}

type KeyFigure = { value: string; label: string };

export function KeyFigures({ figures }: { figures: KeyFigure[] }) {
  return (
    <div className="key-figures">
      {figures.map((figure) => (
        <div className="key-figure" key={figure.label}>
          <strong>{figure.value}</strong>
          <span>{figure.label}</span>
        </div>
      ))}
    </div>
  );
}
