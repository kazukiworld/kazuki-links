export function PageIntro({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-white/15 pb-4 space-y-2.5 text-sm leading-relaxed text-white/50">
      {children}
    </div>
  );
}

export function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 pt-4 text-base leading-relaxed text-white">
      {children}
    </div>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function MutedNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-white/60 italic">
      {children}
    </p>
  );
}

export function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h4 className="text-base font-bold text-white">{title}</h4>
      <div className="text-base leading-relaxed text-white">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <p className="text-base text-white/80">
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 && <span className="text-white/40"> · </span>}
          {item}
        </span>
      ))}
    </p>
  );
}

export function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-zinc-800 px-2.5 py-1 text-base text-white/80">
      {children}
    </span>
  );
}
