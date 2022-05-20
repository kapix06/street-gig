import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


export default function EventsDetails() {

	const { id } = useParams()

	const [event, setEvent] = useState(null)

	useEffect(() => {
		axios.get(`/api/events/${id}`)
			.then(response => {
				console.log(response)
				setEvent(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
		<div className="EventDetails2">
			{event === null ? <h3>Loading...</h3> :
			
				<>
					<h1>Event Details</h1>
					
					<img src={event.imageUrl} alt="empty" height={200}  width={380} />
					<h3>{event.title}</h3>
					<h3>{event.address}</h3>
					<h3>{event.date}</h3>
					<h5>{event.description}</h5>
					
					<Link to="/"><button className="primary-button">Go BACK</button></Link>
				</>
				
			}
			</div>
		</>
	)
}
