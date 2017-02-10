/**
 * @author K.M. Martell
 * @description Display a list of all sessions
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, ListItem } from 'react-native-material-ui';
import { connect } from 'react-redux';

class SessionList extends Component{
  renderItems(){
    return this.props.sessions.map((s)=>{
      return   <ListItem key="s.id" centerElement={{
          primaryText:s.title,
          secondaryText:`${s.number_of_songs} songs`
        }}
        />
    })
  }
  render(){
    return (
      <View>
          { this.renderItems() }
      </View>
  );
  }

}

function mapStateToProps(state){
  return {
    'sessions': state.sessions
  };
}

export default connect(mapStateToProps)(SessionList);
