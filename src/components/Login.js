import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
      <div className="container loginDiv">
        <input></input>
        <Link to='/petshop'><button>Enter</button></Link>
      </div>
    )
  }
}