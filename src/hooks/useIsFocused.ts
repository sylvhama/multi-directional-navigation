import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export const useIsFocused = () => {
  const { currentFocusedId } = useMultiDirectionContext();
  return (id: string) => currentFocusedId === id;
};
