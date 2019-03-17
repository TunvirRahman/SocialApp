import React, { Component } from 'react';
import { SafeAreaView,View, Text } from 'react-native';
import AntDesignICON from "react-native-vector-icons/AntDesign";
import Hamburger from 'react-native-hamburger';

export default class ProfileScreen extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'white'}}>

      {/* Nav Title and HamburgerMenu */}

        <View style = {{flex:1,backgroundColor:'white'}}>
          <View style = {{flex:0.08,justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'transparent'}}>
            <Text style = {{flex:0.8,fontSize:20,textAlign:'center',fontWeight: 'bold'}}>Profile</Text>
            <Hamburger active={false} type ='spinArrow' onPress = {()=>{
              this.props.navigation.toggleDrawer();
            }}></Hamburger>
          </View>

      {/* Nav Title and HamburgerMenu */}
      
      {/* This is main Container */}
          
          <View style = {{flex:0.92,backgroundColor:'gray'}}>
             
          </View>

      {/* This is main Container */}
        </View>
      </SafeAreaView>
    );
  }
}
