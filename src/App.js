import Login from './components/Login';
import './App.css';
import Regestration from './components/Regestration';
import { Container } from '@material-ui/core';
import { Route,Routes} from 'react-router-dom';





function App() {

  
  return (
    <>

    <Container>
      <div className='page'>
           <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/regestration' Component={Regestration}/>
          </Routes>
    </div>
    </Container>

   </>
  
   
  );
}

export default App;
