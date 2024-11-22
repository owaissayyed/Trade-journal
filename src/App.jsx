import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Services from './pages/services';
import AddTradeJournal from './pages/tradejournal';
import { useState } from 'react';
import RefreshHandler from './component/RefreshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to='/login'/>
  }
  return (
   <div className='App'>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
    <Routes>
      <Route path='/' element={<Navigate to='/login'/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
      <Route path='/tradejournal' element={<AddTradeJournal />}/>
      <Route path='/services' element={<Services />}/>
      </Routes>
   </div>
  )
}

export default App
