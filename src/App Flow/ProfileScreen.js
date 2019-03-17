import React, { Component } from 'react';
import { SafeAreaView,View, Text,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const hamburgerIcon = <FontAwesomeIcon name = "bars" size = {30} color = "blue"></FontAwesomeIcon>



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
            <TouchableOpacity onPress = {()=>this.props.navigation.toggleDrawer()}>
              {hamburgerIcon}
            </TouchableOpacity>
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
