import React from "react";
import { Redirect } from "react-router-dom";

function Protected(props) {
  const isAuth = localStorage.getItem('isAuth')
  // const isAuth = false;

  return <div>{isAuth ? <props.cmp /> : <Redirect to="/login" />}</div>;
}

export default Protected;
