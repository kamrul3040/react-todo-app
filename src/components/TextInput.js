import React from "react";
import "../style/TextInput.module.css";

export default function TextInput({ ...rest }) {
  return <input {...rest} />;
}
