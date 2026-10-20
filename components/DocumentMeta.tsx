import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  INDEX_ROBOTS,
  NOINDEX_ROBOTS,
  NOT_FOUND_DESCRIPTION,
  NOT_FOUND_TITLE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  PAGE_META,
  SITE_NAME,
  clinicJsonLd,
  normalizePath,
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

function removeMeta(attribute: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
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

function removeCanonical() {
  document.head.querySelector('link[rel="canonical"]')?.remove();
}

function syncJsonLd(include: boolean) {
  const existing = document.head.querySelector('script[type="application/ld+json"]');
  if (!include) {
    existing?.remove();
    return;
  }
  if (existing) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(clinicJsonLd);
  document.head.appendChild(script);
}

export const DocumentMeta: React.FC = () => {
  const { pathname } = useLocation();
  const page = PAGE_META.find((entry) => entry.path === normalizePath(pathname));
  const title = page?.title ?? NOT_FOUND_TITLE;
  const description = page?.description ?? NOT_FOUND_DESCRIPTION;
  const url = page ? pageUrl(page.path) : null;
  const robots = page ? INDEX_ROBOTS : NOINDEX_ROBOTS;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "pl";
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    if (url) upsertCanonical(url);
    else removeCanonical();
    upsertMeta("property", "og:locale", "pl_PL");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", OG_IMAGE_URL);
    upsertMeta("property", "og:image:width", OG_IMAGE_WIDTH);
    upsertMeta("property", "og:image:height", OG_IMAGE_HEIGHT);
    upsertMeta("property", "og:image:alt", OG_IMAGE_ALT);
    if (url) upsertMeta("property", "og:url", url);
    else removeMeta("property", "og:url");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", OG_IMAGE_URL);
    syncJsonLd(page?.path === "/");
  }, [title, description, url, robots, page]);

  return null;
};
