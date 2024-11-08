import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard/Dashborad';
import Login from './auth/login'; 
import Signup from './auth/signup'; 


function App() {
  
  const login =window.localStorage.getItem("islogedIn")
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ login ? <Dashboard /> :<Login />} /> 
                    <Route path="/signup" element={<Signup />} /> 
                    <Route path="/Dashboard" element={<Dashboard />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

