export const SITE_URL = "https://www.poradniamickiewicza.pl";
export const SITE_NAME = "NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła";

export const DEFAULT_TITLE = `${SITE_NAME} | Białystok`;
export const DEFAULT_DESCRIPTION =
  "NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła w Białymstoku. Opieka POZ dla całej rodziny, ul. Mickiewicza 44A. Rejestracja: 85 748 23 12.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

export const PAGE_META: PageMeta[] = [
  {
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/rejestracja",
    title: `Rejestracja pacjentów | ${SITE_NAME}`,
    description:
      "Jak umówić wizytę w NZOZ Iwona Okuła w Białymstoku. Rejestracja telefoniczna 85 748 23 12, poniedziałek–piątek 8:00–18:00, ul. Mickiewicza 44A.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/karta-poz",
    title: `Karta POZ i deklaracja wyboru | ${SITE_NAME}`,
    description:
      "Deklaracja wyboru lekarza, pielęgniarki i położnej podstawowej opieki zdrowotnej w NZOZ Iwona Okuła, Białystok.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/gdzie-po-pomoc",
    title: `Gdzie po pomoc? | ${SITE_NAME}`,
    description:
      "Gdzie szukać pomocy medycznej poza godzinami pracy przychodni. Informacje dla pacjentów NZOZ Iwona Okuła w Białymstoku.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/cennik-uslug",
    title: `Cennik usług prywatnych | ${SITE_NAME}`,
    description:
      "Cennik usług prywatnych NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła przy ul. Mickiewicza 44A w Białymstoku.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/cennik-szczepien",
    title: `Cennik szczepień | ${SITE_NAME}`,
    description:
      "Cennik szczepień w NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła, ul. Mickiewicza 44A, Białystok.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/wsparcie-poz",
    title: `Wsparcie POZ – dofinansowanie z Funduszy Europejskich | ${SITE_NAME}`,
    description:
      "NZOZ Iwona Okuła realizuje przedsięwzięcie „Wsparcie podstawowej opieki zdrowotnej (POZ)” dofinansowane z Europejskiego Funduszu Rozwoju Regionalnego w programie FEnIKS 2021–2027.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/polityka-rodo",
    title: `Polityka prywatności i RODO | ${SITE_NAME}`,
    description:
      "Polityka prywatności i klauzula informacyjna RODO NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła w Białymstoku.",
    changefreq: "yearly",
    priority: "0.3",
  },
];

export function pageUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  telephone: "+48857482312",
  medicalSpecialty: "PrimaryCare",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Mickiewicza 44A",
    addressLocality: "Białystok",
    postalCode: "15-223",
    addressCountry: "PL",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export const grantJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Wsparcie podstawowej opieki zdrowotnej (POZ)",
  url: pageUrl("/wsparcie-poz"),
  inLanguage: "pl-PL",
  description: PAGE_META.find((page) => page.path === "/wsparcie-poz")?.description,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
  },
  about: {
    "@type": "MonetaryGrant",
    name: "Wsparcie podstawowej opieki zdrowotnej (POZ)",
    identifier: "FENX.06.01-IP.03-0001/23",
    funder: [
      {
        "@type": "GovernmentOrganization",
        name: "Unia Europejska — Europejski Fundusz Rozwoju Regionalnego",
      },
      {
        "@type": "GovernmentOrganization",
        name: "Narodowy Fundusz Zdrowia",
      },
    ],
  },
};
