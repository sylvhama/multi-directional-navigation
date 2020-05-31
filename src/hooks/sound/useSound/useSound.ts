import useSoundLib from "use-sound";
import { useIsMuted } from "../";

export function useSound(sound: string) {
  const [isMuted] = useIsMuted();
  return useSoundLib(sound, { soundEnabled: !isMuted });
}
