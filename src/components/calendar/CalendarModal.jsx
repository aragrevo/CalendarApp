import React, { useEffect, useState } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { uiCloseModal, uiOpenModal } from '../../redux/actions/ui.actions';

const initialValidate = { title: true, date: true, dates: true };

export const CalendarModal = () => {
  const dispatch = useDispatch();
  const [formValid, setFormValid] = useState(initialValidate);
  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    date: '',
  });

  const { notes, title, date } = formValues;

  useEffect(() => {
    const calendars = bulmaCalendar.attach('[type="date"]', {
      isRange: true,
      allowSameDayRange: true,
      displayMode: 'dialog',
      type: 'datetime',
      labelFrom: 'Start Date',
      labelTo: 'End Date',
      onValidate: handleValidate,
      startDate: date.start || '',
      endDate: date.end || '',
    });
  }, []);

  const handleClose = () => {
    dispatch(uiCloseModal());
  };

  const handleValidate = ({ data }) => {
    const { start, end } = data.datePicker.date;
    console.log(start, end);
    setFormValues((fv) => ({
      ...fv,
      date: data.datePicker.date,
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
    if (!date || !date.start || !date.end) {
      return setFormValid((valid) => ({ ...valid, date: false }));
    }

    const momentStart = moment(date.start);
    const momentEnd = moment(date.end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return setFormValid((valid) => ({ ...valid, dates: false }));
    }

    if (title.trim().length < 2) {
      return setFormValid((valid) => ({ ...valid, title: false }));
    }
  };

  return (
    <div className='modal' id='modal'>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <form className='box' onSubmit={handleSubmit}>
          <p className='title'>New Event</p>
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
