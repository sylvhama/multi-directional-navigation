import React from "react";
import { Wrapper } from "../shared/Wrapper";
import { Element } from "../shared/Element";

import {
  useDirectionListener,
  useInsertFocusRemove,
  useIsFocused
} from "../../hooks";

const elements = new Array(18).fill(null).map((_, index) => {
  const id = (index + 1).toString();
  return { id, toFocus: index === 0 };
});

const scrollIntoView = (target: HTMLElement, repeat: boolean) => {
  target.scrollIntoView({
    behavior: repeat ? "auto" : "smooth",
    block: "center",
    inline: "center"
  });
};

export function List() {
  const repeat = useDirectionListener({});
  const isFocused = useIsFocused();
  const insertFocus = useInsertFocusRemove();

  return (
    <Wrapper rows={Math.ceil(elements.length / 3)}>
      {elements.map(element => (
        <Element
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
        </Element>
      ))}
    </Wrapper>
  );
}
