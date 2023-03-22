import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ff__navbar'>
      <div className='ff__navbar-links'>
        <div className='ff__navbar-links_logo'>
          <h1 className="gradient__text">FINANCE FUSION</h1>
        </div>
        <div className='ff__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#About'></a>About</p>
          <p><a href='#Blog'></a>Blog</p>
          <p><a href='#Contact'>Contact</a></p>
          <p><a href='#FS'>Financial Statements</a></p>
        </div>
        <div className='ff__navbar-sign'>
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className='ff__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='ff__navbar-menu_container scale-up-center'>
              <div className='ff__navbar-menu_container-links'>
                <p><a href='#home'>Home</a></p>
                <p><a href='#About'></a>About</p>
                <p><a href='#Blog'></a>Blog</p>
                <p><a href='#Contact'>Contact</a></p>
                <p><a href='#FS'>Financial Statements</a></p>
              </div>
              
              <div className='ff__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
