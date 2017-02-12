import React, { Component } from 'React';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Subheader } from 'react-native-material-ui';
import { Section, Button } from '../../common';
import { SongForm } from './SongForm';
import * as actions from '../actions';

class SongCreate extends Component {
  render() {
    return (
      <View>
        <SongForm />
        <Section>
          <Button>Create</Button>
          <Button>Cancel</Button>
        </Section>
      </View>
    );
  }

}

const mapStateToProps = state => {
  const { name, notes } = state.songs.selected;
  return { name, notes };
}


export default connect(mapStateToProps, actions)(SongCreate);
