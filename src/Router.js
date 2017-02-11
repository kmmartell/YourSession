import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './auth/components/LoginForm';
import SessionList from './sessions/components/SessionList';
import SongList from './songs/components/SongList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
        <Scene key="login" initial component={LoginForm} title="Login" />
    </Scene>
    <Scene key="main">
      <Scene key="sessionList" component={SessionList} title="Sessions" />
        <Scene key="songList" component={SongList} title="Tunes" />

    </Scene>

    </Router>
  );
};

export default RouterComponent;
