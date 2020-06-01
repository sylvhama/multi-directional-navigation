import { useCurrentFocusedId } from "../useCurrentFocusedId";
import { usePrevious } from "../../general";

export function useTabindex() {
  const currentFocusedId = useCurrentFocusedId();
  const previousFocusedId = usePrevious(currentFocusedId);

  return (id: string) =>
    id === currentFocusedId ? 0 : previousFocusedId === id ? -1 : undefined;
}
