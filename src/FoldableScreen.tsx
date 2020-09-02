import React from "react";
import { FoldableContext } from "./FoldableContext";

type FoldableScreen = React.FC;

export interface FoldableComponentProps<
  Params extends { [K in keyof Params]?: string } = {}
> {
  screenIndex: number;
  windowSegment: DOMRect;
}

export interface FoldableScreenProps {
  matchScreen: number;
  component:
    | React.ComponentType<FoldableComponentProps<any>>
    | React.ComponentType<any>;
}

const FoldableScreen: React.FC<FoldableScreenProps> = ({
  matchScreen,
  component,
}) => {
  return (
    <FoldableContext.Consumer>
      {(context) =>
        React.createElement(component, {
          screenIndex: matchScreen,
          windowSegment: (context.windowSegments || [])[matchScreen],
        })
      }
    </FoldableContext.Consumer>
  );
};

export { FoldableScreen };
