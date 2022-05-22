import React from 'react'
import {useNavigate} from 'react-router-dom';
function HamburgerMenu() {
    let navigate = useNavigate();
  return (
    <section className='Hamburger-menu'>
        <div className='list-content'>
        <ul>
          <li onClick={()=>navigate('/')}>Home</li>
          <li onClick={()=>navigate('/app-info')}>App info</li>
          <li onClick={()=>navigate('/author')}>Author</li>
        </ul>
        </div>
      </section>
  )
}

export default HamburgerMenu