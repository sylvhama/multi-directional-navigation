export const scrollIntoView = (
  target: HTMLElement,
  forceAuto = false,
  block: ScrollLogicalPosition = "center",
  inline: ScrollLogicalPosition = "center"
) => {
  target.scrollIntoView({
    behavior: forceAuto ? "auto" : "smooth",
    block,
    inline
  });
};
