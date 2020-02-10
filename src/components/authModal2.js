import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink,
} from 'reactstrap';
import UploadPage from "./UploadPage"

const AuthModal2 = ({ buttonLabel }) => {
  // this is to set the modal state - default is false, dunno wtf it does
  const [modal, setModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const toggle = () => {
    setModal(!modal);
    setShowLogin(true);
  }

  const toggleLogin = () => setShowLogin(!showLogin)

  return (

    // div is the container, and insive is the navlink style, that has toggle function when click
    <div>
      <NavLink style={{
        cursor: "pointer"
      }}
        onClick={toggle}
      >
        {buttonLabel}
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {showLogin ? "Login" : "Sign Up"}
        </ModalHeader>
        <ModalBody>
          <UploadPage />
        </ModalBody>
        <ModalFooter>
          <Button
            color="link"
            onClick={toggleLogin}>
            {showLogin
              ? "Not Registered? Mai la Join geng Balaci"
              : "Dah Join? Mai login sini"}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AuthModal2;