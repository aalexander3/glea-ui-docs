import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavItem, Navbar, Header } from 'gleam-ui-react'

const MyNavbar = () => {
  const [ openSection, setSection ] = useState(null)
  return (
    <Navbar direction="vertical">
      <Link to='/'><NavItem>Home</NavItem></Link>
      <Link to='/buttons'><NavItem>Buttons</NavItem></Link>
      <Link to='/icons'><NavItem>Icons</NavItem></Link>
    </Navbar>
  )
}

export default MyNavbar
