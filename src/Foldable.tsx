import React from "react";
import { useWindowSegments } from "./useWindowSegments";
import { FoldableScreenProps } from "./FoldableScreen";
import { FoldableContext } from "./FoldableContext";
import { useIsDualScreen } from "./useIsDualScreen";
import { useScreenSpanning } from "./useScreenSpanning";

const Foldable: React.FC = (props) => {
  const windowSegments = useWindowSegments();
  const isDualScreen = useIsDualScreen();
  const screenSpanning = useScreenSpanning();

  return (
    <FoldableContext.Provider
      value={{ windowSegments, isDualScreen, screenSpanning }}
    >
      {React.Children.map(props.children, (c) => {
        if (React.isValidElement<FoldableScreenProps>(c)) {
          const element = c;
          return c.props.matchScreen < windowSegments.length
            ? React.cloneElement(element, {
                matchScreen: element.props.matchScreen,
              })
            : null;
        }
        return null;
      })}
    </FoldableContext.Provider>
  );
};

export { Foldable };
