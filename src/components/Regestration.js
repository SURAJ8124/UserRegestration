import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@material-ui/core';
function Regestration() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords must match';
    }
    return errors;
  };

  const onSubmit = (values, { resetForm }) => {
    // Process form submission
    resetForm();
  }

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
        {({ isValid }) => (
          <Form>
            <Field as={TextField} name="username" label="Username" fullWidth margin="normal" />
            <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
            <Field as={TextField} name="password" label="Password" type="password" fullWidth margin="normal" />
            <Field as={TextField} name="confirmPassword" label="Confirm Password" type="password" fullWidth margin="normal" />
            <Button type="submit" variant="contained" color="primary" disabled={!isValid}>Register</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Regestration;



