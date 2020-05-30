import { useMultiDirectionContext } from "../";

export function useFocus() {
  const { focus } = useMultiDirectionContext();
  return (id: string) => {
    focus(id);
  };
}
