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
			{isLoggedIn ?
				(
					<>
						<Link to='/allevents'>
							<button className="btn btn-outline-light">Events</button>
						</Link>
						<button className="btn btn-outline-light" onClick={logoutUser}>Log out</button>
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
