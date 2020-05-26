import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";
import { Element } from "../contexts/types";

export function useUpsert() {
  const { upsert } = useMultiDirectionContext();
  return ({ id, depth = 0, left, right, top, bottom }: Element) =>
    upsert({ id, depth, left, right, top, bottom });
}
