import React from 'react'
import { Link } from 'react-router-dom'


export default function EventCard({ title, _id, imageUrl, address, date, genre}) {



	return (
		<div >
		<div className='EventCard2'>
			<Link to={`/events/${_id}`}>
				<h3>{title}</h3>
			</Link>
			<div className='insideCard2'>
            <p> <strong >WHERE ?</strong></p>
			<p> {address}</p>

			</div>
            
            <img src={imageUrl} alt="empty" style={{ borderRadius: 20,resizeMode: "contain", height: 125,
            width: 215}} />
		</div>
		</div>
	)
}
