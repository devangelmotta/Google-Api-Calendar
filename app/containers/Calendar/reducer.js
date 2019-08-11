

import produce from 'immer';
import { LOAD_CALENDAR, LOAD_CALENDAR_SUCESS, LOAD_CALENDAR_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  eventsData: false
}

/* eslint-disable default-case, no-param-reassign */
const calendarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CALENDAR:
        draft.loading = true;
        draft.error = false;
        draft.eventsData = false;
        break;

      case LOAD_CALENDAR_SUCESS:
        draft.eventsData = action.data;
        draft.loading = false;
        break;

      case LOAD_CALENDAR_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default calendarReducer;
