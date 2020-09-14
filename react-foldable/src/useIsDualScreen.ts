import { useState, useEffect } from "react";
import { getDualScreenMatchMedia } from "./mediaQuery";

const useIsDualScreen = () => {
  const [isDualScreen, setIsDualScreen] = useState(false);

  useEffect(() => {
    const watcher = getDualScreenMatchMedia();
    const updateIsDualScreen = () => {
      setIsDualScreen(watcher.matches);
    };

    watcher.addEventListener("change", updateIsDualScreen);
    updateIsDualScreen();

    return () => {
      watcher && watcher.removeEventListener("change", updateIsDualScreen);
    };
  }, []);
  return isDualScreen;
};

export { useIsDualScreen };
