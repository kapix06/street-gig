import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function Navbar() {

	const { isLoggedIn, logoutUser } = useContext(AuthContext)

	return (
		<nav className='Navbar'>

			<Link to='/'>
				<button className="btn btn-outline-light">Home</button>
			</Link>
			<Link to='/allevents'>
				<button className="btn btn-outline-light">Events</button>
			</Link>
			{isLoggedIn ?
				(
					<>
						
						<Link to='/'>
						<button className="btn btn-outline-light" onClick={logoutUser}>Log out</button>
						</Link>
					</>
				) : (
					<>
						<Link to='/signup'>
							<button className="btn btn-outline-light">Signup</button>
						</Link>
						<Link to='/login'>
							<button className="btn btn-outline-light">Login</button>
						</Link>
					</>
				)
			}
			
		</nav>
	)
}
