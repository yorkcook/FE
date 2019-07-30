import React from "react";

import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";

import "../App.css";

const Registration = ({ touched, errors }) => {
  return (
    <div className="box">
      <h1 className="registration-title">Registration Form</h1>
      <Form>
        <div>
          <label>UserName</label>
          <div className='test'>
            <Field type="text" name="username" placeholder='Enter your username'/>
            <p>{touched.username && errors.username}</p>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div className='test'>
            <Field type="email" name="email" placeholder='Enter your email' />
            <p>{touched.email && errors.email}</p>
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className='test'>
            <Field type="password" name="password" placeholder='Enter your password' />
            <p>{touched.password && errors.password}</p>
          </div>
        </div>
        <div>
          <label>Soup Kitchen</label>
          <div className='test'>
            <Field type="text" name="kit_id" placeholder='Enter your Id' />
            <p>{touched.kit_id && errors.kit_id}</p>
          </div>
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
