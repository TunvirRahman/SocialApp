import React, { Component } from 'react';
import { SafeAreaView,View, Text } from 'react-native';
import AntDesignICON from "react-native-vector-icons/AntDesign";
import Hamburger from 'react-native-hamburger';


export default class ProfileScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menuActive:false
    }
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'white'}}>
        <View style = {{flex:1,backgroundColor:'white'}}>
          
          <Hamburger active = {this.state.menuActive} type ='spinArrow' onPress = {()=>{
            this.setState({
              menuActive:!this.state.menuActive
            })
          }}></Hamburger>



          <View style = {{flex:1,backgroundColor:'gray'}}>
              {/* This is main Container */}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
