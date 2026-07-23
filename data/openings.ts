export interface Opening {
  id?: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

// Placeholder sample listings — replace with real, current openings.
export const openings: Opening[] = [
  { id: 1, title: "Senior Network Engineer", department: "Engineering Services", location: "Kuwait", type: "Full-time" },
  { id: 2, title: "PMO Program Manager", department: "PMO & Project Delivery", location: "Iraq", type: "Full-time" },
  { id: 3, title: "Technical Advisory Consultant", department: "Technical Advisory", location: "Kuwait", type: "Full-time" },
  { id: 4, title: "Field Maintenance Technician", department: "Managed Operations", location: "Iraq", type: "Full-time" },
];
