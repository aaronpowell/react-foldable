# React-Foldable

React-Foldable is a set of components and React hooks that make it easier to work with foldable displays, such as the [Surface Duo](https://docs.microsoft.com/dual-screen/web/?WT.mc_id=reactfoldable-github-aapowell).

## Usage

There are two core components, `Foldable` and `FoldableScreen`.

### `<Foldable>`

```jsx
<Foldable>...</Foldable>
```

This component is intended to enclose a whole application, or the whole of the application that needs to be foldable-aware. It contains the logic to connect with all the media queries and JavaScript APIs then expose that information via a React context.

### `<FoldableScreen>`

```jsx
<Foldable>
  <FoldableScreen matchScreen={0} component={FirstScreen} />
  <FoldableScreen matchScreen={1} component={SecondScreen} />
</Foldable>
```

This component will determine whether or not to show the `component` provided, depending on whether the `matchScreen` number matches a visible screen.

### Hooks

There are four hooks available. Note: with the exception of the context hook, you don't need to be within a `<Foldable>` component to use these hooks.

#### `useDualScreen`

This returns a boolean value that indicates whether the display is in dual-screen mode or not.

#### `useScreenSpanning`

This returns the span mode for the current display, using the TypeScript enum `ScreenSpanning`:

```typescript
enum ScreenSpanning {
  Vertical = "single-fold-vertical",
  Horizontal = "single-fold-horizontal",
  Unknown = "unknown",
}
```

The value of `unknown` is used if the device is not a foldable, or not in foldable mode.

#### `useWindowSegments`

This returns an array of `DOMRect` that contains the dimensions of the visible screens. In a non-foldable device, it will have one element, in a foldable/multi-screen device, it will return an item for each screen, counting from top-left.

#### `useFoldableContext`

This provides access to the React context that exposes the information from each of the hooks, should you prefer to access it via context rather than the hooks directly.

## License

[MIT](../License.md)
