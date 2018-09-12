import React from 'react';

const CardCourse = (props) => {
  let { course } = props
  let { changeStateCourse } = props

  let activateCourse = {
    backgroundColor: 'green'
  }

  let turnOffCourse = {
    backgroundColor: 'red'
  }

  return (
    <div className='card'>
      <h3 className='card__name'>Curso: {course.curso}</h3>
      <span className='card__id'>Id: {course.id}</span>
      <small className='card__author'>Autor: {course.autor}</small>
      {
        course.activo
          ? <p className='card__active'><span style={{ color: 'green' }}>✓</span>Activo</p>
          : <p className='card__active'><span style={{ color: 'red' }}>✗</span>Inactivo</p>
      }
      <button
        style={course.activo ? turnOffCourse : activateCourse}
        // onClick={changeStateCourse.bind(this, course.id)}
        onClick={() => changeStateCourse(course.id)}
      >
        {course.activo ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  )
}

export default CardCourse
