import React, { useContext } from "react";

const FoldableContext = React.createContext<{ windowSegments?: DOMRect[] }>({});
FoldableContext.displayName = "FoldableContext";

const useFoldableContext = () => useContext(FoldableContext);

export { FoldableContext, useFoldableContext };
