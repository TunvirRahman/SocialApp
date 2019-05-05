import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.rootView}>
        <Text>Hello World</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  rootView:{
    flex:1,
    backgroundColor:'transparent',
    alignItems: 'center',
    justifyContent:'center'
  }
})
