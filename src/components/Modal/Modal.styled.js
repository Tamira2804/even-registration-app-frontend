import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colors-bg-overlay);
  z-index: 999;
`

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--radius-lg);
  background-color: var(--white);

  width: 740px;
  padding: 40px;

  .modal {
    opacity: 0;
    transition: opacity var(--transition);
  }

  .modal.open {
    opacity: 1;
    visibility: visible;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 24px;
  height: 24px;
  border: 0;
  background-color: inherit;
  cursor: pointer;
  outline: none;
  color: var(--colors-text);
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--accent);
  }
`
