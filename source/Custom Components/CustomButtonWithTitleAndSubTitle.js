import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class CustomButtonWithTitleAndSubTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style = {{width:'80%',height:60,backgroundColor:'transparent',alignSelf:'center',alignItems:'center',justifyContent:'center'}} onPress = {this.props.onPress}>
          <Text style = {{fontSize:15,fontWeight:'bold'}}>{this.props.title}</Text>
          <Text style = {{fontSize:15}}>{this.props.subTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
