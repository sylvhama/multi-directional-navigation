import React from "react";
import {
  useIsInserted,
  useIsFocused,
  useUpsertHtmlElement,
  useUpsert,
  useFocus,
  useRemove
} from "./";
import { Position } from "../contexts/types";

export const useInsertFocusRemove = (preventScroll = true) => {
  const isInserted = useIsInserted();
  const isFocused = useIsFocused();
  const upsertHtmlElement = useUpsertHtmlElement();
  const upsert = useUpsert();
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

  return (
    id: string,
    toFocus: boolean,
    htmlElement: HTMLElement | null,
    customPosition?: Position,
    depth = 0
  ) => {
    if (!isInserted(id) && htmlElement) {
      currentIdHTMLElements.push({ id, htmlElement });
      if (customPosition) {
        upsert({ id, depth, ...customPosition });
      } else {
        upsertHtmlElement(id, htmlElement, depth);
      }
      if (toFocus) focus(id);
    }
  };
};
