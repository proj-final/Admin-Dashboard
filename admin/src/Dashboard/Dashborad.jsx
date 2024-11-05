import React from "react";
import Navbar from "./navbar"; 
import Sidebar from "./Sidebar"; 

const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Sidebar /> 
            <div className="flex-1 flex flex-col min-h-screen ml-64"> 
                <Navbar />
                <main className="p-4 pt-20"> 
                    <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>

                </main>
            </div>
        </div>
    );
}

export default Dashboard;
