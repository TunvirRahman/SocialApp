import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from 'react-native-action-button';
import UserInput from './UserInput';
import AntIcon from 'react-native-vector-icons/AntDesign';


export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <SafeAreaView style = {{flex:1,backgroundColor:'transparent'}}>
        <View style = {{flex:1,backgroundColor:'transparent',flexDirection:'column',justifyContent:'space-around'}}>
          <View style = {{flex:0.3,backgroundColor:'transparent',alignItems:'stretch'}}>
            <Logo></Logo>
          </View>
          <View style = {{flex:0.4,backgroundColor:'transparent',justifyContent:'center'}}>
            <UserInput
              placeholder="Email"
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
            />
            <LinearGradient style={{height:60,marginLeft:20,marginRight:20,borderRadius:20,marginTop:20}}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#FE9244', '#FF5050']}
            >
            <TouchableOpacity style = {{flex:1,backgroundColor:'transparent',justifyContent:'center',alignItems:"center"}} onPress = {()=>{
                  this.props.navigation.pop()
            }}>
              <Text style = {{fontSize:15,fontWeight:'bold'}}>Recover Password</Text>
            </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={{ flex: 0.2, backgroundColor: 'transparent',justifyContent:'center'}}>
            <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => this.props.navigation.pop()}>
              <Text style={{ textAlign: 'center' }}>Already have an account?</Text>
              <Text style={{ fontWeight: 'bold', color: "black", textAlign: 'center' }}
              > Sign in now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }

}


