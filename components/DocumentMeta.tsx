import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  PAGE_META,
  SITE_NAME,
  clinicJsonLd,
  pageUrl,
} from "../seo/site";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export const DocumentMeta: React.FC = () => {
  const { pathname } = useLocation();
  const page = PAGE_META.find((entry) => entry.path === pathname);
  const title = page?.title ?? DEFAULT_TITLE;
  const description = page?.description ?? DEFAULT_DESCRIPTION;
  const url = pageUrl(page?.path ?? "/");

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "pl";
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertCanonical(url);
    upsertMeta("property", "og:locale", "pl_PL");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
  }, [title, description, url]);

  if (pathname !== "/") return null;

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }} />
  );
};
