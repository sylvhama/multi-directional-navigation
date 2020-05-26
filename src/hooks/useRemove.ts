import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export function useRemove() {
  const { remove } = useMultiDirectionContext();
  return (id: string) => remove(id);
}
