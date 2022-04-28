import React from 'react';
import {NavLink} from 'react-router-dom';
const Header =() =>
<>
<nav className="header__nav">
       <ul className ="nav__menu">
       <li><p className="nav__title" > Fakelandia  Justice Department</p></li>
      <li><NavLink to ='/'  style={({ isActive }) => ({
        color: isActive ? '#32a8a6' : '#E7ECEF'
      })}>Home</NavLink></li>
      <li><NavLink to ='/misdemeanoursList' 
      style={({ isActive }) => ({
        color: isActive ? '#32a8a6' : '#E7ECEF'
      })}>Misdemeanours</NavLink></li>
      <li><NavLink to= '/confess'  style={({ isActive }) => ({
        color: isActive ? '#32a8a6' : '#E7ECEF'
      })}>Confess to Us</NavLink></li>
     </ul>
 </nav>
</>






export default Header