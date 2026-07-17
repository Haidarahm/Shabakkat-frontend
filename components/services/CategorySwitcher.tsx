import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import { serviceCategories } from "@/data/servicesDetail";

export default function CategorySwitcher({ activeId }: { activeId: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, moved: false, startX: 0, scrollLeft: 0 });

  function onMouseDown(e: MouseEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      isDown: true,
      moved: false,
      startX: e.pageX - track.offsetLeft,
      scrollLeft: track.scrollLeft,
    };
    track.classList.add("cursor-grabbing");
  }

  function endDrag() {
    trackRef.current?.classList.remove("cursor-grabbing");
    drag.current.isDown = false;
  }

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !drag.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = x - drag.current.startX;
    if (Math.abs(walk) > 5) drag.current.moved = true;
    track.scrollLeft = drag.current.scrollLeft - walk;
  }

  function onClickCapture(e: MouseEvent<HTMLDivElement>) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <div
      ref={trackRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onClickCapture={onClickCapture}
      className="section-px sticky top-[72px] z-[90] flex cursor-grab select-none gap-2.5 overflow-x-auto border-b border-border bg-bg-muted py-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:top-[84px] [&::-webkit-scrollbar]:hidden"
    >
      {serviceCategories.map((category) => {
        const active = category.id === activeId;
        return (
          <Link
            key={category.id}
            href={`/services/${category.id}`}
            draggable={false}
            className={`whitespace-nowrap rounded-full border px-4 py-2 font-heading text-[12.5px] tracking-[0.03em] ${
              active ? "border-cyan bg-cyan text-white" : "border-border bg-white text-navy hover:border-cyan hover:text-cyan"
            }`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
}
