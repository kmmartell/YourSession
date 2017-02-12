import React, { Component } from 'React';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Subheader } from 'react-native-material-ui';
import { Section, Button } from '../../common';
import { SongForm } from './SongForm';
import * as actions from '../actions';

class SongEdit extends Component {
  render() {
    return (
      <View>
        <SongForm />
        <Section>
          <Button>Save</Button>
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


export default connect(mapStateToProps, actions)(SongEdit);
