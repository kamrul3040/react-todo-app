import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../style/SgnupForm.module.css";
import Button from "./Button";
import Form from "./Form";
import Info from "./Info";
import Label from "./Label";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== correctPassword) {
      return setError("Password don't match.");
    }
    try {
      setError("");
      setLoading(true);
      await signup({ email, password, userName });
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account. Please try again");
    }
  }

  return (
    <Form className={classes.signupForm} onSubmit={handleSubmit}>
      <Label>Name:</Label>
      <TextInput
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Name"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Label>Email:</Label>
      <TextInput
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label>Password:</Label>
      <TextInput
        type="password"
        name="emapasswordil"
        id="password"
        placeholder="Enter Your Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Label>Correct Password:</Label>
      <TextInput
        type="password"
        name="correct-password"
        id="correct-password"
        placeholder="Enter Your Correct Password"
        required
        value={correctPassword}
        onChange={(e) => setCorrectPassword(e.target.value)}
      />
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
      {error && <p className="error">{error}</p>}
      <Info>
        Don you have an account? <Link to={"/login"}>Login</Link> instead.
      </Info>
    </Form>
  );
}
