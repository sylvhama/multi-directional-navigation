import { createElements } from "./";

describe("createElements", () => {
  it("creates an array of objects where frst object has toFocus set to true", () => {
    const elements = createElements(3);
    expect(elements).toMatchObject([
      { id: "1", toFocus: true },
      { id: "2", toFocus: false },
      { id: "3", toFocus: false }
    ]);
  });
});
