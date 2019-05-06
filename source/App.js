import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import CustomButtonWithTitleAndSubTitle from "./Custom Components/CustomButtonWithTitleAndSubTitle";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.rootView}>
        <CustomButtonWithTitleAndSubTitle title = "Do not have an account?" subTitle = "Sign up now" onPress = {()=>console.log("OK")}></CustomButtonWithTitleAndSubTitle>
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
