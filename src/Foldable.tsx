import React from "react";
import { useWindowSegments } from "./useWindowSegments";
import { FoldableScreenProps } from "./FoldableScreen";
import { FoldableContext, FoldableContextProps } from "./FoldableContext";
import { useIsDualScreen } from "./useIsDualScreen";
import { useScreenSpanning } from "./useScreenSpanning";

const Foldable = (props: { children: React.ReactNode }) => {
  const windowSegments = useWindowSegments();
  const isDualScreen = useIsDualScreen();
  const screenSpanning = useScreenSpanning();

  return (
    <FoldableContext.Provider
      value={{ windowSegments, isDualScreen, screenSpanning }}
    >
      {React.Children.map(props.children, (c) => {
        if (React.isValidElement<FoldableScreenProps>(c)) {
          const { match, matchScreen } = c.props;

          if (match) {
            return match({ windowSegments, isDualScreen, screenSpanning })
              ? React.cloneElement(c, {
                  matchScreen: c.props.matchScreen,
                })
              : null;
          } else if (matchScreen !== undefined) {
            return matchScreen < windowSegments.length
              ? React.cloneElement(c, {
                  matchScreen: c.props.matchScreen,
                })
              : null;
          } else {
            return null;
          }
        }
        return null;
      })}
    </FoldableContext.Provider>
  );
};

export { Foldable };
