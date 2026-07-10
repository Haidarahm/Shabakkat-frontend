export interface Competitor {
  name: string;
  region: string;
  description: string;
}

export const competitors: Competitor[] = [
  { name: "TAWAL", region: "Saudi Arabia", description: "STC-backed tower company; passive infrastructure sharing and site O&M at national scale." },
  { name: "IHS Towers", region: "Saudi Arabia & Kuwait", description: "Independent tower company delivering large-scale build-to-suit programs for regional operators." },
  { name: "TASC Towers", region: "UAE, Kuwait & Qatar JV", description: "Ooredoo/Zain-backed towerco spanning Qatar, Kuwait, Jordan, Iraq, Algeria and Tunisia." },
  { name: "Kalaam Telecom", region: "Bahrain, Kuwait & KSA", description: "Pan-Arab managed solutions provider with its own fiber network and enterprise ICT services." },
  { name: "METCO", region: "Kuwait, Iraq, UAE, KSA & Oman", description: "Towell Group subsidiary offering turnkey data center, networking, and ICT infrastructure." },
  { name: "Diyar United", region: "Kuwait", description: "Kuwait-based managed services provider serving niche public- and private-sector needs." },
];
