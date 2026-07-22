import { serviceCategories } from "@/data/servicesDetail";

export interface Capability {
  title: string;
  description: string;
  href: string;
}

/** Core capabilities — derived from the same serviceCategories data. */
export const capabilities: Capability[] = serviceCategories.map((category) => ({
  title: category.title,
  description: category.description,
  href: `/services#${category.id}`,
}));
