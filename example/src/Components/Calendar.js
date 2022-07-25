import '../Components/Calendar.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Images from './Header';
import Image from './Footer';


const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Preeti's Wedding",
    allDay: true,
    start: new Date(2022, 7, 4),
    end: new Date(2022, 7, 7)
  },
  {
    title: "Garba Night",
    start: new Date(2022, 7, 5),
    end: new Date(2022, 7, 5)
  },
  {
    title: "Reception",
    start: new Date(2022, 7, 6),
    end: new Date(2022, 7, 6)
  },
];


function Cal() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [oldEvent, setOldEvents] = useState({title: null, start: null, end: null});

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  function handleDeleteEvent() {
    setAllEvents([...allEvents, oldEvent]);
  }

  return (
    <div className='cal'>
      <div className='pad'>
      <div><Images/></div>
      <h1> Event Calendar </h1>
      <h2> Add New Event </h2>
      <br/>
      <div>
        <input type="text" placeholder="Add Title" style={{ width: "20%", marginleft: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker placeholderText="Start Date" style={{ marginleft: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ marginTop: "10px" }} onClick={handleDeleteEvent}>
          Delete Event
        </button>

      </div>
      <Calendar localizer={localizer} events={allEvents}
        startAccessor="start" endAccessor="end"
        style={{ height: 500, margin: "50px" }} />
    <Image /></div></div>
  );
};

export default Cal;
