import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export const useIsInserted = () => {
  const { elements } = useMultiDirectionContext();
  return (id: string) => Boolean(elements[id]);
};
