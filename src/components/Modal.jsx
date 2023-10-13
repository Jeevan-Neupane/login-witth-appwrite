import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Main = styled.div``;

const OuterDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: grey;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;

const InnerDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 100px;
  background-color: white;

  transform: translate(-50%, -50%);
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ButtonDiv = styled.div`
  text-align: right;
  flex: 1;
`;
const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 12px;
  background-color: ${(props) => (props.primary ? "green" : "red")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const TextDiv = styled.div`
  flex: 9;
`;
function Modal({ setShowModal, showModal, children, handleLogout }) {
  const onShowModalButtonClicked = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return ReactDOM.createPortal(
    <Main>
      <OuterDiv onClick={onShowModalButtonClicked}></OuterDiv>
      <InnerDiv>
        <TextDiv>{children}</TextDiv>
        <ButtonDiv>
          <Button
            primary
            onClick={handleLogout}
          >
            Yes
          </Button>
          <Button onClick={onShowModalButtonClicked}>No</Button>
        </ButtonDiv>
      </InnerDiv>
    </Main>,
    document.querySelector(".modal_container")
  );
}

export default Modal;
