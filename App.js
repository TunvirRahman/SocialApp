import React, { Component } from 'react';
import { View, Text,SafeAreaView} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1}}>
        <View style = {{flex:1,backgroundColor:"white"}}>
          <Text>Sample Text</Text>
        </View>
      </SafeAreaView>
    );
  }
}
