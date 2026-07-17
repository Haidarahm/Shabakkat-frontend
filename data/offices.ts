export interface FootprintLocation {
  name: string;
  role: "Headquarters" | "Regional office" | "Project delivery";
}

// TODO: Source doc lists only 4 confirmed office locations (Kuwait, Iraq, Qatar, Syria) while
// stating Shabakkat operates across 15 countries — the full country list was not provided and
// needs to be confirmed before this is expanded back out to a broader footprint map.
export const footprintLocations: FootprintLocation[] = [
  { name: "Kuwait", role: "Headquarters" },
  { name: "Iraq", role: "Regional office" },
  { name: "Qatar", role: "Regional office" },
  { name: "Syria", role: "Regional office" },
];

export interface OfficeLocation {
  name: string;
  color: "red" | "cyan";
  address: string;
  phone?: string;
}

// TODO: Full HQ address and phone number are placeholders in the source document
// ("(Full address)" / "+965 XXX XXXX") — replace with the real values before launch.
export const headOffice: OfficeLocation = {
  name: "Shabakkat — Kuwait (Headquarters)",
  color: "red",
  address: "Kuwait — full address to be confirmed.",
  phone: "+965 XXX XXXX",
};

export const regionalOffices: OfficeLocation[] = [
  {
    name: "Iraq",
    color: "cyan",
    address: "Iraq Office — address to be confirmed.",
  },
  {
    name: "Qatar",
    color: "red",
    address: "Qatar Office — address to be confirmed.",
  },
  {
    name: "Syria",
    color: "cyan",
    address: "Syria Office — address to be confirmed.",
  },
];
