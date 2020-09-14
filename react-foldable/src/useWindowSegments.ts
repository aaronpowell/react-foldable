import { useState, useEffect } from "react";
import { getDualScreenMatchMedia } from "./mediaQuery";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    const watcher = getDualScreenMatchMedia();
    const updateScreenInfo = () => {
      setScreenCount(window.getWindowSegments());
    };

    watcher.addEventListener("change", updateScreenInfo);

    return () => {
      watcher && watcher.removeEventListener("change", updateScreenInfo);
    };
  }, []);

  return screenCount;
};

export { useWindowSegments };
