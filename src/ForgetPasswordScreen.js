import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from 'react-native-action-button';

import UserInput from './UserInput';
import AntIcon from 'react-native-vector-icons/AntDesign'
const screen = Dimensions.get("window")


export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainview} >

          <View style={styles.logoPanel}>
            <Logo pageName="Password Recovery" />
          </View>

          <View style={styles.form}>
            <KeyboardAvoidingView behavior="height" style={styles.userInputContainer}>
              <UserInput
                placeholder="Email"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
              />

              <Text style={{ justifyContent: 'center', alignSelf: 'center', width: screen.width - 47 }}>Enter your email below to receive your password reset instructions</Text>
            </KeyboardAvoidingView>
          </View>

          <View style={styles.buttonContainer}>
            <LinearGradient style={styles.linearGradient}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#FE9244', '#FF5050']}
            >
              <Text style={styles.buttonText} onPress={() => console.log("Hi")}>
                SIGN UP</Text>
            </LinearGradient>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.push("Login")} style={styles.gotoLogin}>
            <Text style={{fontWeight: 'bold', color: "black",fontSize:18 }}
            > Sign In</Text>
          </TouchableOpacity>


        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  gotoLogin:{
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:5
  },
  logoPanel: {
    flex: 3,
  },
  form: {
    flex: 4,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    margin: 17,
    width: screen.width - 40
  },
  buttonContainer: {
    flex: 1.5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  userInputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
