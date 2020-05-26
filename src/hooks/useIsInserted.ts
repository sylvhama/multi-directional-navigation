import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export function useIsInserted() {
  const { elements } = useMultiDirectionContext();
  return (id: string) => Boolean(elements[id]);
}
