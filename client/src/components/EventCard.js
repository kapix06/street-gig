import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard({ title, description, _id, imageUrl, address, date, genre}) {
	return (
		<div className="AddGig ">
		<div className='EventCard'>
			<Link to={`/events/${_id}`}>
				<h3>{title}</h3>
			</Link>
            <p> where?  {address}</p>
            <p> when ? {date}</p>
            <p> what ? {genre}</p>
            <p style={{ maxWidth: "400px" }}>{description} </p>
            <img src={imageUrl} alt="empty" style={{ position: 50, borderRadius: 20,resizeMode: "contain", height: 150,
            width: 250}} />
		</div>
		</div>
	)
}
