export const useIsPotentiallyDualScreenDevice = () => {
  return /Surface Duo/.test(navigator.userAgent);
};
