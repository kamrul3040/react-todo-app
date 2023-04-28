import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../style/LoginForm.module.css";
import Button from "./Button";
import Form from "./Form";
import Info from "./Info";
import Label from "./Label";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigalte = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login({ email, password });
      navigalte("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Invalid email & password");
    }
  }

  return (
    <Form className={classes.loginForm} onSubmit={handleSubmit}>
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
        name="pasword"
        id="pasword"
        placeholder="Enter Your Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
      {error && <p className="error">{error}</p>}
      <Info>
        Don't have an account? <Link to={"/signup"}>Signup</Link> instead.
      </Info>
    </Form>
  );
}
