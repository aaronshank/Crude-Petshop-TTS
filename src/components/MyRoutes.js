import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './Petshop'
import Login from './Login'
import Navbar from './Navbar'

export default class MyRoutes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/petshop' element={<App />} />
          </Routes>
        </div>
      </Router>
    )
  }
}