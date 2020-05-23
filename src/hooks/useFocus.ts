import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";

export const useFocus = () => {
  const { focus } = useMultiDirectionContext();
  return (id: string) => {
    focus(id);
  };
};
