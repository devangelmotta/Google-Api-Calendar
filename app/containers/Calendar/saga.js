/**
 * Gets alls future events
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CALENDAR } from './constants';
import { calendarLoaded, calendarLoadingError } from './actions';
import ApiCalendar from 'react-google-calendar-api';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getCalendarEvents() {

  try {
    if (ApiCalendar.sign) var data = yield ApiCalendar.listUpcomingEvents(10)
    yield put(calendarLoaded(data))

  } catch (err) {
    yield put(calendarLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* googleCalendar() {

  yield takeLatest(LOAD_CALENDAR, getCalendarEvents);
}
