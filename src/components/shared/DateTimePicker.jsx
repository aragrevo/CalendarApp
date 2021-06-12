import React, { useEffect } from 'react';

import 'bulma-calendar/dist/css/bulma-calendar.min.css';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';

export const DateTimePicker = ({ start, end, validate }) => {
  const renderDatePicker = () => {
    const calendars = bulmaCalendar.attach('[type="date"]', {
      isRange: true,
      allowSameDayRange: true,
      displayMode: 'dialog',
      type: 'datetime',
      labelFrom: 'Start Date',
      labelTo: 'End Date',
      onValidate: validate,
    });
  };
  useEffect(() => {
    renderDatePicker();
  }, []);
  useEffect(() => {
    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#dob');
    if (element) {
      element.bulmaCalendar.startDate = start;
      element.bulmaCalendar.startTime = start;
      element.bulmaCalendar.endDate = end;
      element.bulmaCalendar.endTime = end;
      element.bulmaCalendar.save();
      element.bulmaCalendar.refresh();
    }
  }, [start, end]);

  return (
    <div>
      <label className='label'>Range</label>
      <input id='dob' type='date' />
    </div>
  );
};
