import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";

const Login = () => {
  const loginInWithGoogle = () => {
    //gogle
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Goole login</button>
    </div>
  );
};

export default Login;
