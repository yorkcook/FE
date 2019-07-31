import React, { useState, useEffect } from "react";
import axios from "axios";
import SignupForm from "./SignUpForm";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = ({ touched, errors}) => {
  return (
    <div className="box">
    <h1 className="registration-title">Registration Form</h1>
    <Form>
      <div>
        <label>Name</label>
        <div className='test'>
        <Field type="text" name="username" placeholder="Enter Name" />
        <p>{touched.name && errors.name}</p>
        </div>
      </div>
      <div>
        <label>Password</label>
        <div className='test'>
        <Field type="text" name="password" placeholder="Enter Password" />
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
    const url = "https://server-soup.herokuapp.com/api/auth/login";
    console.log("in handle submit", values);
    axios
      .post(url, values)
      .then(res => {
        console.log("in handleSubmit", res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/ingredients");
      })
      .catch(e => {
        console.log("Login Failed!", e);
      });
  }
})(Login);



// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import SignupForm from './SignUpForm';

// function Login(){
//     // const [logins, setLogins] = useState()

//     // //useEffect for future axios call
//     // useEffect(()=>{ 
//     // //'grabs api data'
//     // axios.get('apihere')
//     //  //if data exsists return response data
//     //     .then(response => {
//     //         const res = response
//     //         console.log('CheckResponse', res)
//     //         //set login state to the response data
//     //         setLogins(res)
//     //     })
//     //     .catch(error=> { return console.log('Error API not functioning properly.', error)
//     // })
//     return(
//         <SignupForm />
//         )
//     // })

// }

// export default Login