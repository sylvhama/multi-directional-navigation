import "@testing-library/jest-dom";
import React from "react";

import { render } from "../../../../test-helpers";
import { Header } from "./Header";

jest.mock("../../../../hooks", () => {
  return {
    ...require.requireActual("../../../../hooks"),
    useIsMuted: jest.fn(),
  };
});

describe("<Header />", () => {
  beforeEach(() => {
    mockUseIsMuted(false);
  });

  it("renders texts that are always visible", () => {
    const { getByText,getByTestId } = render(<Header />);

    expect(getByText("Multi-directional Navigation")).toBeInTheDocument();

    expect(getByTestId("navigate")).toHaveTextContent('← ↑ → ↓ navigate');

    expect(getByTestId("interact")).toHaveTextContent('↵ interact');
  });

  it.each([
    [false, "M mute"],
    [true, "M unmute"],
  ])("renders mute/unmute text", (isMuted, text) => {
    mockUseIsMuted(isMuted);

    const { getByTestId } = render(<Header />);

    expect(getByTestId("mute")).toHaveTextContent(text);
  });

  it("renders message when route is /modal", () => {
    const { queryByTestId } = render(<Header />, { route: "/" });

    expect(queryByTestId("tips")).toHaveTextContent('💡 Check the console logs!');
  });

  it("renders message when route is /horizontal-list", () => {
    const { getByTestId } = render(<Header />, { route: "/horizontal-list" });

    expect(getByTestId("skip")).toHaveTextContent("home / end fast skip");
  });

  it("does not rendes messages when route is /", () => {
    const { queryByText, queryByTestId } = render(<Header />, {
      route: "/modal",
    });

    expect(queryByTestId("tips")).not.toBeInTheDocument();

    expect(queryByTestId("skip")).not.toBeInTheDocument();
  });
});

function mockUseIsMuted(returnValue: boolean) {
  const useIsMuted: jest.Mock = jest.requireMock("../../../../hooks")
    .useIsMuted;

  useIsMuted.mockReturnValue([returnValue, () => {}]);
}
