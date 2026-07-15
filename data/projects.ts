export interface ProjectCaseStudy {
  slug: string;
  client: string;
  country: string;
  year: string;
  tag: string;
  color: "red" | "cyan" | "navy";
  title: string;
  challenge: string;
  scope: string[];
  scale?: string;
  results: string;
  photoLabel: string;
  photoSrc?: string;
  relatedServiceHref: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "zain-iraq-managed-services",
    client: "Zain Iraq",
    country: "Iraq",
    year: "2009–2012",
    tag: "MANAGED SERVICES",
    color: "cyan",
    title: "End-to-end managed services at national scale",
    challenge:
      "Following the initial FTK site build, Zain Iraq needed a single accountable partner to run day-to-day network operations across a large, multi-vendor footprint.",
    scope: ["24/7 NOC service", "24/7 field maintenance", "Core network operations", "IN charging operation"],
    scale: "5,000+ sites managed · 15M+ subscribers served",
    results:
      "Grew from core & radio managed services in 2009 into one of the largest end-to-end managed services contracts in the region by 2012.",
    photoLabel: "PHOTO — Iraq network site",
    photoSrc: "/images/projects/iraq-network-site.jpg",
    relatedServiceHref: "/services#managed-services",
  },
  {
    slug: "kuwait-consultancy-resourcing",
    client: "STC, Zain & Ooredoo",
    country: "Kuwait",
    year: "2017",
    tag: "CONSULTANCY & RESOURCING",
    color: "cyan",
    title: "500+ consultants across three national operators",
    challenge:
      "Kuwait's three national operators needed benchmarked radio performance and flexible, specialist resourcing without each building out separate in-house teams.",
    scope: ["Radio network drive-test & optimization", "Managed services resourcing", "PMO & program management"],
    scale: "6,000+ total sites supported · 500+ consultants deployed",
    results:
      "Delivered drive-test benchmarking and optimization alongside managed services for all three national operators simultaneously.",
    photoLabel: "PHOTO — Kuwait rollout crew",
    photoSrc: "/images/projects/kuwait-rollout-crew.jpg",
    relatedServiceHref: "/services#radio-audit",
  },
  {
    slug: "mecca-mosque-benchmark",
    client: "Ramadan network benchmark",
    country: "Saudi Arabia",
    year: "2022",
    tag: "RADIO AUDIT",
    color: "red",
    title: "Benchmarking network quality at peak season scale",
    challenge:
      "Radio network performance around the Grand Mosque needed validating against real customer experience during Ramadan, an estimated 1.4 million visitors placing extreme peak load on the network.",
    scope: [
      "Drive-test & benchmark data collection",
      "Coverage, signal quality & voice quality analysis",
      "80-20 SWOT-based optimization prioritization",
    ],
    scale: "1.4M visitors served during peak season",
    results: "Radio network benchmark completed during Ramadan season, serving 1.4 million visitors.",
    photoLabel: "PHOTO — stadium benchmark",
    photoSrc: "/images/projects/stadium-benchmark.jpg",
    relatedServiceHref: "/services#radio-audit",
  },
  {
    slug: "iraq-ftk-core-network-2004",
    client: "Zain Iraq",
    country: "Iraq",
    year: "2004",
    tag: "TURNKEY",
    color: "red",
    title: "Shabakkat's first mega engagement in Iraq",
    challenge:
      "Zain Iraq needed both core network buildout and full turnkey site construction to establish and scale its network in a demanding operating environment.",
    scope: ["Core network buildout", "Full turnkey (FTK) site construction"],
    results: "Core network buildout paired with full turnkey site construction — Shabakkat's first mega engagement in Iraq.",
    photoLabel: "PHOTO — Iraq turnkey site build, 2004",
    relatedServiceHref: "/services#turnkey",
  },
  {
    slug: "ksa-stc-mobily-rollout",
    client: "STC & Mobily",
    country: "Saudi Arabia",
    year: "2005",
    tag: "ROLLOUT",
    color: "red",
    title: "Multi-vendor rollout for the Kingdom's largest operators",
    challenge:
      "Two of Saudi Arabia's largest operators needed a coordinated multi-vendor rollout alongside an ongoing managed services and vendor management program.",
    scope: ["Multi-vendor rollout", "Managed services", "Vendor management"],
    results: "Multi-vendor rollout and managed services program supporting two of the Kingdom's largest operators.",
    photoLabel: "PHOTO — Saudi Arabia rollout, 2005",
    relatedServiceHref: "/services#network-rollout",
  },
  {
    slug: "sudan-ftk-managed-services",
    client: "Zain Sudan",
    country: "Sudan",
    year: "2007",
    tag: "TURNKEY",
    color: "red",
    title: "FTK site build paired with ongoing managed services",
    challenge:
      "Zain Sudan required both an initial full turnkey site build and a long-term managed services relationship as its network expanded.",
    scope: ["Full turnkey (FTK) site build", "Managed services"],
    results: "Full turnkey site build paired with ongoing managed services across Sudan's expanding network.",
    photoLabel: "PHOTO — Sudan network site, 2007",
    relatedServiceHref: "/services#turnkey",
  },
  {
    slug: "ericsson-egypt-oman-bahrain-rollout",
    client: "Ericsson",
    country: "Egypt, Oman & Bahrain",
    year: "2013",
    tag: "ROLLOUT",
    color: "red",
    title: "Mega 3G & 4G rollout across three markets simultaneously",
    challenge:
      "Ericsson needed a delivery partner able to execute a coordinated 3G/4G rollout program across three separate markets at once.",
    scope: ["3G/4G rollout execution", "Multi-country program coordination"],
    results: "Multi-country rollout program executed on behalf of Ericsson across three markets simultaneously.",
    photoLabel: "PHOTO — multi-country rollout, 2013",
    relatedServiceHref: "/services#network-rollout",
  },
  {
    slug: "uae-etisalat-du-rollout",
    client: "Etisalat & Du",
    country: "UAE",
    year: "2016",
    tag: "ROLLOUT",
    color: "red",
    title: "Mega 3G & 4G rollout for the UAE's leading operators",
    challenge:
      "Etisalat and Du both needed large-scale coverage and capacity expansion delivered on an accelerated timeline.",
    scope: ["3G/4G coverage rollout", "Capacity expansion"],
    results: "Large-scale coverage and capacity rollout for two of the UAE's leading operators.",
    photoLabel: "PHOTO — UAE rollout crew, 2016",
    relatedServiceHref: "/services#network-rollout",
  },
  {
    slug: "ihs-towers-power-kuwait",
    client: "IHS Towers",
    country: "Kuwait",
    year: "2020–ongoing",
    tag: "POWER",
    color: "navy",
    title: "Keeping a national tower portfolio powered",
    challenge:
      "IHS Towers needed ongoing, reliable power supply and maintenance across its Kuwait tower portfolio to keep sites running in demanding conditions.",
    scope: ["Diesel generator supply & maintenance", "Power systems maintenance"],
    results: "Ongoing supply and maintenance of power systems keeping IHS's tower portfolio running.",
    photoLabel: "PHOTO — power & diesel generator site, Kuwait",
    relatedServiceHref: "/services#power-supply",
  },
  {
    slug: "kuwait-ministry-communications-consultancy",
    client: "Ministry of Communications",
    country: "Kuwait",
    year: "2021",
    tag: "CONSULTANCY",
    color: "navy",
    title: "Consultancy & resourcing for national fiber broadband",
    challenge:
      "Kuwait's Ministry of Communications needed specialist NOC management resourcing to support its national fiber broadband (GPON) infrastructure.",
    scope: ["GPON NOC management", "Consultancy & resourcing"],
    results: "20 GPON NOC management engagement supporting national fiber broadband infrastructure.",
    photoLabel: "PHOTO — NOC operations, Kuwait",
    relatedServiceHref: "/services#back-office-noc",
  },
];
