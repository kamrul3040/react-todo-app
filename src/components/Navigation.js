import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.module.css";
import { useAuth } from "./../contexts/AuthContext";

export default function Navigation() {
  const { currentUser, logout } = useAuth();
  // console.log(currentUser);
  return (
    <ul>
      {currentUser ? (
        <>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>{currentUser.displayName}</li>
          <li onClick={logout}>
            <FontAwesomeIcon icon={faRightToBracket} />
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </>
      )}
    </ul>
  );
}
