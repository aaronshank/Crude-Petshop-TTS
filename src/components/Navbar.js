import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to='/petshop' className='home'>PetShop</Link>
      </div>
    )
  }
}