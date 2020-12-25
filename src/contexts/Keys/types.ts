export interface DirectionKeys {
  up: string;
  right: string;
  down: string;
  left: string;
}

export interface Keys extends DirectionKeys {
  interact: string;
  mute: string;
  leftSkip: string;
  rightSkip: string;
}

export type Props = {
  children: React.ReactNode;
};
