/**
 * @author Kayla Martell
 * @desc Display the common fields between session edit and create
 */

import React, { Component } from 'React';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card } from 'react-native-material-ui';
import { Input, Section } from '../../common';
import * as actions from '../actions';

class SessionForm extends Component{
  render(){
    const { name, notes } = this.props;
    return (
      <View>
        <Section>
          <Input
            label="Session Name"
            placeholder="Trad on Fridays"
            value={name}
            onChangeText={value => this.props.updateSession({ prop: 'name', value })}
          />
        </Section>
        <Section>

          <Input
            label="Notes"
            placeholder="Fancy dancy notes..."
            multiline ={true}
            value={notes}
            onChangeText = { value => this.props.updateSession( { prop: 'notes', value} ) }
          />

        </Section>

      </View>

    );
  }

}

const mapStateToProps = state => {
  const { name, notes } = state.sessions.selected;
  return { name, notes };
}

export default connect(mapStateToProps, actions)(SessionForm);
