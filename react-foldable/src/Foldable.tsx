import React from "react";
import { useWindowSegments } from "./useWindowSegments";
import { FoldableScreenProps } from "./FoldableScreen";
import { FoldableContext } from "./FoldableContext";
import { useIsDualScreen } from "./useIsDualScreen";
import { useScreenSpanning } from "./useScreenSpanning";

const Foldable = (props: { children: React.ReactNode }) => {
  const windowSegments = useWindowSegments();
  const isDualScreen = useIsDualScreen();
  const screenSpanning = useScreenSpanning();

  const contextValue = { windowSegments, isDualScreen, screenSpanning };

  return (
    <FoldableContext.Provider value={contextValue}>
      {React.Children.map(props.children, (foldableScreenChild) => {
        if (React.isValidElement<FoldableScreenProps>(foldableScreenChild)) {
          const { match, matchScreen } = foldableScreenChild.props;

          // do we have a custom matcher function and does it match?
          if (match && match(contextValue)) {
            return React.cloneElement(foldableScreenChild, {
              matchScreen: foldableScreenChild.props.matchScreen,
            });
            // do we have a screen to match and is it in the visible window segments
          } else if (
            matchScreen !== undefined &&
            matchScreen < windowSegments.length
          ) {
            return React.cloneElement(foldableScreenChild, {
              matchScreen: foldableScreenChild.props.matchScreen,
            });
          }
        }

        // either didn't match a custom matcher, the screen is out of range
        // or no matching test was provided
        return null;
      })}
    </FoldableContext.Provider>
  );
};

export { Foldable };
