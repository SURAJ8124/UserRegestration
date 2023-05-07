import Login from './components/Login';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Regestration from './components/Regestration';
import { Container } from '@material-ui/core';
import HomePage from './components/HomePage';
function App() {
  
  return (
    <>

    <Container>
      <div className='page'>
     
           <Routes>
           <Route exact path='/' Component={()=>(<HomePage/>)}/>
           <Route path='/login' Component={() => (<Login/>)}/>
          <Route path='/register' Component={()=>(<Regestration/>)}/>
          </Routes>
    </div>
    </Container>

   </>
  
   
  );
}

export default App;
