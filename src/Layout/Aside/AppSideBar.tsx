import { useState } from 'react';
import Buttons from './Components/Buttons';
import SideBar from './Components/SideBar';
import Users from './Components/Users';
import './Components/AppSideBar.css';

const AppSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="btn btn-outline-warning toggle-btn d-sm-block d-md-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content mt-2">
          <SideBar />
          <Users />
          <Buttons />
        </div>
      </div>
      {isOpen && (
        <div
          className="overlay d-sm-block d-md-none"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default AppSideBar;
