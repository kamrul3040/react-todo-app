import React from "react";
import "../style/Button.module.css";

export default function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}
