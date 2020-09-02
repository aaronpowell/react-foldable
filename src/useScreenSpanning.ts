import { useState, useEffect } from "react";
import {
  getDualScreenMatchMedia,
  singleFoldHorizontal,
  singleFoldVertical,
} from "./mediaQuery";

enum ScreenSpanning {
  Vertical = "single-fold-vertical",
  Horizontal = "single-fold-horizontal",
  Unknown = "unknown",
}

const mm = window.matchMedia;

const useScreenSpanning = () => {
  const [screenSpanning, setScreenSpanning] = useState(ScreenSpanning.Unknown);

  useEffect(() => {
    const watcher = getDualScreenMatchMedia();

    const updater = () => {
      if (mm(singleFoldHorizontal).matches) {
        setScreenSpanning(ScreenSpanning.Horizontal);
      } else if (mm(singleFoldVertical).matches) {
        setScreenSpanning(ScreenSpanning.Vertical);
      } else {
        setScreenSpanning(ScreenSpanning.Unknown);
      }
    };
    watcher.addEventListener("change", updater);
    updater();

    return () => watcher.removeEventListener("change", updater);
  }, []);

  return screenSpanning;
};

export { useScreenSpanning, ScreenSpanning };
