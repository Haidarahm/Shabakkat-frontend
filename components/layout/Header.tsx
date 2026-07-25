import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "@/data/navLinks";
import Button from "@/components/ui/Button";

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  // Covers dynamic routes (e.g. router.pathname === "/services/[category]" for
  // /services/engineering-services#managed-services) so a nav item stays active
  // across its whole section, not just its exact index URL.
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="section-px sticky top-0 z-[100] border-b border-border bg-white">
      <div className="flex h-[88px] items-center justify-between gap-3 lg:h-[100px]">
        <Link
          href="/"
          aria-label="Shabakkat home"
          className="flex shrink-0 items-center gap-2.5 sm:gap-3.5"
        >
          <span className="relative block h-16 w-16 sm:h-[72px] sm:w-[72px] lg:h-20 lg:w-20">
            <Image
              src="/logo.png"
              alt=""
              fill
              priority
              sizes="80px"
              className="object-contain object-center"
            />
          </span>
          <span className="font-heading text-[20px] font-semibold uppercase tracking-[0.06em] text-[#F18A00] sm:text-[24px] lg:text-[28px]">
            Shabakkat
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-sm tracking-[0.05em] transition-colors ${
                  active
                    ? "rounded-md bg-cyan px-[18px] py-[9px] text-white hover:text-white"
                    : "text-navy hover:text-cyan"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <Button
            href="/contact"
            variant="primary"
            className="hidden whitespace-nowrap px-4 py-2.5 text-[12px] tracking-[0.04em] sm:inline-block sm:px-5 lg:px-[30px] lg:py-[14px] lg:text-sm lg:tracking-[0.05em]"
          >
            GET IN TOUCH
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border pb-5 pt-2 lg:hidden">
          {navLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 font-heading text-sm tracking-[0.05em] ${
                  active ? "bg-cyan text-white" : "text-navy hover:text-cyan"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href="/contact"
            variant="primary"
            className="mt-2 block w-full px-4 py-3.5 text-center whitespace-nowrap sm:hidden"
            onClick={() => setOpen(false)}
          >
            GET IN TOUCH
          </Button>
        </nav>
      )}
    </header>
  );
}
