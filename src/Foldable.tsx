import React from "react";
import { useWindowSegments } from "./useWindowSegments";
import { FoldableScreenProps } from "./FoldableScreen";
import { FoldableContext } from "./FoldableContext";

const Foldable: React.FC = (props) => {
  const windowSegments = useWindowSegments();

  return (
    <FoldableContext.Provider value={{ windowSegments: windowSegments }}>
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
