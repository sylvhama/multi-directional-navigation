import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";

import { Base } from "./Base";

describe.each([true, false])("<Base />", (isFocused) => {
  it(`renders style when isFocused is ${isFocused}`, () => {
    const { container } = render(<Base isFocused={isFocused} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
