import React, { useState } from 'react'
import './header.css'
import { IoSearch } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import NewSidebar from './NewSidebar';
const Header = () => {
    const [newSidebarOpen, setNewSidebarOpen] = useState(false);
    const [newSearchOpen, setNewSearchOpen] = useState(false);
    const toggleNewSidebar = () => {
        setNewSidebarOpen(!newSidebarOpen); // Toggle new sidebar visibility

    };
    const closeNewSidebar = () => {
        setNewSidebarOpen(false); // Close new sidebar
    };
    const toggleNewSearch = () => {
        setNewSearchOpen(!newSearchOpen);

    }
    const togglecloseSearch = () => {
        setNewSearchOpen(false);



    }
    return (
        <>
            {newSidebarOpen || newSearchOpen ? <div className="backdrop" /> : null}
            <div className='header-container' style={{ padding: '20px' }}>
                <div className='header-btns'>
                    <button className='new-btn' onClick={toggleNewSidebar}><FiPlusCircle className='search-icon' /></button>
                    <button className='new-btn' onClick={toggleNewSearch}><IoSearch className='search-icon' /></button>
                </div>
                {newSidebarOpen && (
                    <div className="new-sidebar">
                        <div className="new-sidebar-header" style={{ backgroundColor: '#E5E4E2' }} >
                            <p style={{ padding: '10px' }}>New Sidebar Content</p>
                            <IoMdClose style={{ cursor: 'pointer', fontSize: '25px', margin: '5px' }} onClick={closeNewSidebar} />
                        </div>
                        <NewSidebar />
                    </div>
                )}
                {newSearchOpen && (
                    <div className='new-search'>
                        <div className="new-search-content">
                            <IoMdClose style={{ cursor: 'pointer' }} onClick={togglecloseSearch} />
                            <p>New Search Content</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header