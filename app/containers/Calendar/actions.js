

import { LOAD_CALENDAR, LOAD_CALENDAR_SUCESS, LOAD_CALENDAR_ERROR } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadCalendar() {
  console.log("Entry load calendar")
  return {
    type: LOAD_CALENDAR,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function calendarLoaded(data) {
  return {
    type: LOAD_CALENDAR_SUCESS,
    data
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function calendarLoadingError(error) {
  return {
    type: LOAD_CALENDAR_ERROR,
    error,
  };
}