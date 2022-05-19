import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard({ title, _id, imageUrl, address, date, genre}) {



	return (
		<div className="AddGig ">
		<div className='EventCard'>
			<Link to={`/events/${_id}`}>
				<h3>{title}</h3>
			</Link>
			<div className='insideCard'>
            <p> <strong >WHERE ?</strong></p>
			<p> {address}</p>
            <p> <strong>WHEN ?</strong> </p>
			<p>{date.slice(0, 10).split('-').reverse().join('/')}</p>
            <p> <strong>WHAT ?</strong> </p>
			<p>{genre}</p>

			</div>
            
            <img src={imageUrl} alt="empty" style={{ position: 200, borderRadius: 20,resizeMode: "contain", height: 150,
            width: 240}} />
		</div>
		</div>
	)
}
