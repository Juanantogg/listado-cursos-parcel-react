import React from 'react'

const SearchCourse = (props) => {
  return (
    <input
      type='text'
      className='search'
      onChange={props.searchCourse}
      placeholder='Busca un curso aquí'
    />
  )
}

export default SearchCourse;
