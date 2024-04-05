import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./sidebar.css";
import { FaAngleLeft, FaAngleDown, FaAngleUp, FaMoon, FaSun,FaBars } from "react-icons/fa";
import logo from '../img/logo.svg'
import { menuItems } from './menuItems';
import Switch from 'react-switch';
import { IoIosLogOut } from "react-icons/io";
import './header.css'
import Header from './Header';
// import Routing from './Routing';


function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        setOpenSubMenu(null)

    };
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);

    };
    const [themeMode, setThemeMode] = useState('light');
    const toggleThemeMode = () => {
        const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newThemeMode);
    };

    return (
        <div className={`grid-container ${themeMode === 'dark' ? 'dark-theme' : ''}`}>
            <header className="header">
                <Header />
            </header>
            <section className={`sidebar  ${collapsed ? 'collapsed' : ''}`}>
                <div className="toggle">
                    <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
                </div>
                <div className='sidebar-content' style={{ width: '250px' }}>


                    <div className='logo-container' style={{ display: 'flex', gap: '20px', margin: '25px 0 0 10px', alignItems: 'center' }}>
                        <span className="image">
                            <img src={logo} alt="" style={{ width: '40px', height: '40px' }} />
                        </span>
                        <div className="text hidden-text" >
                            <span className="name" >SNP</span>
                        </div>
                    </div>
                    <div className='sidebar-items'>
                        <div className="menu-bar" >
                            <div className="menus">
                                <ul className="menu">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <div className="menu-item">
                                                <Link to={item.path} className="menu-link" onClick={() => toggleSubMenu(index)}>
                                                    <i onClick={toggleSidebar} className='menu-icon'>{item.icon}</i>
                                                    <span className="hidden-text">{item.title}</span>
                                                    {item.submenus && (
                                                        openSubMenu === index ? <FaAngleUp className="submenu-toggle" /> : <FaAngleDown className="submenu-toggle" />
                                                    )}
                                                </Link>
                                                {item.submenus && openSubMenu === index && (
                                                    <ul className="submenu">
                                                        {item.submenus.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link to={subItem.path} className="submenu-link">
                                                                    <i className='submenu-icon'>{subItem.icon}</i>
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
                        <div className='bottom-content' >
                            <ul>

                                <li >
                                    <Link to="#" className="logout-link">
                                        <IoIosLogOut className='logout-icon' />
                                        <span className="hidden-text">Logout</span>
                                    </Link>
                                </li>
                                <li className="theme-mode-toggle">
                                    <span style={{ fontSize: '20px' }}>
                                        {themeMode === 'light' ? <FaMoon className='mode-icon' /> : <FaSun className='mode-icon' />}
                                    </span>
                                    <span className="hidden-text" style={{ marginLeft: '15px' }}>
                                        {themeMode === 'light' ? ' Dark Mode' : 'Light Mode'}
                                    </span>
                                    <Switch
                                        checked={themeMode === 'dark'}
                                        onChange={toggleThemeMode}
                                        onColor="#007bff"
                                        offColor="#ccc"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        height={20}
                                        width={40}
                                        className='mode-switch'
                                    />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
               
            
                <div className="sidebar-toggle-btn" >
                <FaBars />
            </div>
            </section>
            <main className="main">
                {/* <Routing/> */}
                <Outlet />
            </main>
           
        </div>
    );
}

export default Sidebar;



