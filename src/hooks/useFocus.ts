import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export function useFocus() {
  const { focus } = useMultiDirectionContext();
  return (id: string) => {
    focus(id);
  };
}
