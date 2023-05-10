import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Regestration() {
  const useStyles = makeStyles((theme) => ({
    heading: {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
  }));
  
  const classes = useStyles();
  
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Username is required';
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
    fetch('http://localhost:9002/register', {
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
        console.log(data,"data")
       alert(data.message);
       if(data.message==="Successfully registered"){
        window.location.href = "/";
       }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
   
    resetForm();
  }

 

  return (
    <div className="registration-form">
      <Typography variant="h4" component="h1" className="Heading">
            Register
          </Typography>
      <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
        {({ isValid }) => (
          <Form>
            <Field as={TextField} name="name" label="Username" fullWidth margin="normal" />
            <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
            <Field as={TextField} name="password" label="Password" type="password" fullWidth margin="normal" />
            <Typography className='errorsecond'>Password at least 8 digit</Typography>
           <Field as={TextField} name="confirmPassword" label="Confirm Password" type="password" fullWidth margin="normal" />
            <br/>
            <div className="button-container">
              
              <div><Button type="submit" variant="contained" color="primary" disabled={!isValid} size='large' className='Register'>Register</Button></div>
              <div className='size'>
            <div><Button typre="register" variant="contained" color="primary" href='/' size='medium'>Back to Login</Button>
            </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Regestration;



