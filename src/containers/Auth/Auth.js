import React, { Component } from "react";
import classes from "./Auth.scss";

import is from "is_js";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import axios from "axios";

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMsg: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        errorMsg: "Введите корректный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  handleLogin = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };

    try {
      const response = axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEPOGGCl0EVoKH2YabDOp--e6wgkQYX0s",
        authData
      );

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  handleRegister = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };

    try {
      const response = axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEPOGGCl0EVoKH2YabDOp--e6wgkQYX0s",
        authData
      );

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  submitHandler = e => {
    e.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) return true;

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  handleChange = (e, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = e.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMsg={control.errorMsg}
          shouldValidate={!!control.validation}
          onChange={e => this.handleChange(e, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form className={classes.AuthForm} onSubmit={this.submitHandler}>
            {this.renderInputs()}

            <Button
              disabled={!this.state.isFormValid}
              type="success"
              onClick={this.handleLogin}
            >
              Войти
            </Button>
            <Button
              disabled={!this.state.isFormValid}
              type="primary"
              onClick={this.handleRegister}
            >
              Зарегестрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
