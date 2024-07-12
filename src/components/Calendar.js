import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const events = [
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(moment().add(1, 'hour').toDate())
    }
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Calendar
      </Typography>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
