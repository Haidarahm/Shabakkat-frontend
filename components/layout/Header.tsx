import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "@/data/navLinks";
import Button from "@/components/ui/Button";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-[100] flex h-[84px] items-center justify-between border-b border-border bg-white px-14">
      <Link href="/" className="font-heading text-lg font-semibold uppercase tracking-[0.05em] text-navy">
        Shabakkat
      </Link>
      <nav className="flex items-center gap-10">
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
      <Button href="/contact" variant="primary">
        GET IN TOUCH
      </Button>
    </header>
  );
}
