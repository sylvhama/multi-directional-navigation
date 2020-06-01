import React from "react";
import { useCurrentFocusedId } from "hooks";

export function useRememberFocusedId(idsToIgnore: string[]) {
  const currentFocusedId = useCurrentFocusedId();

  const [rememberedId, remember] = React.useState("");

  React.useEffect(() => {
    if (
      currentFocusedId &&
      currentFocusedId !== rememberedId &&
      !idsToIgnore.includes(currentFocusedId)
    ) {
      remember(currentFocusedId);
    }
  }, [currentFocusedId, idsToIgnore, rememberedId]);

  return rememberedId;
}
