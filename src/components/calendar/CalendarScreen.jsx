import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../shared/Navbar';

import { uiOpenModal } from '../../redux/actions/ui.actions';
import {
  eventClearActiveEvent,
  eventSetActive,
  eventStartDelete,
  eventStartLoading,
} from '../../redux/actions/calendar.actions';

import { CalendarModal } from './CalendarModal';
import { FabButton } from '../shared/FabButton';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onSelectSlot = (e) => {
    console.log(e);
    dispatch(eventClearActiveEvent());
    if (e.action == 'select') {
      dispatch(uiOpenModal());
    }
  };

  const handleNew = () => {
    dispatch(uiOpenModal());
  };

  const handleDelete = () => {
    dispatch(eventStartDelete());
  };

  return (
    <div>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: '85vh' }}
        onView={onViewChange}
        view={lastView}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        selectable={true}
      />
      {!activeEvent && (
        <FabButton color='success' icon='plus' handleAction={handleNew} />
      )}
      {activeEvent && (
        <FabButton color='danger' icon='trash' handleAction={handleDelete} />
      )}
      <CalendarModal />
    </div>
  );
};
