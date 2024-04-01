import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./sidebar.css";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../img/logo.svg'
import Home from '../pages/Home';
import User from '../pages/User';
import Setting from '../pages/Settings';
import Notification from '../pages/Notification';
import { menuItems } from './menuItems'; // Import menuItems array

function Sidebar() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        setOpenSubMenu(null)
    };
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    return (
        <div className='grid-container'>
            <header className="header"></header>
            <section className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="toggle">
                    <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
                </div>
                <div className='sidebar-content' style={{ width: '250px' }}>

                </div>
                <div className='logo-container' style={{display:'flex',gap:'20px',margin:'30px 0 0 10px',alignItems:'center'}}>
                    <span className="image">
                        <img src={logo} alt=""  style={{width:'40px', height:'40px'}} />
                    </span>
                    <div className="text hidden-text">
                        <span className="name">SNP</span>
                    </div>
                </div>

                <div className="menu-bar" >
                    <div className="menus">
                        <ul className="menu">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <div className="menu-item">
                                        <Link to={item.path} className="menu-link" onClick={() => toggleSubMenu(index)}>
                                            <FontAwesomeIcon icon={item.icon} onClick={toggleSidebar} />
                                            <span className="hidden-text">{item.title}</span>
                                            {item.submenus && (
                                                <FaAngleDown className="submenu-toggle" />
                                            )}
                                        </Link>
                                        {item.submenus && openSubMenu === index && (
                                            <ul className="submenu">
                                                {item.submenus.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to={subItem.path} className="submenu-link">
                                                            <FontAwesomeIcon icon={subItem.icon} className='submenu-icon'/> 
                                                            <span className="hidden-text">{subItem.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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


