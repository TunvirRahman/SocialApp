import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import CustomTextInput from "./Custom Components/CustomTextInput";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.rootView}>
        <CustomTextInput placeholder = "User Name" secret={false} onTextChange = {(text)=>console.log(text)}></CustomTextInput>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  rootView:{
    flex:1,
    backgroundColor:'transparent'
  }
})
