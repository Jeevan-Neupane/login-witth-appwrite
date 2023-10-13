import styled from "styled-components";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../store/slice/userSlice";
import { useState } from "react";
import Modal from "./Modal";

const LogoutButton = styled.button`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`;

const LogoutBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      authService.logout();
      dispatch(logout());
    } catch (error) {
      console.log("Logout Btn Errorr", error);
    }
  };

  const onShowModalButtonClicked = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <LogoutButton onClick={onShowModalButtonClicked}>Logout</LogoutButton>

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          handleLogout={handleLogout}
        >
          Do you want to logout?
        </Modal>
      )}
    </>
  );
};

export default LogoutBtn;
