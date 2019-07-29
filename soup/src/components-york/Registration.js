import React from "react";

import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";

const Registration = ({ touched, errors }) => {
  return (
    <div>
      <h1>Registration</h1>
      <Form>
        <label>UserName: </label>
        <Field type="text" name="username" />
        <p>{touched.username && errors.username}</p>
        <label>Email: </label>
        <Field type="text" name="email" />
        <p>{touched.email && errors.email}</p>
        <label>Password: </label>
        <Field type="text" name="password" />
        <p>{touched.password && errors.password}</p>
        <label>Soup Kitchen: </label>
        <Field type="text" name="kit_id" />
        <p>{touched.kit_id && errors.kit_id}</p>
        <button type="submit">Register</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, email, password, kit_id }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      kit_id: kit_id || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters long.")
      .required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters long.")
      .required("Password is required"),
    kit_id: Yup.string()
      .min(4, "Kitchen idenity must be at least 4 characters long.")
      .required("Kitchen identity is required")
  }),
  handleSubmit(values, { props }) {
    const url = "";
    axios
      .post(url, values)
      .then(res => {
        console.log("in handleSubmit", res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/inventory");
      })
      .catch(e => {
        console.log("Registration Failed!", e);
      });
  }
})(Registration);
