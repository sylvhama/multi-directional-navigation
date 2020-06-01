import { useMultiDirectionContext } from "hooks";

export function useFocus() {
  const { focus } = useMultiDirectionContext();
  return (id: string) => {
    focus(id);
  };
}
