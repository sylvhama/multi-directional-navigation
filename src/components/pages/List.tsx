import React from "react";
import { Wrapper } from "../shared/Wrapper";
import { Element } from "../shared/Element";

import {
  useDirectionListener,
  useInsertFocusRemove,
  useIsFocused
} from "../../hooks";

const elements = new Array(8).fill(null).map((_, index) => {
  const id = (index + 1).toString();
  return { id, toFocus: index === 0 };
});

export function List() {
  useDirectionListener({});
  const isFocused = useIsFocused();
  const insertFocus = useInsertFocusRemove();

  return (
    <Wrapper rows={Math.ceil(elements.length / 3)}>
      {elements.map(element => (
        <Element
          key={element.id}
          isFocused={isFocused(element.id)}
          ref={div => insertFocus(element.id, element.toFocus, div)}
          onFocus={() => console.log(`You've focused element ${element.id}.`)}
          onBlur={() => console.log(`You've blured element ${element.id}.`)}
        >
          {element.id}
        </Element>
      ))}
    </Wrapper>
  );
}
