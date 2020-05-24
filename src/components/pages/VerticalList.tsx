import React from "react";
import { VerticalGrid } from "../shared/VerticalGrid";
import { Square } from "../shared/Square";

import {
  useDirectionListener,
  useInsertFocusRemove,
  useCurrentFocusedId,
  usePrevious
} from "../../hooks";

import { scrollIntoView, createElements } from "../../utils";

const elements = createElements(14);

export function VerticalList() {
  const repeat = useDirectionListener();
  const currentFocusedId = useCurrentFocusedId();
  const previousFocusedId = usePrevious(currentFocusedId);
  const insertFocus = useInsertFocusRemove();

  return (
    <VerticalGrid rows={Math.ceil(elements.length / 3)}>
      {elements.map(element => (
        <Square
          key={element.id}
          isFocused={currentFocusedId === element.id}
          isPreviousFocus={previousFocusedId === element.id}
          ref={div => insertFocus(element.id, element.toFocus, div)}
          onFocus={event => {
            scrollIntoView(event.target, repeat);
            console.log(`You've focused element ${element.id}.`);
          }}
          onBlur={() => console.log(`You've blured element ${element.id}.`)}
        >
          {element.id}
        </Square>
      ))}
    </VerticalGrid>
  );
}
