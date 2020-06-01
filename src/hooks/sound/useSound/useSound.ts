import useSoundLib from "use-sound";
import { useIsMuted } from "hooks";

export function useSound(sound: string) {
  const [isMuted] = useIsMuted();
  return useSoundLib(sound, { soundEnabled: !isMuted });
}
