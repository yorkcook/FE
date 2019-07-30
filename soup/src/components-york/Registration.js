import React from "react";

import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";

import "../App.css";

const Registration = ({ touched, errors, values, handleChange }) => {
  return (
    <div className="box">
      <h1 className="registration-title">Registration Form</h1>
      <Form>
        <label>UserName</label>
        <Field type="text" name="username" />
        <p className="yup">{touched.username && errors.username}</p>
        <label>Email</label>
        <Field type="text" name="email" />
        <p className="yup">{touched.email && errors.email}</p>
        <label>Password</label>
        <Field type="text" name="password" />
        <p className="yup">{touched.password && errors.password}</p>
        <label>Soup Kitchen</label>
        <div>
          <select name="kit_id" value={values.kit_id} onChange={handleChange}>
            <option value="" label="Select a kitchen" />
            <option value="1" label="1" />
            <option value="2" label="2" />
            <option value="3" label="3" />
            <option value="4" label="4" />
            <option value="5" label="5" />
            <option value="6" label="6" />
          </select>
          <p className="yup">{touched.kit_id && errors.kit_id}</p>
        </div>
        <button type="submit">Sign Up</button>
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
    kit_id: Yup.string().required("Kitchen identity is required")
  }),
  handleSubmit(values, { props }) {
    const url = "https://server-soup.herokuapp.com/api/auth/register";
    console.log("in handle submit", values);
    axios
      .post(url, values)
      .then(res => {
        console.log("in handleSubmit", res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/ingredients");
      })
      .catch(e => {
        console.log("Registration Failed!", e);
      });
  }
})(Registration);
