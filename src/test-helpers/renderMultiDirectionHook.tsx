import React from "react";
import { renderHook, RenderHookOptions } from "@testing-library/react-hooks";

import { MultiDirectionProvider } from "../contexts/MultiDirection";
import { MultiDirectionInterface } from "../contexts/MultiDirection/types";

export function renderMultiDirectionHook<P, R>(
  hook: (props: P) => R,
  overrideValue?: Partial<MultiDirectionInterface>,
  renderHookOptions?: RenderHookOptions<P>
) {
  return renderHook<P, R>(
    hook,
    {
      wrapper: ({ children }) => (
        <MultiDirectionProvider overrideValue={overrideValue}>
          {children}
        </MultiDirectionProvider>
      ),
      ...renderHookOptions
    },
    
  );
}
