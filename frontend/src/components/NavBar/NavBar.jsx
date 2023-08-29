import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'; 

const NavBar = () => {
  const handleHomeClick = () => {
    window.location.reload(); // Refresca la página
  };

  return (
    <nav className={style.navBar}>
      <ul>
        <li>
          <Link to="#" onClick={handleHomeClick}>Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload your dog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
