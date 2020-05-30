import { useMultiDirectionContext } from "../";

export function useIsInserted() {
  const { elements } = useMultiDirectionContext();
  return (id: string) => Boolean(elements[id]);
}
