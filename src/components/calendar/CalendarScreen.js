import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer( moment );

const events = [{
  title: 'Cumpleanos del Jefe',
  start: moment().toDate(),
  end: moment().add( 2, 'hours' ).toDate(),
  bgColor: '#fafafa'
}];

export const CalendarScreen = () => {
  return (
    <div className="calendar-screen">

      <Navbar />

      <Calendar 
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
      />
      
    </div>
  )
}