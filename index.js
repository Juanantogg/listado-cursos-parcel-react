import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import courses from './src/data.json'

if (!window.localStorage.getItem('cursos')) {
  window.localStorage.setItem('cursos', JSON.stringify(courses))
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
