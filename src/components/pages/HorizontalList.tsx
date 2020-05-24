import React from "react";
import { HorizontalGrid } from "../shared/HorizontalGrid";
import { Card } from "../shared/Card";

import {
  useDirectionListener,
  useInsertFocusRemove,
  useIsFocused
} from "../../hooks";

import { scrollIntoView, createElements } from "../../utils";

const elements = createElements(8);

export function HorizontalList() {
  const repeat = useDirectionListener();
  const isFocused = useIsFocused();
  const insertFocus = useInsertFocusRemove();

  return (
    <HorizontalGrid>
      {elements.map(element => (
        <Card
          key={element.id}
          isFocused={isFocused(element.id)}
          ref={div => insertFocus(element.id, element.toFocus, div)}
          onFocus={event => {
            scrollIntoView(event.target, repeat);
            console.log(`You've focused element ${element.id}.`);
          }}
          onBlur={() => console.log(`You've blured element ${element.id}.`)}
        >
          {element.id}
        </Card>
      ))}
    </HorizontalGrid>
  );
}
