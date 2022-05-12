import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function HomePage() {

	const [date, setDate] = useState(new Date());

console.log(date)
	return (
		<div className="concert">
   
			<h1>Home Page 🦄 🌈</h1>
			
			<div className='calendar-container'>
			<h2>Find a Free Concert in Berlin 🦄 !!! </h2>
			<div className='calendar'>
			<Calendar onChange={setDate} value={date} />
			</div>
</div>

		</div>
	)
}