import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth';





export default function EditUserDetails(props) {

console.log(props.user?._id)

const navigate = useNavigate()

const { user } = useContext(AuthContext)



const [location, setLocation] = useState('')
const [description, setDescription] = useState('')
const [name, setName] = useState('')

const API_URL = "http://localhost:5005";

const handleSubmit = e => {
    e.preventDefault()
    const requestBody = { location, description, name }
    // put request to the backend to update the project
    axios.put(`/api/user/${props.user?._id}`, requestBody)
        .then((updatedUser) => {
            console.log('updatedUser', updatedUser);
            props.getCurrentUser()
            // redirect to the project list
           // navigate(`/userpage/${user._id}`)
           props.setChanges(!props.changes)
        })
        .catch(err => console.log(err))
}



return (
    <div className='AddPage'>
        <h1>Add a GIG</h1>

<form className="AddGig" onSubmit={handleSubmit}>

<input className="gig"
    type="text"
    placeholder='...username...'
    value={name}
    onChange={e => setName(e.target.value)}
/>

	<input className="gig"
    type="text"
    placeholder='...location...'
    value={location}
    onChange={e => setLocation(e.target.value)}
/>

<textarea className="gig"
   type="text"
   placeholder='...About me...'
   value={description}
    onChange={e => setDescription(e.target.value)}
/>

<button type="submit">Update my Profile</button>

</form>

</div>
)
}