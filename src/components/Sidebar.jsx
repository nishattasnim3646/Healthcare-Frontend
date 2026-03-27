import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/add-doctor">Add New Doctor</a></li>
                <li><a href="/add-admin">Add New Admin</a></li>
                <li><a href="/messages">Messages</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;