import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Link className="link" to="/">Home</Link> | <Link className="link" to="/contact">Contact</Link>
    </>
  )
}

export default Header