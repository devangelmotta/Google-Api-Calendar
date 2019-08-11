/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, {  memo, useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import Calendar from 'containers/Calendar';

import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ApiCalendar from 'react-google-calendar-api';
const key = 'home';
var intervalValidation;
var count = 0;


function handleItemClick(name){
  if (name === 'sign-in') {
    ApiCalendar.handleAuthClick();
  } else if (name === 'sign-out') {
    ApiCalendar.handleSignoutClick( ()=> console.log('Hola Close'));
  }
}


export function HomePage({
  username,
  loading,
  error, 
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [statusLoginCalendar, stateCalendarLogin] = useState(false);
  const [statusLoginRepository, stateRepositoryLogin] = useState(false);

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>Hellobuild</title>
        <meta
          name="description"
          content="Example App React"
        />
      </Helmet>   
      <div>  

        <Section>
              <button

              onClick={(e) => handleItemClick('sign-out')}
          >
            sign-out
          </button>
          :
          <button
                  onClick={(e) => handleItemClick('sign-in')}
              >
                sign-in
              </button>
        
              


        </Section>
        <Section>
          <Calendar/>
        </Section>

      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
