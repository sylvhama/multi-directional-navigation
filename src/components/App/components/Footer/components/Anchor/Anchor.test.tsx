import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";

import { Anchor } from "./Anchor";

describe.each([true, false])("<Anchor />", (isFocused) => {
  it(`renders style when isFocused is ${isFocused}`, () => {
    const { container } = render(<Anchor isFocused={isFocused} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
