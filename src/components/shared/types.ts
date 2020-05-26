export interface IsFocusedProps {
  isFocused?: boolean;
}

export interface Props
  extends IsFocusedProps,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
