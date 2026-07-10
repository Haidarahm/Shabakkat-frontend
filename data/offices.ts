export interface FootprintLocation {
  name: string;
  role: "Headquarters" | "Regional office" | "Project delivery";
}

export const footprintLocations: FootprintLocation[] = [
  { name: "Kuwait", role: "Headquarters" },
  { name: "Saudi Arabia", role: "Regional office" },
  { name: "Iraq", role: "Regional office" },
  { name: "Morocco", role: "Regional office" },
  { name: "Oman", role: "Project delivery" },
  { name: "Bahrain", role: "Project delivery" },
  { name: "UAE", role: "Project delivery" },
  { name: "Egypt", role: "Project delivery" },
  { name: "Sudan", role: "Project delivery" },
  { name: "Ethiopia", role: "Project delivery" },
  { name: "Ghana", role: "Project delivery" },
  { name: "Tanzania", role: "Project delivery" },
  { name: "Nigeria", role: "Project delivery" },
];

export interface OfficeLocation {
  name: string;
  color: "red" | "cyan";
  address: string;
  phone?: string;
}

export const headOffice: OfficeLocation = {
  name: "Shabakkat — Kuwait",
  color: "red",
  address:
    "Qibla Area, Block 13, Mohammad Thunayan Al-Ghanim Street, Al Nour Investment Building, 1st Floor, PO Box 3976, Safat, 13040 Kuwait",
  phone: "+965 2249 4589",
};

export const regionalOffices: OfficeLocation[] = [
  {
    name: "Saudi Arabia",
    color: "red",
    address: "Riyadh; King Fahad Road; Abalkhail Building; 1st Floor, Office 15, PO Box 301815, Riyadh 11372",
    phone: "+966 1 462 4209",
  },
  {
    name: "Morocco",
    color: "cyan",
    address: "Lotissement Al OTOR, Rue Arrafif Lot n°27, Hay Riad, Rabat (Serving Algeria & Tunisia)",
    phone: "+212 537 565 067",
  },
  {
    name: "Iraq",
    color: "red",
    address: "Regional office supporting Zain Iraq managed services & FTK operations.",
  },
  {
    name: "Shabakkat (SIM) — Kuwait",
    color: "cyan",
    address: "Same address as Head Office, Al Nour Investment Building.",
    phone: "+965 2249 4589",
  },
  {
    name: "Advaltis — UK",
    color: "red",
    address: "51 Crabtree Road, Oxford OX9 2DU",
    phone: "+44 1865 728 023",
  },
  {
    name: "Advaltis — Morocco (Casablanca)",
    color: "cyan",
    address: "14, Rue Mohamed Abdou, Palmiers, Casablanca, 20000",
    phone: "+212 520 429 033",
  },
];
