import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import { Link } from 'react-router-dom'



export default function AllEvents() {

	const [events, setEvents] = useState([])



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
			
			{events.map(event => <EventCard key={event._id} {...event} />)}
			<Link to="/addEvent">Add a Project</Link>
		</div>
	)
}
