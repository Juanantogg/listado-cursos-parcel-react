import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardCourse from './CardCourse'
import SearchCourse from './SearchCourse'

class Courses extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMenu: props.showMenu,
      courses: JSON.parse(window.localStorage.getItem('cursos')),
      searchedCourse: '',
      foundCourses: []
    }

    this.changeStateCourse = this.changeStateCourse.bind(this)
    this.searchCourse = this.searchCourse.bind(this)
  }

  componentWillReceiveProps (props) {
    this.setState({showMenu: props.showMenu})
  }

  changeStateCourse (id) {
    let x = Object.assign(this.state.courses)

    x.find((course) => {
      if (course.id === id) course.activo = !course.activo
    })

    this.setState({courses: x})
    window.localStorage.setItem('cursos', JSON.stringify(x))
  }

  searchCourse (e) {
    this.setState({
      searchedCourse: e.target.value,
      foundCourses: this.state.courses.filter(curso => {
        if (e.target.value !== '') return curso.curso.toLowerCase().includes(e.target.value.toLowerCase())
      })
    })
  }

  render () {
    let hiddenMenuStyles = {
      top: '48px',
      boxShadow: 'none'
    }

    let showMenuStyles = {
      top: '144px',
      boxShadow: '0 -3px 6px rgba(0, 0, 0, 0.4)'
    }

    return (
      <main className='courses' style={this.state.showMenu ? showMenuStyles : hiddenMenuStyles} >
        <SearchCourse searchCourse={this.searchCourse} />
        <div className='courses__container'>
          {
            this.state.foundCourses.length > 0
              ? this.state.foundCourses.map((course) => (<CardCourse changeStateCourse={this.changeStateCourse} key={course.id} course={course} />))
              : this.state.courses.map((course) => (<CardCourse changeStateCourse={this.changeStateCourse} key={course.id} course={course} />))
          }
        </div>
      </main>
    )
  }
}

Courses.propTypes = {
  showMenu: PropTypes.bool.isRequired
}

export default Courses
