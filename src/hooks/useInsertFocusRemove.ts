import React from "react";
import {
  useIsInserted,
  useIsFocused,
  useUpsertHtmlElement,
  useFocus,
  useRemove
} from "./";

export const useInsertFocusRemove = (preventScroll = true) => {
  const isInserted = useIsInserted();
  const isFocused = useIsFocused();
  const upsertHtmlElement = useUpsertHtmlElement();
  const focus = useFocus();
  const remove = useRemove();

  const { current: currentIdHTMLElements } = React.useRef<
    { id: string; htmlElement: HTMLElement }[]
  >([]);

  React.useEffect(() => {
    currentIdHTMLElements.forEach(({ id, htmlElement }) => {
      if (isFocused(id)) {
        htmlElement.focus({ preventScroll });
      }
    });
  }, [currentIdHTMLElements, isFocused, preventScroll]);

  React.useEffect(() => {
    return () => {
      currentIdHTMLElements.forEach(({ id }) => {
        remove(id);
      });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (id: string, toFocus: boolean, htmlElement: HTMLElement | null) => {
    if (!isInserted(id) && htmlElement) {
      currentIdHTMLElements.push({ id, htmlElement });
      upsertHtmlElement(id, htmlElement);
      if (toFocus) focus(id);
    }
  };
};
