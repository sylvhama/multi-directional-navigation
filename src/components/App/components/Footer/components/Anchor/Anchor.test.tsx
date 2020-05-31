import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { Anchor } from "./Anchor";

describe("<Anchor />", () => {
  test("It renders Anchor when isFocused is falsy", () => {
    const { container } = render(<Anchor isFocused={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
