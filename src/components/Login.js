import React, {useContext} from 'react';
import { Formik, Form, Field,ErrorMessage,FormikErrors} from 'formik';
import { TextField, Button,Typography, } from '@material-ui/core';
import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from '../App'
import Regestration from './Regestration';



const Login = () => {

  const [visible, setVisible] = useState(true);

const toggleVisibility = () => {
  setVisible(!visible);
}
  const { setUser } = useContext(UserContext);
  const useStyles = makeStyles((theme) => ({
    heading: {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
    error: {
      color: 'red',
      marginTop: theme.spacing(1),
    },
  }));
  const classes = useStyles();
 
  
 
  const initialValues = {
    email: '',
    password: '',
  };
  

 
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email= 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password ='Required';
    }
    return errors;
   
  };

  const url="mongodb+srv://surajchavan1532:LFzND8RMnbuMozjJ@cluster0.jeuhijb.mongodb.net/nodeJSEsayWay?retryWrites=true&w=majority"
 
  const  onSubmit = async (values, { resetForm }) => {
    
    await fetch('https://userregistreation.onrender.com/login', {
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
        setUser(data.user)
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      resetForm();
      console.log(classes.errors,"class")
  };
 


  
    
 
 
  return (<>
    {visible ?<div className="root">
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({errors, touched}) => (
        
        <div className="registration-form">
        <Form className="login-form">
        <Typography variant="h4" component="h1" className={classes.heading}>
      Login Page
          </Typography>
          <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
          {errors.email && touched.email && <div className="error">{errors.email}</div>}
          <Field as={TextField} name="password" label="Password" type="password" fullWidth margin="normal" />
          <Typography className='errorsecond'>Password at least 8 digit</Typography>
          {errors.password && touched.password && <div className="error">{errors.password}</div>}
          <Button type="submit" variant="contained" color="primary" className="login-button" >Login</Button>
          <Typography>OR</Typography>
          <Button typre="register" variant="contained" color="primary"className="login-button" onClick={toggleVisibility}>Registration</Button>
        </Form>
        </div> 
      )}
    </Formik>
 </div>:
 <Regestration/>}  
    </>
   
  );
};

export default Login;
