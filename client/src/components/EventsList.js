import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import { Link } from 'react-router-dom'



export default function EventsList (props) {

    console.log(props)



	return (
		<div className="EventsDetails">
			<h1>All Events</h1>
			{props.events?.map(event => <EventCard key={event._id} {...event} />)}
			
		</div>
	)
}
