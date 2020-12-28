import React from "react";
import { HorizontalGrid, Card } from "components/shared";

import {
  useKeyboardListener,
  useInsertFocusRemove,
  useCurrentFocusedId,
  useFocus,
  useTabindex,
  useKeys,
} from "hooks";

import { scrollIntoView, createElements } from "utils";

const elements = createElements(20, "B");

type Props = {
  isKeyPressed: boolean;
};

export default function HorizontalList({ isKeyPressed }: Props) {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const focus = useFocus();
  const getTabIndex = useTabindex();
  const keys = useKeys();

  useKeyboardListener("keyup", ({ key }) => {
    switch (key) {
      case keys.rightSkip:
        return focus(elements[elements.length - 1].id);
      case keys.leftSkip:
        return focus(elements[0].id);
    }
  });

  return (
    <HorizontalGrid>
      {elements.map((element, index) => (
        <Card
          key={element.id}
          isFocused={currentFocusedId === element.id}
          tabIndex={getTabIndex(element.id)}
          ref={(div) =>
            insertFocus(
              element.id,
              element.toFocus,
              div,
              createCustomPositon(index)
            )
          }
          onFocus={(event) => {
            scrollIntoView(event.target, isKeyPressed);
            console.log(`You've focused element ${element.id}.`);
          }}
          onBlur={() => console.log(`You've blured element ${element.id}.`)}
          onKeyDown={({ key }) =>
            key === keys.interact &&
            console.log(`You've interacted with element ${element.id}.`)
          }
          onClick={() => console.log(`You've "clicked" on ${element.id}.`)}
        >
          {element.id}
        </Card>
      ))}
    </HorizontalGrid>
  );
}

function createCustomPositon(index: number) {
  const size = 10;
  return {
    left: index + size * index,
    right: index + size * (index + 1),
    top: 100,
    bottom: 100 + size,
  };
}
