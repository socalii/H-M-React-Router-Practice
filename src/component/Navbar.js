import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const menuList = [
    'Women',
    'Divided',
    'Men',
    'Men',
    'Baby',
    'Kids',
    'H&M Home',
    'Sale',
    'Sustainability',
  ]

  return (
    <div>
      <div>
        <div className='login-button'>
          <FontAwesomeIcon icon={faUser} />
          <div className='login-message'>LOGIN</div>
        </div>
      </div>

      <div className='nav-section'>
        <img
          width={100}
          src='https://seeklogo.com/images/H/H_and_M-logo-9C22DB457C-seeklogo.com.png'
        />
      </div>

      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search-input'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' placeholder='Search' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
