import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../shared/Navbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarModal } from './CalendarModal';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Cumple',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
  },
];

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const onDoubleClick = (e) => {
    document.querySelector('#root').classList.add('is-clipped');
    document.querySelector('#modal').classList.add('is-active');
  };

  return (
    <div>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: '90vh' }}
        onView={onViewChange}
        view={lastView}
        onDoubleClickEvent={onDoubleClick}
      />
      <CalendarModal />
    </div>
  );
};
