import React, { useContext } from "react";
import { ScreenSpanning } from "./useScreenSpanning";

interface FoldableContextProps {
  windowSegments?: DOMRect[];
  isDualScreen: boolean;
  screenSpanning: ScreenSpanning;
}

const FoldableContext = React.createContext<FoldableContextProps>({
  isDualScreen: false,
  screenSpanning: ScreenSpanning.Unknown,
});
FoldableContext.displayName = "FoldableContext";

const useFoldableContext = () => useContext(FoldableContext);

export { FoldableContext, useFoldableContext, FoldableContextProps };
