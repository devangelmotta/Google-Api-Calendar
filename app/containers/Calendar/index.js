/**
 *
 * Calendar
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ApiCalendar from 'react-google-calendar-api';
import { getItemDate, getFullDay, getFullHour} from '../../utils/parseDate';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCalendar from './selectors';
import { loadCalendar } from './actions'
import reducer from './reducer';
import saga from './saga';
import { month } from './constants'
import CardEvent from 'components/CardEvent';
import Title from 'components/CardEvent/titleEvent';
import SecondaryText from 'components/CardEvent/secondaryText';
import Link from 'components/CardEvent/IconLink';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Icon, {colorPalette} from 'material-icons-react';
import './index.css'
import messages from './messages';
var intervalValidation;
export function Calendar({
  loadEvents,
  calendar
}) {
  useInjectReducer({ key: 'calendar', reducer });
  useInjectSaga({ key: 'calendar', saga });
  
  const [statusLoginCalendar, stateCalendarLogin] = useState(false);

  useEffect(() => {
    function listennerForClearInterval(){
      if(ApiCalendar.sign) {
        loadEvents()
        clearInterval(intervalValidation)
      }else{
        console.log('Sign: ', ApiCalendar.sign)
      }
    }

    function checkLogin(){
      intervalValidation = setInterval(listennerForClearInterval, 1000);
    }    
    checkLogin()
  }, []);

  return (
    <div>
      {calendar.eventsData ? console.log("de Screen Calendar para el mundo ", calendar) :
  console.log("Sin datos ", calendar)
}
      {calendar.eventsData &&  calendar.eventsData.result.items.length>0 ? calendar.eventsData.result.items.map((item, index)=>{
        return (
        <CardEvent key={Math.random()}>

          
        </CardEvent>)
      }): <p>No habemus data</p>}
    </div>
  );
}

Calendar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  calendar: makeSelectCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadEvents: () => dispatch(loadCalendar())

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Calendar);
