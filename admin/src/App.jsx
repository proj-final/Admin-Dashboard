import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Dashboard from './dashbaord/dashboard';

function App() {
  const login =window.localStorage.getItem("islogedIn")
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;