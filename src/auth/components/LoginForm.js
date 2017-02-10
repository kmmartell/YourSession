import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Subheader} from 'react-native-material-ui';
import * as actions from '../actions';
import { Input } from '../../common';


class LoginForm extends Component {
  componentWillMount(){
    console.log('Login form mounted');
  }
  loginPressed(){
    console.log('Login Pressed');
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
          onChangeText = { this.props.emailChanged.bind(this)}
          value={this.props.email}

        />

        <Input
          label="Password"
          placeholder="********"
          onChangeText = { this.props.passwordChanged.bind(this)}
          value={this.props.password}

        />
      <TouchableOpacity onPress={this.loginPressed.bind(this)} >
          <Button raised primary text="Login"></Button>
        </TouchableOpacity>
      </Card>
    );

  }


}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}


export default connect(mapStateToProps, actions)(LoginForm);
