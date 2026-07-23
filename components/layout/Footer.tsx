import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { navLinks } from "@/data/navLinks";

const socials = [
  { label: "LinkedIn", Icon: FaLinkedinIn, href: "#" },
  { label: "Facebook", Icon: FaFacebookF, href: "#" },
  { label: "X", Icon: FaXTwitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="section-px border-t border-border bg-bg-muted pb-7 pt-10 text-text-subtle lg:pt-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
        <div>
          <Link href="/" aria-label="Shabakkat home" className="relative block h-14 w-[220px] sm:h-16 sm:w-[260px]">
            <Image
              src="/logo.png"
              alt="Shabakkat"
              fill
              sizes="260px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-4 max-w-[280px] text-[13.5px] leading-[1.7]">
            A regional Engineering &amp; Advisory company delivering critical digital infrastructure across the
            Middle East and Africa since 2005.
          </p>
        </div>
        <div>
          <div className="mb-4 font-heading text-[13px] tracking-[0.06em] text-navy">COMPANY</div>
          <div className="flex flex-col gap-2.5 text-[13.5px]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-text-subtle hover:text-cyan">
                {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 font-heading text-[13px] tracking-[0.06em] text-navy">HEAD OFFICE</div>
          <div className="text-[13.5px] leading-[1.7]">
            Kuwait
            <br />
            info@shabakkat.com
          </div>
        </div>
        <div>
          <div className="mb-4 font-heading text-[13px] tracking-[0.06em] text-navy">FOLLOW</div>
          <div className="flex gap-3">
            {socials.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-border-tint bg-bg-tint text-cyan transition-colors hover:border-cyan"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-[22px] text-[12.5px] sm:flex-row sm:justify-between sm:gap-0">
        <div>© 2026 Shabakkat. All rights reserved.</div>
        <Link href="/privacy" className="hover:text-cyan">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
