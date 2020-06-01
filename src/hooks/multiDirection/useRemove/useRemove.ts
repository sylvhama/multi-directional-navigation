import { useMultiDirectionContext } from "hooks";

export function useRemove() {
  const { remove } = useMultiDirectionContext();
  return (id: string) => remove(id);
}
