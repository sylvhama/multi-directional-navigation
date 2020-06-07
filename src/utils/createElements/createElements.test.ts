import { createElements } from "./";

describe("createElements", () => {
  it("creates an array of objects where first object has toFocus set to true without prefixID", () => {
    const elements = createElements(3);
    expect(elements).toMatchObject([
      { id: "1", toFocus: true },
      { id: "2", toFocus: false },
      { id: "3", toFocus: false },
    ]);
  });

  it("creates an array of objects where first object has toFocus set to true with prefixId", () => {
    const elements = createElements(3, 'prefixId');
    expect(elements).toMatchObject([
      { id: "prefixId1", toFocus: true },
      { id: "prefixId2", toFocus: false },
      { id: "prefixId3", toFocus: false },
    ]);
  });
});
