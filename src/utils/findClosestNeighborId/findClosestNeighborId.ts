import { Element } from "../../contexts/MultiDirection/types";
import { Direction } from "../../hooks";

export function findClosestNeighborId(
  elements: Element[],
  direction: Direction,
  origin?: Element
) {
  if (!origin) return null;

  let neighbor: Element | undefined;
  elements.forEach((element) => {
    if (origin.id !== element.id && origin.depth === element.depth) {
      switch (direction) {
        case Direction.Left:
          if (
            origin.left >= element.right &&
            origin.top <= element.bottom &&
            origin.bottom >= element.top
          ) {
            if (!neighbor) {
              neighbor = element;
              break;
            }
            if (neighbor.right < element.right) {
              neighbor = element;
              break;
            }
            if (
              neighbor.right === element.right &&
              neighbor.top > element.top
            ) {
              neighbor = element;
              break;
            }
          }
          break;
        case Direction.Top:
          if (
            origin.top >= element.bottom &&
            origin.left <= element.right &&
            origin.right >= element.left
          ) {
            if (!neighbor) {
              neighbor = element;
              break;
            }
            if (neighbor.bottom < element.bottom) {
              neighbor = element;
              break;
            }
            if (
              neighbor.bottom === element.bottom &&
              neighbor.left > element.left
            ) {
              neighbor = element;
              break;
            }
          }
          break;
        case Direction.Right:
          if (
            origin.right <= element.left &&
            origin.top <= element.bottom &&
            origin.bottom >= element.top
          ) {
            if (!neighbor) {
              neighbor = element;
              break;
            }
            if (neighbor.left > element.left) {
              neighbor = element;
              break;
            }
            if (neighbor.left === element.left && neighbor.top > element.top) {
              neighbor = element;
              break;
            }
          }
          break;
        case Direction.Bottom:
          if (
            origin.bottom <= element.top &&
            origin.left <= element.right &&
            origin.right >= element.left
          ) {
            if (!neighbor) {
              neighbor = element;
              break;
            }
            if (neighbor.top > element.top) {
              neighbor = element;
              break;
            }
            if (neighbor.top === element.top && neighbor.left > element.left) {
              neighbor = element;
              break;
            }
          }
          break;
      }
    }
  });
  return neighbor ? neighbor.id : null;
}
