import React from "react";
import { VerticalGrid } from "../shared/VerticalGrid";
import { Square } from "../shared/Square";

import {
  useInsertFocusRemove,
  useCurrentFocusedId,
  useTabindex,
} from "../../hooks";

import { scrollIntoView, createElements } from "../../utils";

const elements = createElements(14);

type Props = {
  isKeyPressed: boolean;
};

export function VerticalList({ isKeyPressed }: Props) {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const getTabIndex = useTabindex();

  return (
    <VerticalGrid rows={Math.ceil(elements.length / 3)}>
      {elements.map((element) => (
        <Square
          key={element.id}
          isFocused={currentFocusedId === element.id}
          tabIndex={getTabIndex(element.id)}
          ref={(div) => insertFocus(element.id, element.toFocus, div)}
          onFocus={(event) => {
            scrollIntoView(event.target, isKeyPressed);
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
