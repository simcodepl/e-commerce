import React from "react";

import "./Sign-in-and-sign-up.scss";

import SignIn from "../../components/sign-in/Sign-in";
import SignUp from "../../components/sign-up/Sign-up";

const SignInAndSignUp = () => {
  return (
    <>
      <h1>Sign in and sign out page</h1>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default SignInAndSignUp;
