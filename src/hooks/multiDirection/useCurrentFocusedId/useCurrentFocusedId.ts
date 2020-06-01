import { useMultiDirectionContext } from "hooks";

export function useCurrentFocusedId() {
  const { currentFocusedId } = useMultiDirectionContext();
  return currentFocusedId;
}
