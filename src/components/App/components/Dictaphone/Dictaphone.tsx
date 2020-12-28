import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useFocus, useFindAndFocus, useMultiDirectionContext } from "hooks";
import { Direction } from "contexts/MultiDirection/types";

interface Props {
  toggleMute: () => void;
}

export function Dictaphone({ toggleMute }: Props) {
  const focus = useFocus();
  const findAndFocus = useFindAndFocus();
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { elements } = useMultiDirectionContext();

  const browserSupportsSpeechRecognition = SpeechRecognition.browserSupportsSpeechRecognition();

  React.useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true });
    }
    return () => {
      if (browserSupportsSpeechRecognition) {
        SpeechRecognition.stopListening();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const transcriptLowerCase = transcript.toLocaleLowerCase();

    if (transcriptLowerCase.includes("click")) {
      const activeElement = document.activeElement as HTMLElement;
      activeElement?.click();
      resetTranscript();
    }
    if (transcriptLowerCase.includes("mute")) {
      toggleMute();
      resetTranscript();
    }
    Object.values(Direction).forEach((direction) => {
      if (transcriptLowerCase.includes(direction.toLocaleLowerCase())) {
        findAndFocus(direction);
        resetTranscript();
      }
    });
    Object.keys(elements).forEach((id) => {
      if (transcriptLowerCase.includes(`focus ${id.toLocaleLowerCase()}`)) {
        focus(id);
        resetTranscript();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  return null;
}
