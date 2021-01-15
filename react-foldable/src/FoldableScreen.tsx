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
    | ((props: FoldableComponentProps<any>) => React.ReactNode)
    | React.ReactNode;
  render?: (props: FoldableComponentProps<any>) => React.ReactNode;
  children?:
    | ((props: FoldableComponentProps<any>) => React.ReactNode)
    | React.ReactNode;
}

const FoldableScreen = ({
  matchScreen,
  component,
  render,
  children,
}: FoldableScreenProps) => {
  return (
    <FoldableContext.Consumer>
      {(context) => {
        const props = {
          screenIndex: matchScreen,
          windowSegment:
            matchScreen === undefined
              ? undefined
              : (context.windowSegments || [])[matchScreen],
        };

        return children
          ? typeof children === "function"
            ? children(props)
            : children
          : component
          ? React.createElement(component as any, props)
          : render
          ? render(props)
          : null;
      }}
    </FoldableContext.Consumer>
  );
};

export { FoldableScreen };
