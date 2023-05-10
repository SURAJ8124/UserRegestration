import { Button,Typography } from '@material-ui/core';
import React, { useState,useContext } from 'react'
import { UserContext } from '../App';
import EditProfile from './EditProfile';


const HomePage = ({setuser,setUpdate}) => {
  const { user } = useContext(UserContext);
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  }
 const LogOut=()=>{
  setuser({})
 }
  return (
    <>
     {visible ?<form className="registration-form">
      <Typography variant="h4" component="h1" className="Heading">
      Home Page
          </Typography>
          <div className='homePageDetails'>
          {user?<Typography className='HomePagee'> User Id: {user._id}</Typography>:"Plese login"}
          {user?<Typography > Name: {user.name}</Typography>:"Plese login"}
          {user?<Typography> EmailId:{user.email}</Typography>:"Plese login"}
          {user?<Typography> Password:{user.password}</Typography>:"Plese login"}
          </div>
          <div className="button-container">
    <Button className='HomeButton' variant="contained" color="primary" onClick={LogOut} >LogOut</Button>
    <Button className='HomeButton' variant="contained" color="primary" onClick={toggleVisibility} >Edit Profile</Button>
    </div>
    </form>:
     <EditProfile newUser={user._id}toggleVisibility={toggleVisibility} setUpdate={setUpdate}/>}
     </>
  )
}

export default HomePage