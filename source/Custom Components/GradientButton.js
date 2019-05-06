import React, { Component } from 'react';
import {Button,TouchableOpacity,Text,ActivityIndicator} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default class GradientButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity style = {{width:'80%',height:60,backgroundColor:'transparent',alignSelf:'center'}} onPress = {this.props.onPress}>
          <LinearGradient style = {{flex:1,borderRadius:20,alignItems:'center',justifyContent:'center'}} colors={this.props.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            {this.props.withLoading? <ActivityIndicator size='large' color='gray'></ActivityIndicator> : <Text style = {{fontSize:18,backgroundColor:'transparent'}}>{this.props.title}</Text>}
          </LinearGradient>
        </TouchableOpacity>
    );
  }
}
