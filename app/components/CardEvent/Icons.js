import React, { memo } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const Icon = styled(MaterialIcon)`

  ::hover {
  color: blue;
}
  `

  export default Icon;