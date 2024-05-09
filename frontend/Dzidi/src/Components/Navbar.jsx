import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
//adding states
// const [isActive, setIsActive] = useState(false);

// const ToggleActiveClass = () => {
//     setIsActive(!isActive);
// }

const [click, setClick] = useState(false)
const [dropdown, setDropdown] = useState(false)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)


  return (

      <nav className='navbar'>

        <div className='logoBox'>
          <NavLink to='/' className='navbar-logo'>Dzidi Gh</NavLink>
        </div>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'><NavLink to='/' className='nav-links' onClick={closeMobileMenu }>Home</NavLink></li>
          <li className='nav-item'><NavLink to='/menu' className='nav-links' onClick={closeMobileMenu }>Menu</NavLink></li>
          <li className='nav-item'><NavLink to='/shop' className='nav-links' onClick={closeMobileMenu }>Shop</NavLink></li>
        </ul>

      </nav>
                
           
            
        
   
  )
}

export default Navbar