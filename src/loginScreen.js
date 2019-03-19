import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, KeyboardAvoidingView, ActivityIndicator, AsyncStorage, Alert } from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { black } from 'ansi-colors';
import Logo from './Logo';
import Form from './Form';
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import FirebaseService from "./Service and Data/FirebaseService";


const screen = Dimensions.get("window")

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      isLoading: false,
    }
  }

  //for calling the email and password
  _onItemPressed(item) {
    console.log(this._form.getEmail);
    this.setState({ isLoading: true })
    let service = new FirebaseService()
    service.loginAndUserInfo("tunvir_rahman@yahoo.com", " ").then(res => {
      this.setState({ isLoading: false })
      this.props.navigation.push("AppFlow")
    }).catch(err => {
      Alert.alert("Can't login", "Please try again Later")
    })
  }


  render() {
    return (
      <SafeAreaView style={styles.mainview}>

        <View style={styles.logoPanel}>
          <Logo pageName="UI Kitten" firstHeading="React Native" />
        </View>

        <View style={styles.form}>
          <Form ref={ref => (this._form = ref)}></Form>
        </View>
        <View style={styles.buttonContainer}>
          {this.state.isLoading ? <ActivityIndicator size='large' color="blue"></ActivityIndicator> : null}
          <LinearGradient style={styles.linearGradient}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#FE9244', '#FF5050']}
          >
            <Text style={styles.buttonText} onPress={this._onItemPressed.bind(this)}>
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

            <View style={styles.signup}>
              <TouchableOpacity onPress={() => this.props.navigation.push("SignUp")}>
                <Text style={[styles.signUpText, { fontWeight: 'bold', color: "black" }]}
                > Sign up now</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.push("ForgotPassword")} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[styles.signUpText, { fontWeight: 'bold', color: "black", }]}
                > Forget Password?</Text>
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
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: 'green'
  },
  logoPanel: {
    flex: .3,
    //backgroundColor: 'black'
  },
  form: {
    flex: .3,
    alignItems: 'center',
    justifyContent: 'center',

    //backgroundColor: 'blue'
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
    flex: .12,

    alignItems: 'stretch',
    justifyContent: 'center',

    //backgroundColor: 'red'
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
    flex: .23,
    flexDirection: 'column',

    //backgroundColor: 'gray'
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
    fontSize: 15,
    marginLeft: screen.width / 8,
    marginRight: screen.width / 8,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forText: {
    flex: .39,
    justifyContent: 'center',
    alignItems: "stretch",
    //backgroundColor: "yellow",
    flexDirection: "column",

  },
  signup: {
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  }
});