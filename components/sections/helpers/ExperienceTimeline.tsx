export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  subtitle?: string;
  status?: string;
  description?: import("react").ReactNode;
  details?: import("react").ReactNode;
};

export function ExperienceTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-1.5 space-y-6 border-l border-white/25">
      {items.map((item) => (
        <li key={item.id} className="relative pl-6">
          <span
            aria-hidden
            className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-black"
          />
          <p className="text-xs font-medium tracking-wide text-white/50">
            {item.period}
          </p>
          <div className="mt-1 space-y-1">
            <p className="font-bold text-white">{item.title}</p>
            {item.subtitle ? (
              <p className="text-white/85">{item.subtitle}</p>
            ) : null}
            {item.status ? (
              <p className="text-xs text-white/55 sm:text-sm">{item.status}</p>
            ) : null}
          </div>
          {item.description ? (
            <div className="mt-2 text-white/85">{item.description}</div>
          ) : null}
          {item.details ? <div className="mt-3">{item.details}</div> : null}
        </li>
      ))}
    </ol>
  );
}
