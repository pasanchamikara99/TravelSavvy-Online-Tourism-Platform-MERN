import './App.css';
import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/navbar'
import Test from './pages/Test'

import AddEvent from './components/AddEvent';
import ViewEvents from './components/ViewEvents';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">  
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route path='/test' element={user ? <Test /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </BrowserRouter>   
    </div>
  );
}

export default App;
