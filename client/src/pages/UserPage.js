import { Link, useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails.js";
import EditUserDetails from "../components/EditUserDetails.js";
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { AuthContext } from "../context/auth.js";
import EventsList from "../components/EventsList.js";


function UserPage() {

	const { id } = useParams()
	const [currentUser, setCurrentUser] = useState(null)

	const [changes, setChanges] = useState(false)

	

	

	const getCurrentUser = () => {
		axios.get(`/api/user/${id}`)
			.then(response => {
				console.log(response)
				setCurrentUser(response.data)
				console.log('res', response.data);
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getCurrentUser()
	}, [])

	return (
		<>
			<div >

<div>
			{changes&& <EditUserDetails
			        setChanges = {setChanges}
					changes = {changes}
					user={currentUser}
					setUser={setCurrentUser}
					getCurrentUser={getCurrentUser}
				/> 
				
			 }
</div>

<div className="userpage">
			<button onClick={() => setChanges(!changes)}>Edit my profile !</button>
			<div className="userdetails">
				<UserDetails user={currentUser} />
                 </div>
				<Link to="/AddEvent"><button className="primary-button">Create your event</button></Link>

				<EventsList />
				
				</div>
				</div>


		</>
	)
}

export default UserPage;