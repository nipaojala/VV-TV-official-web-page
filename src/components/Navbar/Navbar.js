import './Navbar.css'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar () {
	return (
	<nav className='nav'>
      <Link to="/about">About</Link>
      <Link to="/music">Our Music</Link>
      <Link to="/gigs">Gigs</Link>
      <Link to="/donate">Donate</Link>
    <Outlet />
  </nav>
	)
}
