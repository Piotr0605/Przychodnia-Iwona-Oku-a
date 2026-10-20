import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { normalizePath } from "../seo/site";

/** Keeps older /#/sciezka and *.html addresses working after the move to real URLs. */
export const LegacyHashRedirect: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash.startsWith("#/")) {
      const [hashPath, hashQuery] = location.hash.slice(1).split("?");
      const next = normalizePath(hashPath || "/");
      navigate(`${next}${hashQuery ? `?${hashQuery}` : ""}`, { replace: true });
      return;
    }

    const normalized = normalizePath(location.pathname);
    if (normalized !== location.pathname) {
      navigate(`${normalized}${location.search}`, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
};
