import { useMultiDirectionContext } from "../";

export function useRemove() {
  const { remove } = useMultiDirectionContext();
  return (id: string) => remove(id);
}
