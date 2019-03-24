import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Input from "./../UserInput";
import { Button } from 'react-native-elements';
import {formInputs} from "./../Service and Data/FormInfomations";

export default class UserInfoCredentials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEntry:1,
      title:"Next"
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'transparent',justifyContent:'flex-start',flexDirection:'column'}}>
        <FlatList style ={{flex:0.1,backgroundColor:'gray'}} data = {Object.keys(formInputs[this.state.currentEntry])} keyExtractor = {(item,index)=>item} renderItem = {({item})=>{
          return <Input placeholder = {formInputs[this.state.currentEntry][item].placeholder}></Input>
        }}></FlatList>
        <Button >{this.state.title}</Button>
      </View>
    );
  }
}
