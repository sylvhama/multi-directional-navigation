export interface Position {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface Element extends Position {
  id: string;
  depth: number;
}

export interface State {
  elements: { [key: string]: Element };
  currentFocusedId: string | null;
  currentDepth: number;
}

export enum Action {
  UPSERT = "UPSERT",
  REMOVE = "REMOVE",
  FOCUS = "FOCUS"
}

export type UpsertAction = {
  type: Action.UPSERT;
  element: Element;
};

export type RemoveAction = {
  type: Action.REMOVE;
  id: string;
};

export type FocusAction = {
  type: Action.FOCUS;
  id: string;
};

export type Props = {
  children: React.ReactNode;
};