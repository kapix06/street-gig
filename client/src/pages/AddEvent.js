import React, { useState, useContext } from 'react';
import service from "../api/service";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth';
import axios from "axios";

export default function AddEvent(props) {

	const navigate = useNavigate()

	const { user } = useContext(AuthContext)

	const [imageUrl, setImageUrl] = useState("")
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [address, setAddress] = useState('')
	const [date, setDate] = useState(undefined)
	const [genre, setGenre] = useState('')

	

	const handleFileUpload = e => {
		// console.log("The file to be uploaded is: ", e.target.files[0]);
	 
		const uploadData = new FormData();
	 
		// imageUrl => this name has to be the same as in the model since we pass
		// req.body to .create() method when creating a new movie in '/api/movies' POST route
		uploadData.append("imageUrl", e.target.files[0]);
	 
		service
		  .uploadImage(uploadData)
		  .then(response => {
			// console.log("response is: ", response);
			// response carries "secure_url" which we can use to update the state
			setImageUrl(response.secure_url);
		  })
		  .catch(err => console.log("Error while uploading the file: ", err));
	  };	
	

	const handleSubmit = e => {
		e.preventDefault()
		// send the form data to the backend
		service
		.addEvent ({ title, description, address, date, genre, imageUrl , user})
		.then(res => {
			// console.log("added new movie: ", res);
				setTitle('')
				setDescription('')
				setAddress('')
				setDate(undefined)
				setImageUrl("")
				setGenre('')



        // here you would redirect to some other page   
		navigate(`/userpage/${user._id}`)
		     

      })
      .catch(err => console.log("Error while adding the new concert: ", err));
  };

	return (
		<div className='AddPage'>
			<h1>Add a GIG</h1>


			<form className="AddGig" onSubmit={handleSubmit}>
		

<label>Upload a Picture *</label>
        <input type="file"  onChange={(e) => handleFileUpload(e)} />
        {/* <input type="file" onChange={(e) => handleFileUpload(e)} />
        <input type="file" onChange={(e) => handleFileUpload(e)} /> */}


				<input className="gig"
					type="text"
					placeholder='...Title...'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			
			    <input className="gig"
					type="date"
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


<label className="genre" htmlFor="genre">Choose a type:</label>
<select name="genre" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
 
    <option color= 'black' value="Big Bass">Big Bass</option>
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
			<button className="gig" type="submit">Add your Concert ➕</button>
				
	
			</form>
		</div>
	)
}
