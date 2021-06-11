import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { uiCloseModal } from '../../redux/actions/ui.actions';
import {
  eventClearActiveEvent,
  eventStartAddNew,
  eventStartUpdate,
} from '../../redux/actions/calendar.actions';

import 'bulma-calendar/dist/css/bulma-calendar.min.css';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';

const initialValidate = { title: true, date: true, dates: true };
const initEvent = {
  title: '',
  notes: '',
  start: '',
  end: '',
};

//TODO set hours on select
export const CalendarModal = () => {
  const dispatch = useDispatch();
  const { activeEvent } = useSelector((state) => state.calendar);

  const [formValid, setFormValid] = useState(initialValidate);
  const [formValues, setFormValues] = useState(initEvent);

  const { notes, title, start, end } = formValues;

  // useEffect(() => {
  //   const calendars = bulmaCalendar.attach('[type="date"]', {
  //     isRange: true,
  //     allowSameDayRange: true,
  //     displayMode: 'dialog',
  //     type: 'datetime',
  //     labelFrom: 'Start Date',
  //     labelTo: 'End Date',
  //     onValidate: handleValidate,
  //     startDate: start || '',
  //     endDate: end || '',
  //   });
  // }, []);

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
    const calendars = bulmaCalendar.attach('[type="date"]', {
      isRange: true,
      allowSameDayRange: true,
      displayMode: 'dialog',
      type: 'datetime',
      labelFrom: 'Start Date',
      labelTo: 'End Date',
      onValidate: handleValidate,
      startDate: start || '',
      endDate: end || '',
    });
  }, [activeEvent, setFormValues]);

  const handleClose = () => {
    dispatch(uiCloseModal());
    dispatch(eventClearActiveEvent());
    setFormValues(initEvent);
  };

  const handleValidate = ({ data }) => {
    const { start, end } = data.datePicker.date;
    setFormValues((fv) => ({
      ...fv,
      start,
      end,
    }));
    data.save();
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValid(initialValidate);
    if (!start || !end) {
      return setFormValid((valid) => ({ ...valid, date: false }));
    }

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return setFormValid((valid) => ({ ...valid, dates: false }));
    }

    if (title.trim().length < 2) {
      return setFormValid((valid) => ({ ...valid, title: false }));
    }
    dispatch(uiCloseModal());

    if (activeEvent) {
      dispatch(eventStartUpdate(formValues));
      return;
    }

    dispatch(eventStartAddNew(formValues));
  };

  return (
    <div className='modal' id='modal'>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <form className='box' onSubmit={handleSubmit}>
          <p className='title'>{activeEvent ? 'Edit Event' : 'New Event'}</p>
          <div className='field'>
            <label className='label'>Range</label>
            <div className='control'>
              <input id='dob' type='date' />
            </div>
            {!formValid.date && (
              <p className='help is-danger'>The date is required</p>
            )}
            {!formValid.dates && (
              <p className='help is-danger'>
                The end date most be higher than start date
              </p>
            )}
          </div>
          <div className='field'>
            <label className='label'>Title</label>
            <div className='control has-icons-right'>
              <input
                className={`input  ${!formValid.title && 'is-danger'}`}
                type='text'
                placeholder="Event's Title"
                autoComplete='off'
                name='title'
                value={title}
                onChange={handleInputChange}
              />
              {!formValid.title && (
                <span className='icon is-small is-right'>
                  <i className='fas fa-exclamation-triangle'></i>
                </span>
              )}
            </div>
            {!formValid.title && (
              <p className='help is-danger'>The title is required</p>
            )}
          </div>

          <div className='field'>
            <label className='label'>A little description</label>
            <div className='control'>
              <textarea
                className='textarea'
                placeholder='Notes'
                rows='3'
                name='notes'
                value={notes}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <button className='button is-primary'>Save changes</button>
        </form>
      </div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={handleClose}
      ></button>
    </div>
  );
};
