import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export const useCurrentFocusedId = () => {
  const { currentFocusedId } = useMultiDirectionContext();
  return currentFocusedId;
};
