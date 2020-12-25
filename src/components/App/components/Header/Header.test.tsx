import "@testing-library/jest-dom";
import React from "react";

import { render } from "../../../../test-helpers";
import { Header } from "./Header";
import { defaultState } from "../../../../contexts/Keys";
import { Keys } from "../../../../contexts/Keys/types";

jest.mock("../../../../hooks", () => {
  return {
    ...jest.requireActual("../../../../hooks"),
    useKeys: jest.fn(),
    useIsMuted: jest.fn(),
  };
});

describe("<Header />", () => {
  beforeEach(() => {
    mockUseKeys();
    mockUseIsMuted(false);
  });

  it("renders texts that are always visible", () => {
    const { getByText, getByTestId } = render(<Header />);

    expect(getByText("Multi-directional Navigation")).toBeInTheDocument();

    expect(getByTestId("navigate")).toHaveTextContent("← ↑ → ↓ navigate");

    expect(getByTestId("interact")).toHaveTextContent("↵ interact");
  });

  it.each([
    [false, "m mute"],
    [true, "m unmute"],
  ])("renders mute/unmute text", (isMuted, text) => {
    mockUseIsMuted(isMuted);

    const { getByTestId } = render(<Header />);

    expect(getByTestId("mute")).toHaveTextContent(text);
  });

  it("renders message when route is /", () => {
    const { queryByTestId } = render(<Header />, { route: "/" });

    expect(queryByTestId("tips")).toHaveTextContent(
      "💡 Check the console logs!"
    );
  });

  it("renders message when route is /horizontal-list", () => {
    const { getByTestId } = render(<Header />, { route: "/horizontal-list" });

    expect(getByTestId("skip")).toHaveTextContent("home / end fast skip");
  });

  it("does not rendes messages when route is /modal", () => {
    const { queryByTestId } = render(<Header />, {
      route: "/modal",
    });

    expect(queryByTestId("tips")).not.toBeInTheDocument();

    expect(queryByTestId("skip")).not.toBeInTheDocument();
  });

  it("renders custom keys", () => {
    const customKeys = {
      up: "1",
      right: "2",
      down: "3",
      left: "4",
      interact: "5",
      mute: "6",
      leftSkip: "7",
      rightSkip: "8",
    };
    mockUseKeys(customKeys);

    const { getByTestId } = render(<Header />, {
      route: "/horizontal-list",
    });

    expect(getByTestId("navigate")).toHaveTextContent("4 1 2 3 navigate");

    expect(getByTestId("interact")).toHaveTextContent("5 interact");

    expect(getByTestId("mute")).toHaveTextContent("6 mute");

    expect(getByTestId("skip")).toHaveTextContent("7 / 8 fast skip");
  });
});

function mockUseKeys(customKeys?: Partial<Keys>) {
  const useKeys: jest.Mock = jest.requireMock("../../../../hooks").useKeys;

  useKeys.mockReturnValue({ ...defaultState.keys, ...customKeys });
}

function mockUseIsMuted(returnValue: boolean) {
  const useIsMuted: jest.Mock = jest.requireMock("../../../../hooks")
    .useIsMuted;

  useIsMuted.mockReturnValue([returnValue, () => {}]);
}
