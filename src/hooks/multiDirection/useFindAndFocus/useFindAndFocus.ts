import { findClosestNeighborId } from "utils/findClosestNeighborId";
import { useMultiDirectionContext, useFocus } from "hooks";
import { Direction } from "contexts/MultiDirection/types";

export function useFindAndFocus() {
  const { elements, currentFocusedId } = useMultiDirectionContext();
  const focus = useFocus();

  return (direction: Direction) => {
    const nextFocusId = findClosestNeighborId(
      Object.values(elements),
      direction,
      elements[currentFocusedId || ""]
    );

    if (nextFocusId) {
      focus(nextFocusId);
    }
  };
}
