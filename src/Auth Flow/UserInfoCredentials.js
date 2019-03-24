import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
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
      currentEntry:"loginCredentials",
      title:"Next"
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'transparent',justifyContent:'flex-start',flexDirection:'column'}}>
        <FlatList style ={{flex:0.1,backgroundColor:'gray'}} data = {Object.keys(inputs[this.state.currentEntry])} keyExtractor = {(item,index)=>item} renderItem = {({item})=>{
          return <Input placeholder = {inputs[this.state.currentEntry][item].placeholder}></Input>
        }}></FlatList>
        <Button >{this.state.title}</Button>
      </View>
    );
  }
}
