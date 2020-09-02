import { useState, useEffect } from "react";

declare global {
  interface Window {
    getWindowSegments: () => DOMRect[];
  }
}

const useWindowSegments = () => {
  if (!("getWindowSegments" in window)) {
    return [
      new DOMRect(
        window.pageXOffset,
        window.pageYOffset,
        window.innerWidth,
        window.innerHeight
      ),
    ];
  }

  const [screenCount, setScreenCount] = useState(window.getWindowSegments());

  useEffect(() => {
    const isDualScreen = window.matchMedia(
      "(screen-spanning: single-fold-horizontal), (screen-spanning: single-fold-vertical)"
    );
    const updateScreenInfo = () => {
      setScreenCount(window.getWindowSegments());
    };

    isDualScreen.addEventListener("change", updateScreenInfo);

    return () => {
      isDualScreen &&
        isDualScreen.removeEventListener("change", updateScreenInfo);
    };
  }, []);

  return screenCount;
};

export { useWindowSegments };
