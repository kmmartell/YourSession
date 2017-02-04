/**
 * @author K.M. Martell
 * @description App-wide toolbar
 */

import React from 'react';
import { Toolbar } from 'react-native-material-ui';


const YourToolbar = ({ title }) => {
  return (
    <Toolbar
       centerElement={title}
     />
  )
}

export { YourToolbar };
