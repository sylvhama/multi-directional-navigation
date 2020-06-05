import React from "react";
import { HorizontalGrid, Card } from "components/shared";

import {
  useKeyboardListener,
  useInsertFocusRemove,
  useCurrentFocusedId,
  useFocus,
  useTabindex,
} from "hooks";

import { scrollIntoView, createElements } from "utils";

const elements = createElements(20);

type Props = {
  isKeyPressed: boolean;
};

export default function HorizontalList({ isKeyPressed }: Props) {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const focus = useFocus();
  const getTabIndex = useTabindex();

  useKeyboardListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
      case 35: // end
        return focus(elements[elements.length - 1].id);
      case 36: // home
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
          onKeyDown={({ keyCode }) =>
            keyCode === 13 &&
            console.log(`You've pressed ↵ on element ${element.id}.`)
          }
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
