import { useMuteContext } from "../useMuteContext";

export function useIsMuted(): [boolean, (nextIsMuted: boolean) => void] {
  const { isMuted, setIsMuted } = useMuteContext();
  return [isMuted, setIsMuted];
}
