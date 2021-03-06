import React from "react";
import axios from "axios";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = ({ touched, errors }) => {
  return (
    <div className="box">
      <h1 className="registration-title">Login Form</h1>
      <Form>
        <div>
          <label>Name</label>
          <div className="test">
            <Field type="text" name="username" placeholder="Enter Name" />
            <p>{touched.name && errors.name}</p>
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className="test">
            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <p>{touched.password && errors.password}</p>
          </div>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",

      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters long.")
      .required("Username is required"),

    password: Yup.string()
      .min(4, "Password must be at least 4 characters long.")
      .required("Password is required")
  }),
  handleSubmit(values, { props }) {
    const url = "https://we-serve-soup.herokuapp.com/api/auth/login";
    console.log("in handle submit", values);
    axios
      .post(url, values)
      .then(res => {
        console.log("in handleSubmit", res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/inventory");
      })
      .catch(e => {
        console.log("Login Failed!", e);
      });
  }
})(Login);
