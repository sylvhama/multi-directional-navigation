export type Props = {
  children: React.ReactNode;
  value?: MuteInterface;
};

export interface MuteInterface {
  isMuted: boolean;
  setIsMuted: (nextIsMuted: boolean) => void;
}