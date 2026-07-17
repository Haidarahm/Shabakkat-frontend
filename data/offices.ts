export interface FootprintLocation {
  name: string;
  role: "Headquarters" | "Regional office" | "Project delivery";
  /** Marker position in /map.svg's own coordinate space (viewBox 0 0 3064.76 1456.29). */
  mapPoint: { cx: number; cy: number };
}

// TODO: Source doc lists only 4 confirmed office locations (Kuwait, Iraq, Qatar, Syria) while
// stating Shabakkat operates across 15 countries — the full country list was not provided and
// needs to be confirmed before this is expanded back out to a broader footprint map.
export const footprintLocations: FootprintLocation[] = [
  { name: "Kuwait", role: "Headquarters", mapPoint: { cx: 1795.68, cy: 597.61 } },
  { name: "Iraq", role: "Regional office", mapPoint: { cx: 1730.52, cy: 486.32 } },
  { name: "Qatar", role: "Regional office", mapPoint: { cx: 1860.55, cy: 597.16 } },
  { name: "Syria", role: "Regional office", mapPoint: { cx: 1643.84, cy: 485.33 } },
];

/** Intrinsic size of /map.svg's viewBox — used to convert mapPoint coordinates to percentages. */
export const mapViewBox = { width: 3064.76, height: 1456.29 };

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
