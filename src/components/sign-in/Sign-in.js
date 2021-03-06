import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase";

import "./Sign-in.scss";

import FormInput from "../form-input/Form-input";
import CustomButton from "../custom-button/Custom-button";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} noValidate>
          <FormInput
            type="text"
            name="email"
            required
            value={this.state.email}
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            required
            value={this.state.password}
            label="Password"
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
