import React, { Component } from 'react';
import { View, Text,TextInput} from 'react-native';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput style = {{width:'80%',height:60,alignSelf:'center',borderColor:'green',borderWidth:1,borderRadius:20,textAlign:'center',fontSize:16}} placeholder = {this.props.placeholder} secureTextEntry={this.props.secret} onChangeText ={this.props.onTextChange}></TextInput>
    );
  }
}
