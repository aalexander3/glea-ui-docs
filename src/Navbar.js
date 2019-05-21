import React from 'react'
import { Link } from 'react-router-dom'
import { TextButton } from 'gleam-ui-react'

const Navbar = () => {

  return (
    <div>
      <Link to='/'><TextButton label='Home'></TextButton></Link>
      <Link to='/Buttons'><TextButton label='Buttons'></TextButton></Link>
    </div>
  )
}

export default Navbar
