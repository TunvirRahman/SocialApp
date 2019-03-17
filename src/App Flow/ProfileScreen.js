import React, { Component } from 'react';
import { SafeAreaView,View, Text } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'white'}}>
        <View style = {{flex:1,backgroundColor:'gray',alignItems:'center'}}>
            <Text>Current user profile will load here</Text>
        </View>
      </SafeAreaView>
    );
  }
}
