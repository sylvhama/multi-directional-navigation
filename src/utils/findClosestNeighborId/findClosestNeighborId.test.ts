import { findClosestNeighborId } from "./";
import { Direction } from "../../hooks";

describe("findClosestNeighborId", () => {
  it("returns null when there is no origin", () => {
    expect(
      findClosestNeighborId([createElement({})], Direction.Left)
    ).toBeNull();
  });

  it("returns null when there is no elements", () => {
    expect(
      findClosestNeighborId([], Direction.Left, createElement({}))
    ).toBeNull();
  });

  it("returns null when there is only origin", () => {
    const origin = createElement({});
    expect(findClosestNeighborId([origin], Direction.Left, origin)).toBeNull();
  });

  it("returns null when two elements could be neighbors but are not on the same depth", () => {
    const origin = createElement({
      depth: 0,
      left: 0,
      right: 1,
      top: 0,
      bottom: 1,
    });
    const element = createElement({
      id: "element",
      depth: 1,
      left: 2,
      right: 3,
      top: 0,
      bottom: 1,
    });

    expect(
      findClosestNeighborId([element], Direction.Right, origin)
    ).toBeNull();
  });

  it.each([
    [Direction.Up, "upElement"],
    [Direction.Right, "rightElement"],
    [Direction.Left, "leftElement"],
    [Direction.Down, "downElement"],
  ])("returns neighbor id", (direction: Direction, idToFind: string) => {
    const origin = createElement({
      depth: 0,
      left: 2,
      right: 4,
      top: 2,
      bottom: 4,
    });
    const upElement = createElement({
      id: "upElement",
      depth: 0,
      left: 2,
      right: 4,
      top: 0,
      bottom: 2,
    });
    const rightElement = createElement({
      id: "rightElement",
      depth: 0,
      left: 4,
      right: 6,
      top: 2,
      bottom: 4,
    });
    const downElement = createElement({
      id: "downElement",
      depth: 0,
      left: 2,
      right: 4,
      top: 4,
      bottom: 6,
    });
    const leftElement = createElement({
      id: "leftElement",
      depth: 0,
      left: 0,
      right: 2,
      top: 2,
      bottom: 4,
    });

    expect(
      findClosestNeighborId(
        [origin, upElement, rightElement, downElement, leftElement],
        direction,
        origin
      )
    ).toBe(idToFind);
  });

  it.each([
    [Direction.Up, "upElement"],
    [Direction.Right, "rightElement"],
    [Direction.Left, "leftElement"],
    [Direction.Down, "downElement"],
  ])(
    "returns closest neighbor id",
    (direction: Direction, idToFind: string) => {
      const origin = createElement({
        depth: 0,
        left: 2,
        right: 4,
        top: 2,
        bottom: 4,
      });
      const upElement = createElement({
        id: "upElement",
        depth: 0,
        left: 2,
        right: 4,
        top: 0,
        bottom: 2,
      });
      const topElement2 = createElement({
        id: "topElement2",
        depth: 0,
        left: 2,
        right: 4,
        top: 0,
        bottom: 1,
      });
      const rightElement = createElement({
        id: "rightElement",
        depth: 0,
        left: 4,
        right: 6,
        top: 2,
        bottom: 4,
      });
      const rightElement2 = createElement({
        id: "rightElement2",
        depth: 0,
        left: 5,
        right: 6,
        top: 2,
        bottom: 4,
      });
      const downElement = createElement({
        id: "downElement",
        depth: 0,
        left: 2,
        right: 4,
        top: 4,
        bottom: 6,
      });
      const bottomElement2 = createElement({
        id: "bottomElement2",
        depth: 0,
        left: 2,
        right: 4,
        top: 5,
        bottom: 6,
      });
      const leftElement = createElement({
        id: "leftElement",
        depth: 0,
        left: 0,
        right: 2,
        top: 2,
        bottom: 4,
      });
      const leftElement2 = createElement({
        id: "leftElement2",
        depth: 0,
        left: 0,
        right: 1,
        top: 2,
        bottom: 4,
      });

      expect(
        findClosestNeighborId(
          [
            origin,
            topElement2,
            rightElement2,
            bottomElement2,
            leftElement2,
            upElement,
            rightElement,
            downElement,
            leftElement,
          ],
          direction,
          origin
        )
      ).toBe(idToFind);
    }
  );

  it.each([
    [Direction.Up, "upElement"],
    [Direction.Right, "rightElement"],
    [Direction.Left, "leftElement"],
    [Direction.Down, "downElement"],
  ])(
    "returns neighbor id when two elements have same distance from origin",
    (direction: Direction, idToFind: string) => {
      const origin = createElement({
        depth: 0,
        left: 2,
        right: 4,
        top: 2,
        bottom: 4,
      });
      const upElement = createElement({
        id: "upElement",
        depth: 0,
        left: 2,
        right: 4,
        top: 0,
        bottom: 2,
      });
      const topElement2 = createElement({
        id: "topElement2",
        depth: 0,
        left: 3,
        right: 4,
        top: 0,
        bottom: 2,
      });
      const rightElement = createElement({
        id: "rightElement",
        depth: 0,
        left: 4,
        right: 6,
        top: 2,
        bottom: 4,
      });
      const rightElement2 = createElement({
        id: "rightElement2",
        depth: 0,
        left: 5,
        right: 6,
        top: 2,
        bottom: 4,
      });
      const downElement = createElement({
        id: "downElement",
        depth: 0,
        left: 2,
        right: 4,
        top: 4,
        bottom: 6,
      });
      const bottomElement2 = createElement({
        id: "bottomElement2",
        depth: 0,
        left: 3,
        right: 4,
        top: 4,
        bottom: 6,
      });
      const leftElement = createElement({
        id: "leftElement",
        depth: 0,
        left: 0,
        right: 2,
        top: 2,
        bottom: 4,
      });
      const leftElement2 = createElement({
        id: "leftElement2",
        depth: 0,
        left: 0,
        right: 2,
        top: 3,
        bottom: 4,
      });

      expect(
        findClosestNeighborId(
          [
            origin,
            topElement2,
            rightElement2,
            bottomElement2,
            leftElement2,
            upElement,
            rightElement,
            downElement,
            leftElement,
          ],
          direction,
          origin
        )
      ).toBe(idToFind);
    }
  );
});

function createElement({
  id = "origin",
  depth = 0,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
} = {}) {
  return {
    id,
    depth,
    left,
    right,
    top,
    bottom,
  };
}
