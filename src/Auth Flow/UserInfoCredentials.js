import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Input from "./../UserInput";
import { Button } from 'react-native-elements';


const inputs = {
  loginCredentials:{
    Email:{
      placeholder:"Enter Email",
      secureText:false
    },
    PassWord:{
      placeholder:"Enter Password",
      secureText:true
    },
    ConfirmPassWord:{
      placeholder:"Confirm Password",
      secureText:true
    },
  },
  userInfos:{
    FirstName:{
      placeholder:"Enter First Name",
      secureText:false
    },
    LastName:{
      placeholder:"Enter Last Name",
      secureText:false
    },
    CountryCurrentlyLiving:{
      placeholder:"Enter Country Name",
      secureText:false
    },
    CountryOfOrigin:{
      placeholder:"Enter Your birth country Name",
      secureText:false
    },
    Profession:{
      placeholder:"Enter Your Profession Name",
      secureText:false
    }
  }
}

export default class UserInfoCredentials extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'transparent',justifyContent:'center',flexDirection:'column'}}>
        {Object.keys(inputs.loginCredentials).map(key=>{
            return (
              <Input key = {key} secureTextEntry = {inputs.loginCredentials[key].secureText} placeholder = {inputs.loginCredentials[key].placeholder}></Input>
            )
        })}
      </View>
    );
  }
}
