import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './auth/components/LoginForm';
import SessionList from './sessions/components/SessionList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="sessionList" component={SessionList} title="Sessions" />
      <Scene key="login" initial component={LoginForm} title="Login" />

    </Router>
  );
};

export default RouterComponent;
