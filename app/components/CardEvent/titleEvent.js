import React, { memo } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Typography from '@material-ui/core/Typography';
import { fontSize } from '@material-ui/system';

const CustomText = styled.h1`
  color: ${props => props.color || 'blue'};
  font-size: ${props => props.size || '20px' };
  font-weight: ${props => props.wht || 100 }
  `

  export default CustomText;
  