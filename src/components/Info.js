import React from "react";
import classes from "../style/Info.module.css";

export default function Info({ children }) {
  return <div className={classes.info}>{children}</div>;
}
