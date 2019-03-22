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

  loginCredentials = {
    login:'',
    password:''
  }

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      isLoading: false,
    }
  }

  _onItemPressed(item) {

    this.setState({ isLoading: true })
    let service = new FirebaseService()
    service.loginAndUserInfo(this.loginCredentials.login,this.loginCredentials.password).then(res => {
      this.setState({ isLoading: false })
      if(res.length !== 0){
        AsyncStorage.setItem('@CurrentUser:key', JSON.stringify(res)).then(res=>{
          this.props.navigation.push("AppFlow")
        }).catch(err=>{
          console.log(err)
        })
      }else{
        Alert.alert("Can't login", "You must register before login!")
      } 
      
    }).catch(err => {
      this.setState({ isLoading: false })
      Alert.alert("Can't login", "Please try again Later")
    })
  }


  render() {
    return (
      <SafeAreaView style={styles.mainview}>

        <View style={styles.logoPanel}>
          <Logo pageName="Social" />
        </View>

        <View style={styles.form}>
          <Form ref={ref => (this._form = ref)} onChange = {(credential)=>{
            credential.login? this.loginCredentials = {...this.loginCredentials,login:credential.login,} : this.loginCredentials =  {...this.loginCredentials,password:credential.password}
          }}></Form>
          <LinearGradient style={styles.linearGradient}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#FE9244', '#FF5050']}
          >
          {this.state.isLoading ? <ActivityIndicator size='large' color="blue"></ActivityIndicator> : <Text style={styles.buttonText} onPress={this._onItemPressed.bind(this)}> LOGIN</Text>}
          </LinearGradient>
        </View>
        <View style={styles.signUpOptions}>

          <View style={styles.socialMedia}>
            <TouchableOpacity style={styles.icons}>
              <AntIcon.Button name="twitter" size={35} color="black" backgroundColor="transparent"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icons}>
              <AntIcon.Button name="google" size={35} color="black" backgroundColor="transparent"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icons}>
              <FontAwsomeIcon.Button name="facebook-f" size={35} color="black" backgroundColor="transparent"/>
            </TouchableOpacity>
          </View>
            <View style={styles.signup}>
              <TouchableOpacity style = {{flexDirection:'column'}} onPress={() => this.props.navigation.push("SignUp")}>
                <Text style={{textAlign:'center'}}>Do not have an account?</Text>
                <Text style={{ fontWeight: 'bold', color: "black",textAlign:'center'}}
                > Sign up now</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{flexDirection:'column'}} onPress={() => this.props.navigation.push("ForgotPassword")} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{textAlign:"center"}}>Forgot your password?</Text>
                <Text style={{ fontWeight: 'bold', color: "black",textAlign:'center' }}
                > Recover now</Text>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-end',
    //backgroundColor: 'gray'
  },
  logoPanel: {
    flex: .2,
    //backgroundColor: 'black'
  },
  form: {
    flex: 0.4,
    flexDirection:'column',
    justifyContent:'space-evenly',
    //backgroundColor: 'blue'
  },
  linearGradient: {
    borderRadius: 30,
    height: 70,
    marginTop: 10,
    marginLeft:20,
    marginRight:20,
    justifyContent:'center'
  },
  buttonContainer: {
    flex: .12,

    alignItems: 'stretch',
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  buttonText: {
    flex:0.5,
    fontSize: 18,
    textAlign:'center',
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    borderColor:'blue'
    //backgroundColor: 'transparent',
  },
  signUpOptions: {
    flex: .3,
    flexDirection: 'column',
    justifyContent:'space-around',
    //backgroundColor: 'yellow'
  },
  socialMedia: {
    flex:0.3,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'red'
  },
  icons: {
    width:60,
    height:60,
    marginRight:10,
    borderColor: "lightgray",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  signUpText: {
    fontSize: 15,
    //backgroundColor:'white'
  },
  signup: {
    flex:0.4,
    flexDirection: 'column',
    justifyContent:'space-around',
    //backgroundColor:'red'
  }
});