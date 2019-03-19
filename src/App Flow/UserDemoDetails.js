import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';


export default class UserDemoDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    console.log(this.props.item)
    return (
        <Text>HI</Text>   
    );
  }
}
