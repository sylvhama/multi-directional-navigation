import { useMultiDirectionContext } from "../";

export function useUpsertHtmlElement() {
  const { upsert } = useMultiDirectionContext();

  return (id: string, htmlElement: HTMLElement, depth = 0) => {
    const { left, right, top, bottom } = htmlElement.getBoundingClientRect();
    upsert({ id, depth, left, right, top, bottom });
  };
}
