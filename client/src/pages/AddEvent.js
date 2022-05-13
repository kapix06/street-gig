import axios from 'axios'
import React, { useState } from 'react'




export default function AddEvent(props) {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [address, setAddress] = useState('')
	const [date, setDate] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		// send the form data to the backend
		axios.post('/api/events', { title, description })
			.then(response => {
				console.log(response)
				// reset the form
				setTitle('')
				setDescription('')
				// refresh the list of projects in 'ProjectsList'
				props.getAllEvents()
			})
			.catch(err => console.log(err))
	}

	return (
		<div className='AddPage'>
			<h1>Add a GIG</h1>
			<form className="AddGig" onSubmit={handleSubmit}>
				<input className="gig"
					type="text"
					placeholder='...Title...'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			
			    <input className="gig"
					type="text"
					placeholder='...date...'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>

                <input className="gig"
					type="text"
					placeholder='...Address...'
					value={address}
					onChange={e => setAddress(e.target.value)}
				/>


<label className="signup" for="genre">Choose a type:</label>
<select name="genre" id="genre">
 
    <option value="Big Bass">Big Bass</option>
    <option value="Guitare">Guitare</option>
	<option value="Lets Dance">Lets Dance</option>
	<option value="Sing along">Sing along</option>
	<option value="Peaceful">Peaceful</option>
	<option value="I like Drums !">I like Drums !</option>
	<option value="Elektro">Elektro</option>
  
</select>

                <textarea className="gig"
					type="text"
					placeholder='...Description...'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<button type="submit">Add your Concert ➕</button>
			</form>
		</div>
	)
}
