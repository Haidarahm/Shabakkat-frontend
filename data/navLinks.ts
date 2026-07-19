export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "INDUSTRIES", href: "/industries" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CAREERS", href: "/careers" },
];
