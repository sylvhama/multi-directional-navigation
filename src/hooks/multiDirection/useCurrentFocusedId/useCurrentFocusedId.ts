import { useMultiDirectionContext } from "../";

export function useCurrentFocusedId() {
  const { currentFocusedId } = useMultiDirectionContext();
  return currentFocusedId;
}
