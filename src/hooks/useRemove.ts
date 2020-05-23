import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export const useRemove = () => {
  const { remove } = useMultiDirectionContext();
  return (id: string) => remove(id);
};
