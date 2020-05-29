export const scrollIntoView = (
  target: HTMLElement,
  fastScroll = false,
  block: ScrollLogicalPosition = "center",
  inline: ScrollLogicalPosition = "center"
) => {
  target.scrollIntoView({
    behavior: fastScroll ? "auto" : "smooth",
    block,
    inline
  });
};
