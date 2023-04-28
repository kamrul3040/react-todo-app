import React from "react";
import "../style/Main.module.css";
import Container from "./Container";
import Nav from "./Nav";

export default function Main() {
  return (
    <main>
      <Nav />
      <Container />
    </main>
  );
}
