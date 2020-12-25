import React from "react";
import { Square, VerticalGrid } from "components/shared";

import {
  useInsertFocusRemove,
  useCurrentFocusedId,
  useTabindex,
  useKeys,
} from "hooks";

import { scrollIntoView, createElements } from "utils";

const elements = createElements(14, "A");

type Props = {
  isKeyPressed: boolean;
};

export default function VerticalList({ isKeyPressed }: Props) {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const getTabIndex = useTabindex();
  const keys = useKeys();

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
          onKeyDown={({ key }) =>
            key === keys.interact &&
            console.log(`You've interacted with element ${element.id}.`)
          }
        >
          {element.id}
        </Square>
      ))}
    </VerticalGrid>
  );
}
