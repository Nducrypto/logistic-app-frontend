import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const cantControlScrollRestoration = "scrollRestoration" in window.history;
    if (cantControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollToTop;
