import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { black } from 'ansi-colors';
import Logo from './Logo';
import Form from './Form';
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const screen = Dimensions.get("window")

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <SafeAreaView style={styles.mainview}>

        <View style={styles.mainview}>
            <View style={styles.logoPanel}>
              <Logo pageName="UI Kitten" firstHeading="React Native" />
            </View>

            <View style={styles.form}>
              <Form />
            </View>

            <View style={styles.buttonContainer}>
              <LinearGradient style={styles.linearGradient}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#FE9244', '#FF5050']}
              >
                <Text style={styles.buttonText} onPress={() => console.log("Hi")}>
                  LOGIN</Text>
              </LinearGradient>

            </View>

            <View style={styles.signUpOptions}>
              <View style={styles.socialMedia}>
                <TouchableOpacity style={styles.icons}>
                  <AntIcon.Button name="twitter" size={35} color="black" backgroundColor="transparent" paddingLeft={15} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}>
                  <AntIcon.Button name="google" size={35} color="black" backgroundColor="transparent" paddingLeft={15} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}>
                  <FontAwsomeIcon.Button name="facebook-f" size={35} color="black" backgroundColor="transparent" paddingLeft={15} />
                </TouchableOpacity>
              </View>


              <View style={styles.forText}>

                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.push("SignUp")}>
                  <Text style={[styles.signUpText, { fontWeight: 'bold', color: "black" }]}
                  > Sign up now</Text>
                </TouchableOpacity>
              </View>

            </View>

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
    flex: 4,
  },
  form: {
    flex: 2,
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
    flex: 1.25,
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
  signUpOptions: {
    flex: 1.65,
    flexDirection: 'column'
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    flex: .60,
    margin: 5,
    paddingLeft: screen.width / 8,
    paddingRight: screen.width / 8
  },
  icons: {
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  signUpText: {
    fontSize: 18,
    margin: 5,
    paddingTop: 20,
  },
  forText: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: screen.width / 5,
    marginLeft: screen.width / 5

  }
});