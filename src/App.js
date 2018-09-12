import React, { Component } from 'react'
import Header from './components/Header'
import Courses from './components/Courses'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showMenu: false
    }

    this.handleShowMenu = this.handleShowMenu.bind(this)
  }

  handleShowMenu () {
    this.setState({showMenu: !this.state.showMenu})
  }

  render () {
    return (
      <div className='app'>
        <Header handleShowMenu={this.handleShowMenu} />
        <Courses showMenu={this.state.showMenu} />
      </div>
    )
  }
}

export default App
