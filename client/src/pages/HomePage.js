import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import Buttons from './components/Buttons';


export default function HomePage() {

	const [date, setDate] = useState(new Date());

console.log(date)
	return (
		<div className="concert">
   
			
			
<div className='calendar-container'>
			<h2>Pick a day ; </h2>
			<div className='calendar'>
			<Calendar onChange={setDate} value={date} />
			</div>
		 
			
</div>

		</div>
	)
}