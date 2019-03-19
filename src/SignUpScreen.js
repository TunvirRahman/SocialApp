import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, FlatList,Alert,ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './Logo';
import FirebaseService from "./Service and Data/FirebaseService";

import UserInput from './UserInput';

const screen = Dimensions.get("window")

var SignUpObject = {
  firstName: '',
  lastName: '',
  CurrentCountry: '',
  CountryOfResidence: '',
  Email: '',
  PhoneNumber: '',
  Password: '',
  confirmPassword: ''
}

let newUserInfo = {
  "CurrentCountry" : "Bangladesh",
  "Email" : "jackChan@yahoo.com",
  "FirstName" : "Jack",
  "JobTitle" : "Engineer",
  "LastName" : "Sparrow",
  "PhoneNo" : "01912386832",
  "ProfileImage" : "https://randomuser.me/api/portraits/men/1.jpg",
  "ResidenceCountry" : "USA",
  "password" : " "
}

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false
    }
  }

  renderHeader = () => {
    return (
      <View style={styles.logoPanel}>
        <Logo pageName="Registration" />
      </View>
    )
  }
  onTextChange = (text, index) => {
    switch (index) {
      case 0: return SignUpObject.firstName = text;
      case 1: return SignUpObject.lastName = text
      case 2: return SignUpObject.Email = text
      case 3: return SignUpObject.CurrentCountry = text
      case 4: return SignUpObject.CountryOfResidence = text
      case 5: return SignUpObject.PhoneNumber = text
      case 6: return SignUpObject.Password = text
      case 7: return SignUpObject.confirmPassword = text

    }
  }

  renderFooter = () => {
    return (
      <View>
        {this.state.isLoading? <ActivityIndicator size = 'large' color='blue'></ActivityIndicator>:null}
        <LinearGradient style={styles.linearGradient}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#FE9244', '#FF5050']}
        >
          <Text style={styles.buttonText} onPress={() => {
            this.setState({isLoading:true})
            let service = new FirebaseService()
            service.createNewUser(newUserInfo).then(res=>{
              this.setState({isLoading:false})
              this.props.navigation.pop()
            }).catch(err=>{
              Alert.alert("Operation Failed",err)
            })
          }}>
            SIGN UP</Text>
        </LinearGradient>

        <View style={styles.forText}>
          <Text style={[styles.signUpText, { justifyContent: 'center', alignSelf: 'flex-start' }]}>Already have an account?</Text>
          <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'flex-start' }} onPress={() => this.props.navigation.pop()}>
            <Text style={[styles.signUpText, { fontWeight: 'bold', color: "black", }]}
            > Sign in now</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.form}>
          <FlatList
            ListFooterComponent={this.renderFooter}
            ListHeaderComponent={this.renderHeader}
            data={[
              {
                key: 'First Name',
                secureText: false
              },
              {
                key: 'Last Name',
                secureText: false
              },
              {
                key: 'Email Address',
                secureText: false
              },
              {
                key: 'Current Country',
                secureText: false
              },
              {
                key: 'Country of residence',
                secureText: false
              },
              {
                key: 'Cell Phone No',
                secureText: false
              },
              {
                key: 'Password',
                secureText: true
              },
              { key: 'Confirm Password', secureText: true },
            ]}
            renderItem={({ item, index }) =>
              <UserInput
                placeholder={item.key}
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                secureTextEntry={item.secureText}
                onChangeText={(text) => this.onTextChange(text, index)}
              />}
          >
          </FlatList>
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
    flex: 1,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    margin: 17,
    width: screen.width - 40
  },
  buttonContainer: {
    flex: .5,
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
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: screen.width / 5,
    marginLeft: screen.width / 5,
    marginBottom: 15,
  },
});

