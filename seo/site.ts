export const SITE_URL = "https://www.poradniamickiewicza.pl";
export const SITE_NAME = "NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła";
/** The brand as page titles spell it; search engines may show it as the site name. */
export const SITE_SHORT_NAME = "NZOZ Okuła";
export const SITE_LANGUAGE = "pl-PL";
export const OG_IMAGE_PATH = "/og-image.png";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const LOGO_PATH = "/icon-512.png";
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;
export const LOGO_SIZE = 512;
export const OG_IMAGE_ALT = "NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła w Białymstoku";
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
export const INDEX_ROBOTS = "index, follow, max-image-preview:large";
export const NOINDEX_ROBOTS = "noindex, nofollow";

export const DEFAULT_TITLE = "Przychodnia POZ Białystok | NZOZ Okuła";
export const DEFAULT_DESCRIPTION =
  "NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła w Białymstoku. Opieka POZ dla całej rodziny, ul. Mickiewicza 44A. Rejestracja: 85 748 23 12.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Name in the breadcrumb trail. Reuse the label the menus show for this page. */
  breadcrumb: string;
  /** Path of the page one step up the breadcrumb trail. Defaults to the homepage. */
  parent?: string;
  /**
   * Day of the last significant change to the page (text, metadata or
   * structured data), as YYYY-MM-DD. Feeds sitemap.xml, so bump it with the edit.
   */
  lastmod: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

export const PAGE_META: PageMeta[] = [
  {
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    breadcrumb: "Strona główna",
    lastmod: "2026-11-12",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/rejestracja",
    title: "Rejestracja pacjentów Białystok | NZOZ Okuła",
    description:
      "Jak umówić wizytę w NZOZ Iwona Okuła w Białymstoku. Rejestracja telefoniczna 85 748 23 12, poniedziałek–piątek 8:00–18:00, ul. Mickiewicza 44A.",
    breadcrumb: "Rejestracja",
    lastmod: "2026-11-12",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/karta-poz",
    title: "Karta POZ i deklaracja wyboru Białystok | NZOZ Okuła",
    description:
      "Deklaracja wyboru lekarza, pielęgniarki i położnej podstawowej opieki zdrowotnej w NZOZ Iwona Okuła, ul. Mickiewicza 44A, Białystok.",
    breadcrumb: "Karta POZ",
    lastmod: "2026-11-12",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/gdzie-po-pomoc",
    title: "Gdzie po pomoc? Białystok | NZOZ Okuła",
    description:
      "Pomoc medyczna poza godzinami przychodni NZOZ Iwona Okuła w Białymstoku: nocna i świąteczna opieka zdrowotna oraz numer alarmowy 112.",
    breadcrumb: "Gdzie po pomoc?",
    lastmod: "2026-11-12",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/cennik-uslug",
    title: "Cennik usług prywatnych Białystok | NZOZ Okuła",
    description:
      "Cennik usług prywatnych NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła przy ul. Mickiewicza 44A w Białymstoku, poza kontraktem z NFZ.",
    breadcrumb: "Cennik usług prywatnych",
    lastmod: "2026-11-12",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/cennik-szczepien",
    title: "Cennik szczepień Białystok | NZOZ Okuła",
    description:
      "Cennik szczepień zalecanych i dodatkowych (odpłatnych) w NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła, ul. Mickiewicza 44A, Białystok.",
    breadcrumb: "Cennik szczepień",
    lastmod: "2026-11-12",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/aktualnosci",
    title: "Aktualności przychodni Białystok | NZOZ Okuła",
    description:
      "Aktualności NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła w Białymstoku, w tym informacja o dofinansowaniu przedsięwzięcia Wsparcie POZ.",
    breadcrumb: "Aktualności",
    lastmod: "2026-11-12",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/dofinansowanie",
    title: "Wsparcie POZ Białystok | NZOZ Okuła",
    description:
      "Przedsięwzięcie „Wsparcie podstawowej opieki zdrowotnej (POZ)” realizowane przez Iwonę Okułę w Białymstoku, ul. Mickiewicza 44A, ze środków Funduszy Europejskich.",
    breadcrumb: "Dofinansowanie (Fundusze Europejskie)",
    parent: "/aktualnosci",
    lastmod: "2026-11-12",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/polityka-rodo",
    title: "Polityka prywatności i RODO Białystok | NZOZ Okuła",
    description:
      "Polityka prywatności i klauzula informacyjna RODO NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła, ul. Mickiewicza 44A, 15-223 Białystok.",
    breadcrumb: "Polityka prywatności",
    lastmod: "2026-11-12",
    changefreq: "yearly",
    priority: "0.3",
  },
];

export function pageUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export const NOT_FOUND_TITLE = "Nie znaleziono strony Białystok | NZOZ Okuła";
export const NOT_FOUND_DESCRIPTION =
  "Ten adres nie istnieje w serwisie NZOZ Podstawowa Opieka Zdrowotna Iwona Okuła w Białymstoku.";

/** Collapses trailing slashes and legacy *.html addresses onto the public path. */
export function normalizePath(pathname: string): string {
  let path = pathname || "/";
  if (path.length > 1 && path.endsWith("/")) path = path.replace(/\/+$/, "");
  if (path === "/index.html") return "/";
  if (path.endsWith(".html")) path = path.slice(0, -".html".length) || "/";
  return path || "/";
}

const WEBSITE_ID = `${SITE_URL}/#website`;
const CLINIC_ID = `${SITE_URL}/#przychodnia`;

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  inLanguage: SITE_LANGUAGE,
  publisher: { "@id": CLINIC_ID },
};

const clinicJsonLd = {
  "@type": "MedicalClinic",
  "@id": CLINIC_ID,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  image: OG_IMAGE_URL,
  telephone: "+48857482312",
  medicalSpecialty: "PrimaryCare",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Mickiewicza 44A",
    addressLocality: "Białystok",
    addressRegion: "podlaskie",
    postalCode: "15-223",
    addressCountry: "PL",
  },
  // The OpenStreetMap footprint of the building numbered 44A on ul. Adama Mickiewicza.
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.12224,
    longitude: 23.17203,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

function breadcrumbTrail(page: PageMeta): PageMeta[] {
  const trail = [page];
  let current = page;
  while (current.path !== "/") {
    const parentPath = current.parent ?? "/";
    const parent = PAGE_META.find((entry) => entry.path === parentPath);
    if (!parent || trail.includes(parent)) break;
    trail.unshift(parent);
    current = parent;
  }
  return trail;
}

/**
 * Structured data for one public page: the site, the clinic, the page itself
 * and, below the homepage, its breadcrumb trail.
 */
export function pageJsonLd(page: PageMeta) {
  const url = pageUrl(page.path);
  const trail = breadcrumbTrail(page);
  const hasBreadcrumb = trail.length > 1;
  const breadcrumbId = `${url}#breadcrumb`;

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { "@id": WEBSITE_ID },
    ...(page.path === "/" ? { about: { "@id": CLINIC_ID } } : {}),
    ...(hasBreadcrumb ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: trail.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.breadcrumb,
      item: pageUrl(entry.path),
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [websiteJsonLd, clinicJsonLd, webPage, ...(hasBreadcrumb ? [breadcrumbList] : [])],
  };
}

/** The JSON-LD script body. Escapes "<" so the text cannot close its own script tag. */
export function pageJsonLdText(page: PageMeta): string {
  return JSON.stringify(pageJsonLd(page)).replace(/</g, "\\u003c");
}
