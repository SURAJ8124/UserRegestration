import { Typography, TextField, Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik';
import {UserContext} from '../App'
import {useContext,useState} from 'react';
import PopUp from "./PopUp";


const EditProfile = ({newUser,toggleVisibility}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const[message,setMessage]=useState("");


  const initialValues = {
    name: '',
    password: '',
    email: ''
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
    return errors;
  };



  const onSubmit = async (values, { resetForm }) => {
    alert("Are you sure to update your Username and password ?")
    const id = newUser;
    try {
      const response = await fetch(`http://localhost:9002/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      const data = await response.json();
      if(data.message){
        setMessage(data.message)
        setShowPopUp(true);
      }
    } catch (error) {
      console.log(error);
    }
    resetForm();
    
  }
  const back =()=>{
    toggleVisibility();
  }


  return (
    <>
      <div className='registration-form'>
      <Typography component="h1" variant="h4" className="Heading"> Edit Profile</Typography>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
          {({ isValid }) => (
            <Form>
              <Field as={TextField} name="name" label="Username" fullWidth margin="normal" />
              <Field as={TextField} name="password" label="Password" type="password" fullWidth margin="normal" />
              <Field as={TextField} name="email" label="Enter your registerd email" fullWidth margin="normal" />
              <div className="button-container">
              <Button type="submit" variant="contained" color="primary" disabled={!isValid}>Update</Button>
              <div className='size'>
              <Button className='HomeButton' variant="contained" color="primary" onClick={back} >Back too Home</Button>
              </div>
              </div>
            </Form>
          )}
        </Formik>
     
      </div>
      {showPopUp && <PopUp message={message} showPopUp={showPopUp} />}
    </>
  )
}

export default EditProfile