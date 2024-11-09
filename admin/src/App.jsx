import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard/Dashborad';
import Login from './auth/login'; 
import Signup from './auth/signup'; 
import Chief from './components/chief';
import Dishes from './components/dishes'; 
import Client from './components/client'; 
import Delivery from './components/delivery-boy'; 
import Order from './components/orders'; 

function App() {
    // Check if user is logged in by checking 'islogedIn' value in localStorage
    const login = window.localStorage.getItem("islogedIn"); 

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} /> 
                    <Route path="/" element={login ? <Dashboard /> : <Login />} /> 
                    <Route path="/Dashboard" element={<Dashboard />}/>
                     
                    
                    <Route path="/chief" element={<Chief />} />
                    <Route path="/dishes" element={<Dishes />} />
                    <Route path="/client" element={<Client />} />
                    <Route path="/delivery-boy" element={<Delivery />} />
                    <Route path="/Order" element={<Order />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
