import './Navbar.css'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar () {
	return (
	<nav className='nav'>
    <div className='links'>
      <Link to="/about">About</Link>
      <Link to="/music">Our Music</Link>
      <Link to="/donate">Donate</Link>
    </div>
    <Outlet />
  </nav>
	)
}
