import { Link } from "react-router-dom";
import UserDetails from "../components/UserDetails.js";
import EditUserDetails from "../components/EditUserDetails.js";
import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

function UserPage() {

const { id } = useParams()
const [user, setUser] = useState(null)   

	useEffect(() => {
		axios.get(`${API_URL}/user/${id}`)
			.then(response => {
				console.log(response)
				setUser(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
        <>
        <div >
            <UserDetails user={user}/>
            <EditUserDetails user={user}/>
            <Link to="/AddEvent"><button className="primary-button">Create your event</button></Link>
        </div>

     
       </>
	)
}

export default UserPage;