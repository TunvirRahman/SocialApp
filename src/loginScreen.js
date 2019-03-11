import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import {Button} from "react-native-elements";

export default class LoginScreen extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1}}>
        <View style = {{flex:1,alignItems:'center'}}>
          <Button title = "Login" onPress = {()=>{
            console.debug("Will Load Home Screen")
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
