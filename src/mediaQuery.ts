const singleFoldHorizontal = "(screen-spanning: single-fold-horizontal)";
const singleFoldVertical = "(screen-spanning: single-fold-vertical)";

const getDualScreenMatchMedia = () =>
  window.matchMedia(`${singleFoldHorizontal}, ${singleFoldVertical}`);

export { getDualScreenMatchMedia, singleFoldHorizontal, singleFoldVertical };
