import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './auth/components/LoginForm';
import { SessionList, SessionCreate, SessionEdit } from './sessions/components';
import { SongList, SongCreate, SongEdit } from './songs/components';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
    </Scene>
    <Scene key="main">
      <Scene
        key="sessionList"
        onRight = { () => Actions.sessionCreate() }
        rightTitle = "Add Session"
        component={SessionList}
        title="Sessions"
      />
      <Scene
        key="sessionCreate"
        component={SessionCreate}
        title="New Session"
      />
      <Scene
        key="sessionEdit"
        component={SessionEdit}
        title="Edit Session"
      />
      <Scene
        key="songList"
        component={SongList}
        title="Tunes"
        onRight = { () => Actions.songCreate() }
        rightTitle = "Add Song"
      />
      <Scene
        key="songCreate"
        component={SongCreate}
        title="New Song"
      />
      <Scene
        key="songEdit"
        component={SongEdit}
        title="Edit Song"
      />

    </Scene>
    </Router>
  );
};

export default RouterComponent;
