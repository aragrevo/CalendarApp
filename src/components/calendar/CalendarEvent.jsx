import React from 'react';
import moment from 'moment';

export const CalendarEvent = ({ event }) => {
  const { title, user, start, end, notes } = event;
  const momentStart = moment(start);
  const momentEnd = moment(end);
  const duration = moment.duration(momentEnd.diff(momentStart)).asHours();
  return (
    <div>
      <div className='rbc-event-content'>
        {title} - {Math.round(duration)}
      </div>
      <span className='rbc-event-label pt-2' style={{ whiteSpace: 'normal' }}>
        {notes}
      </span>
    </div>
  );
};
