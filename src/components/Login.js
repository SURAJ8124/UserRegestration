import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';


const initialValues = {
  email: '',
  password: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const onSubmit = (values, { resetForm }) => {
  fetch('http://localhost:9002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    resetForm();
};

const Login = () => {

 
 
 
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({ isValid }) => (
        
        <div className="registration-form">
        <Form className="login-form">
          <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
          <Field as={TextField} name="password" label="Password" type="password" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" disabled={!isValid} className="login-button">Login</Button>
    
        </Form>
        <a href='/register'>Regestration</a>
        <p>  </p>
        <a href='/changepassword'>Change  password</a>
        </div>
        
      )}
    </Formik>
  );
};

export default Login;
