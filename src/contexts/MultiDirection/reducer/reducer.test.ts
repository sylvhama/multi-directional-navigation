import { reducer } from "./reducer";

describe("MultiDirection reducer", () => {
  it("initializes state", () => {
    expect(reducer()).toMatchObject([]);
  });
});
