/**
 * @author Kayla Martell
 * @description Launch the main app for sessions
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text  } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { COLOR, ThemeProvider, Card, ListItem, Toolbar, BottomNavigation} from 'react-native-material-ui';
import Router from './Router';
import reducers from './reducers';
import SessionList from './sessions/components/SessionList';
import SongList from './songs/components/SongList';
import { YourToolbar } from './common';

// We want to setup our firebase connection before App gets rendered /
// To get a hook no that we can use a lifecycle method!
class App extends Component {

  componentWillMount(){
    // Firebase initialization
    const config = {
       apiKey: "AIzaSyAQ4zsdnxfztLKWkbS3X-XQg_OSh8FQyUo",
       authDomain: "yoursession-439bc.firebaseapp.com",
       databaseURL: "https://yoursession-439bc.firebaseio.com",
       storageBucket: "yoursession-439bc.appspot.com",
       messagingSenderId: "252904387114"
     };
     firebase.initializeApp(config);
  }



  render() {
    return (
      <Provider store={createStore(reducers)}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
      </Provider>
    );
  }


}

export default App;
