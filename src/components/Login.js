import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button,Typography } from '@material-ui/core';
import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const Login = ({setUser}) => {

  const useStyles = makeStyles((theme) => ({
    heading: {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
  }));
  const classes = useStyles();
 
  const [error, setError] = useState(null);
  const initialValues = {
    email: '',
    password: '',
  };
  
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      setError ('Required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setError ('Invalid email address');
    }
    if (!values.password) {
      setError ('Required') ;
    }
    return errors;
  };

  
  
  const  onSubmit = async (values, { resetForm }) => {
    await fetch('http://localhost:9002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
       
      })
      .then (response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert(data.message,"data"); 
        setUser(data.user,"userdata")
        console.log(data.user.id,"userdata")
        window.location.href = '/'
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      resetForm();
  };
 


  
    
 
 
  return (
    <div className="root">
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({isValid}) => (
        
        <div className="registration-form">
        <Form className="login-form">
        <Typography variant="h4" component="h1" className={classes.heading}>
      Login Page
          </Typography>
          <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
          <Field as={TextField} name="password" label="Password" type="password" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" disabled={!isValid} className="login-button">Login</Button>
          {error && <Typography color="error">{classes.error}</Typography>}
        </Form>
        <a href='/register'>Registration</a>
        </div>
        
      )}
    </Formik>
    </div>
   
  );
};

export default Login;
