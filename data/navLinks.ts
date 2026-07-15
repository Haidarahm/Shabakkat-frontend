export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "ABOUT", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "INDUSTRIES", href: "/industries" },
  { label: "CAREERS", href: "/careers" },
];
