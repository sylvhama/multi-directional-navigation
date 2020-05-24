export interface IsFocusedProps {
  readonly isFocused: boolean;
}

export interface Props
  extends IsFocusedProps,
    React.HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode;
}
