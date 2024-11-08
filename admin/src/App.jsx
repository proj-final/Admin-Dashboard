import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard/Dashborad';
import Login from './auth/login'; 
import Signup from './auth/signup'; 
import Chief from './components/Chief';
import Dishes from './components/Dishes'; 
import Client from './components/client'; 
import Delivery from './components/delivery-boy'; 
import Order from './components/order'; 

function App() {
    // Check if user is logged in by checking 'islogedIn' value in localStorage
    const login = window.localStorage.getItem("islogedIn"); 

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} /> 
                    <Route path="/" element={login ? <Dashboard /> : <Login />} /> 
                    <Route path="/signup" element={<Signup />} /> 
                    <Route path="/dashboard" element={login ? <Dashboard /> : <Login />} />
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
