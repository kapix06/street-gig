import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect} from 'react'
import axios from 'axios'
import EventHome from '../components/EventHome';

//import Buttons from './components/Buttons';


export default function HomePage() {

	const [date, setDate] = useState(new Date());
	const [genreFilter, setGenreFIlter] =useState("")
	const [events, setEvents] = useState([])

	//console.log(date)

	const handleChange = event => {
		setGenreFIlter(event.target.value)
	}


	let filtered = events.filter(events => {
	
	if (genreFilter==="Guitare"){ return events.genre.includes("Guitare") }
	if (genreFilter==="Lets Dance"){ return events.genre.includes("Lets Dance") }
	if (genreFilter==="Sing along"){ return events.genre.includes("Sing along")}
	if (genreFilter==="Peaceful"){return events.genre.includes("Peaceful")}
	if (genreFilter==="I like Drums !"){return events.genre.includes("I like Drums !")}
	if (genreFilter==="Elektro"){return events.genre.includes("Elektro")}
	if (genreFilter==="all") {return events.genre}
	else {return events}

})

filtered = filtered.filter(event => {

	let convertedDate = event.date.slice(0, 10).split('-').reverse().join('/')


	console.log(date.toLocaleDateString(), event.date.slice(0, 10).split('-').reverse().join('/'))
	 if ( date.toLocaleDateString() === convertedDate) {
		console.log('doesnt matter')
		
		return event
	}
})
console.log(filtered)


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
		<div className="concert">
   
			
			
<div className='calendar-container'>
			<h2>pick a date </h2>
			<div className='calendar'>
			<Calendar onChange={setDate} value={date} />
			</div>
		 		
</div>

<div className='searchbuttonscool'>

			<button className="searchButtons" value="Guitare" onClick={handleChange}>Guitare</button>
			<button className="searchButtons" value="Lets Dance" onClick={handleChange}>Dance</button>
			<button className="searchButtons" value="Sing along" onClick={handleChange}>Sing</button>
			<button className="searchButtons" value="Peaceful" onClick={handleChange}>Peaceful</button>
			<button className="searchButtons" value="I like Drums !" onClick={handleChange}>Drums</button>
			<button className="searchButtons" value="Elektro" onClick={handleChange}>Elektro</button>
</div>

<div className="EventDetailshome">


		{ filtered.map(filteredEvents => <EventHome key={filteredEvents._id} {...filteredEvents} />)}
		
	    </div>

		</div>
	)
}