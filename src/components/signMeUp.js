import React, { useState } from "react"
import {
  Form,
  FormGroup, Label, Input, Button
} from "reactstrap";

const SignMeUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { confirmPassword, setConfirmPassword } = useState("");

  //handleSubmit means based on the upcoming event, prevent default (which is loading a new page)
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Email Address</Label>
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail
            (e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>username
      </Label>
        <Input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Password
        </Label>
        <Input
          type="password"
          placeholder="password, min 6 character, wanker."
          value={password}
          onChange={e => setPassword
            (e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>
          Confirm Password
        </Label>
        <Input
          type="text"
          placeholder="confirm password ya cuck"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)} />
      </FormGroup>
      <Button
        className="mx-auto d-block"
        outline color="primary"
      >
        Sign Up
      </Button>
    </Form>
  );
};

export default SignMeUp