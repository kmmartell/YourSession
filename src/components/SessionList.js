/**
 * @author K.M. Martell
 * @description Display a list of all sessions
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, ListItem } from 'react-native-material-ui';

class SessionList extends Component{
  render(){
    return (
      <View>
      <ListItem centerElement={{
        primaryText: 'Trad',
        secondaryText: 'Top Favourites'
      }}
      />
      <ListItem centerElement={{
        primaryText: 'Busking',
        secondaryText: 'Popular songs'
      }}
      />
      <ListItem centerElement={{
        primaryText: 'Irish Trad Mix',
        secondaryText: 'A little out there'
      }}
      />
      </View>
  );
  }

}

export default SessionList;
