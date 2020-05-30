import { Element } from "../../../contexts/MultiDirection/types";
import { useMultiDirectionContext } from "../";

export function useUpsert() {
  const { upsert } = useMultiDirectionContext();
  return ({ id, depth = 0, left, right, top, bottom }: Element) =>
    upsert({ id, depth, left, right, top, bottom });
}
