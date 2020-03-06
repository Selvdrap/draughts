import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import Box from "../Box";
import { loginUser, registerUser } from "../../actions";

import {
  Form,
  ButtonsWrapper,
  Input,
  InputFeedback,
  Label,
  Button
} from "./style";

const LoginForm = ({ user, loginUser, registerUser }) => {
  const handleFormSubmit = values => {
    if (values.isLogin) {
      loginUser({
        user: values
      });
    } else {
      registerUser({
        user: values
      });
    }
  };

  return (
    <>
      {user.token && <Redirect to="/home" />}
      <Box height="65vh" width="40vw" style={{ marginTop: "75px" }}>
        <Formik
          initialValues={{
            username: "",
            password: "",
            isLogin: false
          }}
          onSubmit={values => handleFormSubmit(values)}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .required("Required")
              .matches(/[a-zA-Z0-9]/, "username must be alphanumeric")
              .min(2, "username must be at least 2 characters long")
              .max(10, "username length mustn't be more than 10")
              .ensure()
              .trim(),
            password: Yup.string()
              .required("Required")
              .min(6, "password must be at least 6 characters long")
              .max(15, "password length mustn't be more than 15")
              .ensure()
              .trim()
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue
            } = props;

            return (
              <Form>
                <Label htmlFor="username">
                  Username
                  <Input
                    name="username"
                    id="username"
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.username && touched.username}
                  />
                </Label>
                {errors.username && touched.username && (
                  <InputFeedback>{errors.username}</InputFeedback>
                )}
                <Label htmlFor="password">
                  Password
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.password && touched.password}
                  />
                </Label>
                {errors.password && touched.password && (
                  <InputFeedback>{errors.password}</InputFeedback>
                )}
                <ButtonsWrapper>
                  <Button
                    onClick={e => {
                      setFieldValue("isLogin", true);
                      handleSubmit(e);
                    }}
                    disabled={isSubmitting || Object.keys(errors).length}
                    type="login"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={e => handleSubmit(e)}
                    disabled={isSubmitting || Object.keys(errors).length}
                    type="register"
                  >
                    Sign Up
                  </Button>
                </ButtonsWrapper>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { loginUser, registerUser }
)(LoginForm);
