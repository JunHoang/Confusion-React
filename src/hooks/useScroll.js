import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(null);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeRventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
