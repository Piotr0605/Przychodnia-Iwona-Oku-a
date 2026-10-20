import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/** Keeps older /#/sciezka addresses working after the move to real URLs. */
export const LegacyHashRedirect: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash.startsWith("#/")) {
      navigate(location.hash.slice(1), { replace: true });
    }
  }, [location.hash, navigate]);

  return null;
};
