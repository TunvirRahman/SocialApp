import React, { Component } from 'react';
import { SafeAreaView,View, Text } from 'react-native';
import Axios from "axios";
import Hamburger from 'react-native-hamburger';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'white'}}>
      
      {/* Nav Title and HamburgerMenu */}

          <View style = {{flex:0.08,justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'transparent'}}>
            <Text style = {{flex:0.8,fontSize:20,textAlign:'center',fontWeight: 'bold'}}>Home</Text>
            <Hamburger active={false} type ='spinArrow' onPress = {()=>{
              this.props.navigation.toggleDrawer();
            }}></Hamburger>
          </View>

      {/* Nav Title and HamburgerMenu */}

      {/* MainContents Goes here */}
      
        <View style= {{flex:0.92,backgroundColor:'gray',alignItems:'center'}}>
            <Text>List of people with data will load here</Text>
        </View>

      {/* MainContents Goes here */}
      </SafeAreaView>
    );
  }
}
