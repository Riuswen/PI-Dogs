import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'; 

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <ul>
        <li>
          <Link to="/home">Home</Link> 
        </li>
        <li>
          <Link to="/create-dog">Upload your dog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;