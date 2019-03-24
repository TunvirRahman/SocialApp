import React, { Component} from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,ActivityIndicator} from 'react-native';
import Logo from "./../Logo";
import LinearGradient from 'react-native-linear-gradient';
import { black } from 'ansi-colors';
import { Button } from "react-native-elements";
import UserInfo from "./UserInfoCredentials";
import DropdownAlert from 'react-native-dropdownalert';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false
    }
  }

  handleSignUp = ()=>{
    console.log("Sign UP")
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
        <View style = {{flex:0.2,alignItems:'center',justifyContent:'center',backgroundColor:'transparent'}}>
            <Logo></Logo>
        </View>
        <View style = {{flex:0.5,flexDirection:'column'}}>
            <UserInfo></UserInfo>
        </View>
        <TouchableOpacity style = {{flex:0.1,marginLeft:20,marginRight:20,backgroundColor:'transparent'}} onPress = {this.handleSignUp}>
          <LinearGradient style={{flex:1,borderRadius:20}}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#FE9244', '#FF5050']}
          >
          {this.state.isLoading ? <ActivityIndicator size='large' color="blue"></ActivityIndicator> : <Text style = {{flex:0.8,height:40,marginTop:20,textAlign:'center',fontWeight:'bold',fontSize: 18}}>SIGN UP</Text>}
          </LinearGradient>
        </TouchableOpacity>
        <View style = {{flex:0.1,backgroundColor:'transparent',alignItems:'center'}}>
        <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => this.props.navigation.pop()}>
            <Text style={{ textAlign: 'center' }}>Already have an account</Text>
            <Text style={{ fontWeight: 'bold', color: "black", textAlign: 'center' }}
            > Sign in now</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
