import React, { Component } from 'react';
import { SafeAreaView,View, Text } from 'react-native';
import Axios from "axios";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){

  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'white'}}>
        <View style= {{flex:1,backgroundColor:'gray',alignItems:'center'}}>
            <Text>List of people with data will load here</Text>
        </View>
      </SafeAreaView>
    );
  }
}
