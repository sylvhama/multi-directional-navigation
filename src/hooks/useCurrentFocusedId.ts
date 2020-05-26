import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export function useCurrentFocusedId() {
  const { currentFocusedId } = useMultiDirectionContext();
  return currentFocusedId;
}
