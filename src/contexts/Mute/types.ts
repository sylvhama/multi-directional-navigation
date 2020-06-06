export type Props = {
  children: React.ReactNode;
  overrideValue?: Partial<MuteInterface>;
};

export interface MuteInterface {
  isMuted: boolean;
  setIsMuted: (nextIsMuted: boolean) => void;
}