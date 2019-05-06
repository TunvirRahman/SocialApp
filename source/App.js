import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import GradientButton from "./Custom Components/GradientButton";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.rootView}>
        <GradientButton title = "LOGIN" colors ={['#FE9244', '#FF5050']}  onPress = {()=>console.log("Ok")}></GradientButton>
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
