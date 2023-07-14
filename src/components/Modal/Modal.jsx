import React from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { modalClose } from "../../redux/modules/modal";

function Modal({ children }) {
  const dispatch = useDispatch();

  const onClickClose = (e) => {
    if (e.target === e.currentTarget) dispatch(modalClose());
  };
  return createPortal(
    <ModalContainer onClick={(e) => onClickClose(e)}>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>,
    document.getElementById("modal-root")
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 500px;
  height: 300px;
  border-radius: 12px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Modal;
