import React from "react";
import styled, { keyframes } from "styled-components";

import {
  useInsertFocusRemove,
  useCurrentFocusedId,
  useTabindex,
  useFocus,
  useSound
} from "../../hooks";

import { IsFocusedProps } from "../shared/types";

import errorSound from "../../sounds/error.mp3";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacty: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${fadeIn} 250ms ease-in-out 1;
`;

const ModalContent = styled.article`
  padding: 2rem;
  width: 100%;
  height: 100%;
  max-width: 90vw;
  max-height: 33.33vh;
  background-color: #333;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-items: center;
  animation: ${scaleIn} 250ms ease-in-out 1;

  @media (max-width: 800px) {
    max-height: 90vh;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;

const Button = styled.button<IsFocusedProps>`
  border: 3px solid white;
  padding: 2rem 4rem;
  font-size: 2rem;
  background: transparent;
  color: white;
  text-align: center;
  transition: background-color ease 250ms;
  line-height: 1;

  ${({ isFocused }) =>
    isFocused &&
    `
     background-color: white;
     color: #212b36;
    `}
`;

enum IDs {
  Open = "Open",
  Nothing = "Nothing",
  Close = "Close"
}

export function Modal() {
  const [open, setOpen] = React.useState(false);
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const getTabIndex = useTabindex();
  const focus = useFocus();

  return (
    <>
      {open && (
        <Dialog
          onClose={() => {
            setOpen(false);
            focus(IDs.Open);
          }}
        />
      )}
      <Section>
        <Button
          isFocused={currentFocusedId === IDs.Open}
          tabIndex={getTabIndex(IDs.Open)}
          ref={(button: HTMLElement | null) =>
            insertFocus(IDs.Open, true, button)
          }
          onClick={() => setOpen(true)}
        >
          Open modal
        </Button>
      </Section>
    </>
  );
}

type DialogProps = {
  onClose: () => void;
};

function Dialog({ onClose }: DialogProps) {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const getTabIndex = useTabindex();

  const [playErrorSound] = useSound(errorSound);

  return (
    <ModalWrapper>
      <ModalContent>
        <Button
          isFocused={currentFocusedId === IDs.Nothing}
          tabIndex={getTabIndex(IDs.Nothing)}
          ref={(button: HTMLElement | null) =>
            insertFocus(IDs.Nothing, true, button, undefined, 1)
          }
          onClick={() => playErrorSound()}
        >
          ⚠️
        </Button>
        <Button
          isFocused={currentFocusedId === IDs.Close}
          tabIndex={getTabIndex(IDs.Close)}
          ref={(button: HTMLElement | null) =>
            insertFocus(IDs.Close, false, button, undefined, 1)
          }
          onClick={onClose}
        >
          Close modal
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
}
