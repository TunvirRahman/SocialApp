import React, { Component } from 'react';
import { View, Text,SafeAreaView, Button } from 'react-native';

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1}}>
      <View style = {{flex:1,alignItems:'center'}}>
        <Button title = "Login" onPress = {()=>{
          this.props.navigation.push("Login")
        }}></Button>
        <Button title = "SignUp" onPress = {()=>{
          this.props.navigation.push("SignUp")
        }}></Button>
        <Button title = "Forget Password" onPress = {()=>{
          this.props.navigation.push("ForgotPassword")
        }}></Button>
      </View>
    </SafeAreaView>
    );
  }
}
