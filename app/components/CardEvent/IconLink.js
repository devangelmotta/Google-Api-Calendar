import React, { memo } from 'react';
import styled from 'styled-components';
import NormalA from 'components/A';

const IconLink = styled(NormalA)`
  ::hover:{
  	color: blue
  }
`;

export default IconLink;