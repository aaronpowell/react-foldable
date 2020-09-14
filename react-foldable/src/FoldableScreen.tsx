import React from "react";
import { FoldableContext, FoldableContextProps } from "./FoldableContext";

export interface FoldableComponentProps<
  Params extends { [K in keyof Params]?: string } = {}
> {
  screenIndex?: number;
  windowSegment?: DOMRect;
}

export interface FoldableScreenProps {
  match?: (props: FoldableContextProps) => boolean;
  matchScreen?: number;
  component?:
    | React.ComponentType<FoldableComponentProps<any>>
    | React.ComponentType<any>;
  children?:
    | React.ComponentType<FoldableComponentProps<any>>
    | React.ComponentType<any>;
}

const FoldableScreen = ({
  matchScreen,
  component,
  children,
}: FoldableScreenProps) => {
  const c = component ?? children;

  if (!c) {
    return null;
  }
  return (
    <FoldableContext.Consumer>
      {(context) => {
        return React.createElement(c, {
          screenIndex: matchScreen,
          windowSegment:
            matchScreen === undefined
              ? undefined
              : (context.windowSegments || [])[matchScreen],
        });
      }}
    </FoldableContext.Consumer>
  );
};

export { FoldableScreen };
