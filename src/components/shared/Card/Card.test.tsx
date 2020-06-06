import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";

import { Card } from "./Card";

describe.each([true, false])("<Card />", (isFocused) => {
  it(`renders style when isFocused is ${isFocused}`, () => {
    const { container } = render(<Card isFocused={isFocused} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
