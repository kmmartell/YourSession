import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { COLOR, ThemeProvider, Card, ListItem, Toolbar} from 'react-native-material-ui';

import SessionList from './components/SessionList';
import { YourToolbar } from './components/common';

// We want to setup our firebase connection before App gets rendered /
// To get a hook no that we can use a lifecycle method!
class App extends Component {

  componentWillMount(){
    // Firebase initialization
  /*  firebase.initializeApp({
    apiKey: "AIzaSyAq1-j-rQdo-u2eRau23xT3Jk9nfPc8b2c",
    authDomain: "authentication-d3944.firebaseapp.com",
    databaseURL: "https://authentication-d3944.firebaseio.com",
    storageBucket: "authentication-d3944.appspot.com",
    messagingSenderId: "802818873953"
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true});
    } else {
      this.setState({ loggedIn: false})
    }

  })
  */

  }



  render() {
    return (
      <ThemeProvider>
      <View>
        <YourToolbar title="Your Sessions" />
        <SessionList/>
      </View>
      </ThemeProvider>
    );
  }


}

export default App;
