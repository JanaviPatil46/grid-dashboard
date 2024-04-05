import React from 'react';
import newSidebarItems from './newSidebarItems';
import { Link } from 'react-router-dom';
import './newsidebar.css';

const NewSidebar = () => {
 
  return (
    <>
      <div className="content">
        <div className="content-list">
          {newSidebarItems.map((items, index) => (
            <div key={index} className="side-link">
              <Link to={items.path} >
                <items.icon className="new-icon" />
                <span className="text nav-text">
                  {items.text}
                </span>
              </Link>
            </div>
          ))}
        </div>

      </div>
     
    </>
  )
}

export default NewSidebar