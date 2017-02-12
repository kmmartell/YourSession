/**
 * @author K.M. Martell
 * @description Display a list of all sessions
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, ListItem } from 'react-native-material-ui';
import { connect } from 'react-redux';
import _ from 'lodash'; //manipulation for objects/arrays
import * as actions from '../actions';

class SessionList extends Component{
  componentWillMount(){
    this.props.fetchSessions();
  }
  renderItems(){
    return this.props.sessions.map((s)=>{
      return   <ListItem key="s.id" centerElement={{
          primaryText:s.name,
          secondaryText:`asdf`
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
  const sessions = _.map(state.sessions.all, (session, uid) => {
    { return { ...session, uid }; };
  })
  return { sessions };
}

export default connect(mapStateToProps, actions)(SessionList);
