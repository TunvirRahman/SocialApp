import React, { Component } from 'react';
import { SafeAreaView,View, Text,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import ActionButton from "react-native-action-button";
import Octicons from "react-native-vector-icons/Octicons";

const logout = <Octicons name="sign-out" size = {45} color = "blue"></Octicons>

const hamburgerIcon = <FontAwesomeIcon name = "bars" size = {30} color = "blue"></FontAwesomeIcon>

const currentUser = {
  Email: "Sundor@gmail.com",
  FirstName: "Sundor",
  JobTitle: "CEO",
  LastName: "Pichai",
  password: " ",
  PhoneNo: "0973223234",
  ProfileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  ResidenceCountry: "India"
}

export default class ProfileScreen extends Component {
  
  constructor(props) {
    super(props);
    console.log(currentUser)
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
            <ActionButton
              buttonColor="transparent"
              renderIcon = {()=>logout}
              onPress={() => {
                this.props.navigation.pop()
              }}
            />
          </View>

      {/* This is main Container */}
        </View>
      </SafeAreaView>
    );
  }
}
