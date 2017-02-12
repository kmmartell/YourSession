/**
 * @author Kayla Martell
 * @desc Ability to create sessions
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card , Subheader, Button} from 'react-native-material-ui';
import { Section } from '../../common';
import { SessionForm } from './SessionForm';

class SessionCreate extends Component {

  render(){
    return(
        <View>
          <Subheader text="Create A New Session" />
          <SessionForm />
          <Section>
              <Button>Create</Button>
              <Button>Cancel</Button>
          </Section>
        </View>
    );
  }
}

export default SessionCreate;
