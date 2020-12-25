import { useKeysContext } from "hooks";
import { Keys } from "contexts/Keys/types";

export function useKeys(): Keys {
  const { keys } = useKeysContext();
  return keys;
}
