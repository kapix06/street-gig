import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import AddEvent from './AddEvent'

const API_URL = "http://localhost:5005";

export default function ProjectList() {

	const [events, setEvents] = useState([])

	const storedToken = localStorage.getItem('authToken')


	const getAllEvents = () => {
		axios.get(`${API_URL}/events`, { headers: { Authorization: `Bearer ${storedToken}` } })
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
		<>
			<h1>All Events</h1>
			{events.map(event => <EventCard key={event._id} {...event} />)}
			<AddEvent getAllEvents={getAllEvents} />
		</>
	)
}
