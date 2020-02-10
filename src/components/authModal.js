import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink,
} from 'reactstrap';
import LogMeIn from "./LogMeIn";
import SignMeUp from './signMeUp';
import UploadPage from './UploadPage';

const AuthModal = ({ buttonLabel }) => {
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
          {showLogin
            ? <LogMeIn />
            :
            <SignMeUp />}
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

export default AuthModal;







  // <div>
  //   <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
  //   <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
  //     toggleModal={toggleModal} className={className}>
  //     <ModalHeader toggleModal={toggleModal}>Modal title</ModalHeader>
  //     <ModalBody>
  //       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //     </ModalBody>
  //     <ModalFooter>
  //       <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
  //       <Button color="secondary" onClick={toggle}>Cancel</Button>
  //     </ModalFooter>
  //   </Modal>
  // </div>

// export default LogMeIn;




// const Login = (props) => {
//   return (
//     <Form>
//       <FormGroup>
//         <Label for="exampleEmail">Email</Label>
//         <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="examplePassword">Password</Label>
//         <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelect">Select</Label>
//         <Input type="select" name="select" id="exampleSelect">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelectMulti">Select Multiple</Label>
//         <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleText">Text Area</Label>
//         <Input type="textarea" name="text" id="exampleText" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleFile">File</Label>
//         <Input type="file" name="file" id="exampleFile" />
//         <FormText color="muted">
//           This is some placeholder block-level help text for the above input.
//           It's a bit lighter and easily wraps to a new line.
//         </FormText>
//       </FormGroup>
//       <FormGroup tag="fieldset">
//         <legend>Radio Buttons</legend>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option one is this and that—be sure to include why it's great
//           </Label>
//         </FormGroup>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option two can be something else and selecting it will deselect option one
//           </Label>
//         </FormGroup>
//         <FormGroup check disabled>
//           <Label check>
//             <Input type="radio" name="radio1" disabled />{' '}
//             Option three is disabled
//           </Label>
//         </FormGroup>
//       </FormGroup>
//       <FormGroup check>
//         <Label check>
//           <Input type="checkbox" />{' '}
//           Check me out
//         </Label>
//       </FormGroup>
//       <Button>Submit</Button>
//     </Form>
//   );
// }