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

