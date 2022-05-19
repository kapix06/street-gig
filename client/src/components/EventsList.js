import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'



export default function EventsList (props) {

	const [events, setEvents] = useState([])

	const { user } = useContext(AuthContext)
	

	const filtered = events.filter(event => {return ( user?._id === event.owner) })
	


	const getAllEvents = () => {
        axios.get('/api/events')
			.then(response => {
				console.log(response)
				setEvents(response.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		// get all the projects from the server
		getAllEvents()
	}, [])




	return (
<div className="EventDetails">


		{ filtered.map(filteredEvent => <EventCard key={filteredEvent._id} {...filteredEvent} />)}
		
	    </div>
	
	)
}
