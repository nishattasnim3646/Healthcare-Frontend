import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddNewDoctor from "./components/AddNewDoctor.jsx";
import AddNewAdmin from "./components/AddNewAdmin.jsx";
import Messages from "./components/Messages.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Login from "./components/Login.jsx";
import Doctors from "./components/Doctors.jsx";
import Dashboatd from "./components/Dashboard.jsx";

const App = () => {
    return (    
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/doctors" element={<Doctors/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/add-doctor" element={<div>Add New Doctor</div>} />
                    <Route path="/add-admin" element={<div>Add New Admin</div>} />
                    <Route path="/messages" element={<div>Messages</div>} />
                </Routes>
            </Router>
        </>
    )
}

export default App;