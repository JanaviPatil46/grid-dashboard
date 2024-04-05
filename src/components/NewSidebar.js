import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './newsidebar.css';
import newSidebarItems from './newSidebarItems';

const NewSidebar = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleItemClick = (index) => {
    setActiveForm(index);
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  return (
    <>
      <div className="content">
        <div className="content-list">
          {newSidebarItems.map((items, index) => (
            <li className="side-link" key={index}>
              <Link to={items.path} onClick={() => handleItemClick(index)}>
                <items.icon className="new-icon" />
                <span className="text nav-text">{items.text}</span>
              </Link>
            </li>
          ))}
         
        </div>
      </div>

      {activeForm !== null && (
        <div className="right-sidebar">
          <div className="right-sidebar-header">
            <h2>{newSidebarItems[activeForm].text} Form</h2>
            {React.createElement(newSidebarItems[activeForm].formComponent)}
            <button onClick={handleCloseForm}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewSidebar;



