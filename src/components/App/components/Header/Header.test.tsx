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

  it("renders default text", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Multi-directional Navigation")).toBeInTheDocument();

    expect(
      getByText("Focus an element based on a direction input: ⇦ ⇧ ⇨ ⇩")
    ).toBeInTheDocument();
  });

  it.each([
    [false, "Press <em>M</em> to mute the sound."],
    [true, "Press <em>M</em> to unmute the sound."],
  ])("renders mute/unmute text", (isMuted, html) => {
    mockUseIsMuted(isMuted);

    const { getByTestId } = render(<Header />);

    expect(getByTestId("mute")).toContainHTML(html);
  });

  it("renders message when route is /modal", () => {
    const { getByText } = render(<Header />, { route: "/" });

    expect(
      getByText("Check the console logs to see focus and blur events.")
    ).toBeInTheDocument();
  });

  it("renders message when route is /horizontal-list", () => {
    const { getByTestId } = render(<Header />, { route: "/horizontal-list" });

    expect(getByTestId("skip")).toContainHTML(
      "Press <em>home</em> or <em>end</em> for a fast skip."
    );
  });

  it("does not rendes messages when route is /", () => {
    const { queryByText, queryByTestId } = render(<Header />, {
      route: "/modal",
    });

    expect(
      queryByText("Check the console logs to see focus and blur events.")
    ).not.toBeInTheDocument();

    expect(queryByTestId("skip")).not.toBeInTheDocument();
  });
});

function mockUseIsMuted(returnValue: boolean) {
  const useIsMuted: jest.Mock = jest.requireMock("../../../../hooks")
    .useIsMuted;

  useIsMuted.mockReturnValue([returnValue, () => {}]);
}
