import React from "react";
import "../style/Label.module.css";

export default function Label({ children, ...rest }) {
  return <label {...rest}>{children} </label>;
}
