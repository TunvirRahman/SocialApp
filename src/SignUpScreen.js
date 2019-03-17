import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './Logo';
import FirebaseService from "./Service and Data/FirebaseService";

import UserInput from './UserInput';

const screen = Dimensions.get("window")



export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      CurrentCountry:'',
      CountryOfResidence:'',
      Email:'',
      PhoneNumber:'',
      Password:'',
      confirmPassword:''
    }
  }

  renderHeader = () => {
    return (
      <View style={styles.logoPanel}>
        <Logo pageName="Registration" />
      </View>
    )
  }
  onTextChange = (text,index) =>{
    switch(index){
      case 0: this.setState({firstName:text})
      case 1: this.setState({lastName:text})
      case 2: this.setState({Email:text})
      case 3: this.setState({CurrentCountry:text})
      case 4: this.setState({CountryOfResidence:text})
      case 5: this.setState({PhoneNumber:text})
      case 6: this.setState({Password:text})
      case 7: this.setState({confirmPassword:text})
      
    }
  }

  renderFooter = () => {
    return (
      <View>
        <LinearGradient style={styles.linearGradient}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#FE9244', '#FF5050']}
        >
          <Text style={styles.buttonText} onPress={() => {

            let service = new FirebaseService()
            service.createNewUser({ name: "x" })

            let object = this.state //this is the obsject of all inputs
            console.log(object)
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
            renderItem={({ item,index }) =>
              <UserInput
                placeholder={item.key}
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                secureTextEntry={item.secureText}
                onChangeText={(text)=> this.onTextChange(text,index)}
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

