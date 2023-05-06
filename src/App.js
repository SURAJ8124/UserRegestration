import Login from './components/Login';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Regestration from './components/Regestration';
import { Container } from '@material-ui/core';
// import { Route,Routes} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  


  
  return (
    <>

    <Container>
      <div className='page'>
           <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Regestration}/>
          </Routes>
          
        
    </div>
    </Container>

   </>
  
   
  );
}

export default App;
