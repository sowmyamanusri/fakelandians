import {NavLink} from 'react-router-dom';
const NavBar = ()=><>
<nav className="header__nav">
       <ul className ="nav__menu">
       <li><h1 className="nav__title" > Fakelandia  Justice Department</h1></li>
      <li><NavLink to ='/' className="nav__item">Home</NavLink></li>
      <li><NavLink to ='/misdemeanours' className="nav__item">Misdemeanours</NavLink></li>
      <li><NavLink to= '/confess' className="nav__item">Confess to Us</NavLink></li>
     </ul>
 </nav>
 </>

 export default NavBar;