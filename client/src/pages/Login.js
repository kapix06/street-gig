import React, { useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

const API_URL = "http://localhost:5005";

export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate()

	const { storeToken, verifyStoredToken } = useContext(AuthContext)



	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }
		axios.post(`/api/auth/login`, requestBody)
			.then(response => {
				// redirect to projects
				//console.log('USER: ', response.data)
				const token = response.data.authToken
				const user = response.data.foundUser
				//console.log(user, "merde fait chier" )
				// store the token	
				storeToken(token)
				verifyStoredToken()									
					.then(() => {
						// redirect to logged UserPage
						console.log('USER: BLABLA', user)
						navigate(`/userpage/${user._id}`)
					})
			})
			.catch(err => {
				//const errorDescription = err.response.data.message
				//setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)


	return (

	
		<div className="concert">
			<h1>Login</h1>
			<form className="auth" onSubmit={handleSubmit}>

				<label className="signup" htmlFor="email">Email: </label>
				<input className="signup" type="text" value={email} onChange={handleEmail} />

				<label className="signup" htmlFor="password">Password: </label>
				<input className="signup" type="password" value={password} onChange={handlePassword} />

				<button className ="login" type="submit">Log In</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}

			<h3>Don't have an account?</h3>
			<Link to='/signup'>Signup</Link>
		</div>
	
	)
}