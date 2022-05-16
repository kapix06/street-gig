import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard({ title, _id }) {
	return (
		<div>
			<Link to={`/events/${_id}`}>
				<h3>{title}</h3>
			</Link>
		</div>
	)
}
