import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Check if navigation included a specific target section (hash navigation across pages)
    if (state && (state as any).targetId) {
      const targetId = (state as any).targetId;
      
      // Small delay to ensure the new page's DOM is fully mounted before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Default behavior: scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}