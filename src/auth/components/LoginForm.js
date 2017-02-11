import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card,  Subheader} from 'react-native-material-ui';
import { Button } from '../../common';
import * as actions from '../actions';
import { Input } from '../../common';


class LoginForm extends Component {
  loginPressed(){
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }
  render(){
    return (
      <Card>
         <Subheader text="Login to YourSession" />
        <Input
          label="Email"
          placeholder="kayla@coolbeans.com"
          onChangeText = { value  => this.props.loginDetailsChanged({prop:'email', value })}
          value={this.props.email}

        />

        <Input
          label="Password"
          placeholder="********"
          secureTextEntry
            onChangeText = { value  => this.props.loginDetailsChanged({prop:'password', value })}
          value={this.props.password}

        />
      <Text>{this.props.error}</Text>
      <Button onPress={() => this.loginPressed()}>Login</Button>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password, error } = state.auth;
  return { email, password, error };
}


export default connect(mapStateToProps, actions)(LoginForm);
