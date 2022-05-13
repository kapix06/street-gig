import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const API_URL = "http://localhost:5005";


export default function Signup() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password, name }
		axios.post(`${API_URL}/auth/signup`, requestBody)
			.then(response => {
				// redirect to login
				navigate('/login')
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setName(e.target.value)
	const handlePassword = e => setPassword(e.target.value)


	return (
		<div className="concert">
			<h1>Signup</h1>
			<form className="auth" onSubmit={handleSubmit}>

				<label className="signup" htmlFor="email">Email: </label>
				<input className="signup" type="text" value={email} onChange={handleEmail} />

				<label className="signup" htmlFor="password">Password: </label>
				<input className="signup" type="password" value={password} onChange={handlePassword} />

				<label className="signup" htmlFor="name">Name: </label>
				<input className="signup" type="text" value={name} onChange={handleName} />

				<button className ="login" type="submit">Sign Up</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}

			<h3>Already have an account?</h3>
			<Link to='/login'>Login</Link>
		</div>
	)
}