import { jumpNavLinks } from "@/data/servicesDetail";

export default function JumpNav() {
  return (
    <div className="sticky top-[84px] z-[90] flex gap-2.5 overflow-x-auto border-b border-border bg-bg-muted px-14 py-4">
      {jumpNavLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="whitespace-nowrap rounded-full border border-border bg-white px-4 py-2 font-heading text-[12.5px] tracking-[0.03em] text-navy hover:border-red hover:text-red"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
