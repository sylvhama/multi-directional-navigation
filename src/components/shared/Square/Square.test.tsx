import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";

import { Square } from "./Square";

describe.each([true, false])("<Square />", (isFocused) => {
  it(`renders style when isFocused is ${isFocused}`, () => {
    const { container } = render(<Square isFocused={isFocused} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
