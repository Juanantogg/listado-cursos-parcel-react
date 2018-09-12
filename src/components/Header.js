import React from 'react'

import logo from './../assets/logo.svg'
import Navigation from './Navigation'

const Header = (props) => (
  <header className='header'>
    <div className='header__title'>
      <img src={logo} alt='Logo' />
      <div>
        <h1>Lista de cursos</h1>
        <p>Con React.js y Parcel.js</p>
      </div>
    </div>
    <Navigation handleShowMenu={props.handleShowMenu} />
  </header>
)

export default Header
