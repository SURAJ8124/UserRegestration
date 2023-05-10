import Login from './components/Login';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Regestration from './components/Regestration';
import { Container } from '@material-ui/core';
import HomePage from './components/HomePage';
import { useEffect, useState,createContext} from 'react';


export const UserContext = createContext(null);
function App() {
const[user,setUser]=useState({});

const [update,setUpdate]=useState("");


useEffect=()=>({
 } [user,update])

  return (
    <>
    
    <Container>
      <div className='page'>
      <UserContext.Provider value={{ user, setUser }}>
           <Routes>
           <Route exact path='/' element={user&&user._id? <HomePage setuser={setUser} setUpdate={setUpdate}/> : <Login setUser={setUser}/>}/>
           <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/register' element={<Regestration/>}/>
          </Routes>
          </UserContext.Provider>
    </div>
    </Container>
   
   </>
  
   
  );
}

export default App;
