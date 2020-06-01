import { useMultiDirectionContext } from "hooks";

export function useIsInserted() {
  const { elements } = useMultiDirectionContext();
  return (id: string) => Boolean(elements[id]);
}
