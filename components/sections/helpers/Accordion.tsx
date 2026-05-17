"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="divide-y divide-white/15 border border-white/15 rounded-md overflow-hidden">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = `${baseId}-${item.id}-panel`;
        const triggerId = `${baseId}-${item.id}-trigger`;

        return (
          <div key={item.id}>
            <button
              type="button"
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left font-bold text-white transition-colors hover:bg-white/5"
            >
              <span className="text-base">{item.title}</span>
              <span
                className={`shrink-0 text-white/60 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                ▾
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={`px-3 pb-4 ${isOpen ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
