/**
 * @author Kayla Martell
 * @desc Display the common fields between session edit and create
 */

import React, { Component } from 'React';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import * as actions from '../actions';

class SessionForm extends Component{
  render(){
    return (
      <View>
        <Text>Session Form</Text>
      </View>

    );
  }

}

const mapStateToProps = state => {
  const { name } = state.session;
  return { name };
}

export default connect(mapStateToProps, actions)(SessionForm);
