import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./sidebar.css";
import { FaAngleLeft } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Home from '../pages/Home';
import User from '../pages/User';
import Setting from '../pages/Settings';
import Notification from '../pages/Notification';
import { menuItems } from './menuItems'; // Import menuItems array

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='grid-container'>
            <header className="header"></header>
            <section className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="toggle">
                    <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
                </div>
                <ul className="menu">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} className="menu-link">
                                <FontAwesomeIcon icon={item.icon} onClick={toggleSidebar}/>
                                <span className={collapsed ? 'hidden-text' : ''}>{item.title}</span>
                            </Link>
                            
                        </li>
                    ))}
                </ul>
            </section>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/settings" element={<Setting />} />
                    <Route path="/notifications" element={<Notification />} />
                </Routes>
            </main>
        </div>
    );
}

export default Sidebar;

