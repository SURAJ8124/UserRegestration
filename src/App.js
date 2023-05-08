import Login from './components/Login';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Regestration from './components/Regestration';
import { Container } from '@material-ui/core';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import EditProfile from './components/EditProfile';
function App() {
const[user,setUser]=useState({});
useEffect=()=>({

 } [user])
 
  return (
    <>
    
    <Container>
      <div className='page'>
           <Routes>
            <Route path='/' element={<HomePage  setUser={setUser} user={user}/>}/>
           {/* <Route exact path='/' element={user&&user._id? <HomePage  user={user} setuser={setUser}/> : <Login setUser={setUser}/>}/> */}
           <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/register' element={<Regestration/>}/>
          <Route path='editprofile' element={<EditProfile/>}/>
          </Routes>
    </div>
    </Container>
   
   </>
  
   
  );
}

export default App;
