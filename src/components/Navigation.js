import React from 'react'

const Navigation = (props) => (
  <div className='navigation'>
    <div onClick={props.handleShowMenu} className='navigation__mobile'>
      <span />
    </div>
    <ul className='navigation__list'>
      <div className='navigation__back' />
      <li className='navigation__item'>Activos</li>
      <li className='navigation__item'>Inactivos</li>
      <li className='navigation__item'>Todos</li>
    </ul>
  </div>
)

export default Navigation
