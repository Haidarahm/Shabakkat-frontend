import Link from "next/link";
import { navLinks } from "@/data/navLinks";

const socials = ["in", "f", "x"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-muted px-14 pb-7 pt-16 text-text-subtle">
      <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="font-heading text-xl font-semibold uppercase text-navy">Shabakkat</div>
          <p className="mt-4 max-w-[280px] text-[13.5px] leading-[1.7]">
            A comprehensive telecommunications solution provider serving the Middle East and Africa since 2005.
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
            Qibla Area, Block 13, Al Nour Investment Building, Kuwait
            <br />
            +965 2249 4589
          </div>
        </div>
        <div>
          <div className="mb-4 font-heading text-[13px] tracking-[0.06em] text-navy">FOLLOW</div>
          <div className="flex gap-3">
            {socials.map((s) => (
              <div
                key={s}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-border-tint bg-bg-tint text-xs text-navy"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-between border-t border-border pt-[22px] text-[12.5px]">
        <div>© 2026 Shabakkat. All rights reserved.</div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
}
