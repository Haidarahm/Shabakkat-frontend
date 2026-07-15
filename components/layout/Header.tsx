import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "@/data/navLinks";
import Button from "@/components/ui/Button";

export default function Header() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="section-px sticky top-0 z-[100] border-b border-border bg-white">
      <div className="flex h-[72px] items-center justify-between lg:h-[84px]">
        <Link href="/" className="font-heading text-lg font-semibold uppercase tracking-[0.05em] text-navy">
          Shabakkat
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-sm tracking-[0.05em] transition-colors ${
                  active
                    ? "rounded-[2px] bg-cyan px-[18px] py-[9px] text-white hover:text-white"
                    : "text-navy hover:text-cyan"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button href="/careers" variant="primary" className="hidden lg:inline-block">
          GET IN TOUCH
        </Button>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-navy ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border pb-5 pt-2 lg:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-[2px] px-3 py-3 font-heading text-sm tracking-[0.05em] ${
                  active ? "bg-cyan text-white" : "text-navy hover:text-cyan"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/careers" variant="primary" className="mt-2 text-center" onClick={() => setOpen(false)}>
            GET IN TOUCH
          </Button>
        </nav>
      )}
    </header>
  );
}
