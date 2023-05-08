import { Button,Typography } from '@material-ui/core';
import React from 'react'

const HomePage = (props) => {
 const LogOut=()=>{
  props.setUser("")
 }
    
 const EditProfile =()=>{
  window.location.href = '/editprofile'
 }
  return (
    <form className="registration-form">
      <Typography variant="h4" component="h1" className="Heading">
      Home Page
          </Typography>
          <div className='homePageDetails'>
          <Typography > Name: {props.user.name}</Typography>
          <Typography> EmailId:{props.user.email}</Typography>
          <Typography> Password:{props.user.password}</Typography>
          </div>
    <Button className='HomeButton' variant="contained" color="primary" onClick={LogOut} >LogOut</Button>
    <Button className='HomeButton' variant="contained" color="primary" onClick={EditProfile} >Edit Profile</Button>
    </form>
  )
}

export default HomePage