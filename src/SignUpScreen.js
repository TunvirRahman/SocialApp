import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from 'react-native-action-button';
import Logo from './Logo';

import UserInput from './UserInput';
import AntIcon from 'react-native-vector-icons/AntDesign'

const screen = Dimensions.get("window")

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainview} >

          <View style={styles.logoPanel}>
            <Logo pageName="Registration" />
          </View>

          <View style={styles.form}>
            <KeyboardAvoidingView behavior="padding" style={styles.userInputContainer}>
              <UserInput
                placeholder="Name"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
              />
              <UserInput
                placeholder="Email"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
              />
              <UserInput
                secureTextEntry={true}
                placeholder="Password"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
              <UserInput
                secureTextEntry={true}
                placeholder="Confirm Password"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
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

          <View style={styles.forText}>
            <Text style={[styles.signUpText, { justifyContent: 'center', alignSelf: 'flex-start' }]}>Already have an account?</Text>
            <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'flex-start' }} onPress={() => this.props.navigation.push("Login")}>
              <Text style={[styles.signUpText, { fontWeight: 'bold', color: "black", }]}
              > Sign in now</Text>
            </TouchableOpacity>
          </View>

          <ActionButton
            buttonColor="rgb(119,136,153)"
            ///icon={<Icon name="md-cut" style={styles.actionButtonIcon} />}
            renderIcon={active => (<AntIcon name="back" style={styles.actionButtonIcon} size={25} color="black" />) }>
          </ActionButton>

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
  logoPanel: {
    flex: 2.5,
  },
  form: {
    flex: 3,
    alignItems: 'center',
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
    flex: .75,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  signUpText: {
    fontSize: 18,
    paddingTop: 20,
  },
  forText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: screen.width / 5,
    marginLeft: screen.width / 5,
    marginBottom: 15,
  },
  userInputContainer: {
    flex: 1,
    alignItems: 'center',

  },
});
