import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";

import { MultiDirectionProvider } from "../contexts/MultiDirection";
import { MultiDirectionInterface } from "../contexts/MultiDirection/types";
import { MuteProvider } from "../contexts/Mute";
import { MuteInterface } from "../contexts/Mute/types";

interface WrapperProps {
  children: React.ReactElement<any>;
}

interface ProviderOptions {
  route?: string;
  history?: MemoryHistory<{}>;
  multiDirectionValue?: MultiDirectionInterface;
  muteValue?: MuteInterface;
}

export function render(
  ui: React.ReactElement<any>,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    multiDirectionValue,
    muteValue,
  }: ProviderOptions = {},
  { ...renderOptions }: RenderOptions = {}
) {
  const Wrapper: React.FunctionComponent<any> = ({
    children,
  }: WrapperProps) => {
    return (
      <Router history={history}>
        <MultiDirectionProvider value={multiDirectionValue}>
          <MuteProvider value={muteValue}>{children}</MuteProvider>
        </MultiDirectionProvider>
      </Router>
    );
  };

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
}
