import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer( moment );

const events = [{
  title: 'Cumpleanos del Jefe',
  start: moment().toDate(),
  end: moment().add( 2, 'hours' ).toDate(),
  bgColor: '#fafafa'
}];

export const CalendarScreen = () => {
  return (
    <div>

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
