/**
 *
 * CardEvent
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


const CustomCard = styled(Card)({
  background:'#000',
  border: 1,
  borderRadius: 25,
  boxShadow: '0 3px 5px 2px #fff',
  height: 200,
  padding: '0 30px'
});


export default CustomCard;

