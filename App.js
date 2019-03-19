import React, { Component } from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createAppContainer} from "react-navigation";
import LoginIn from "./src/loginScreen";
import SignUp from "./src/SignUpScreen";
import ForgotPassword from "./src/ForgetPasswordScreen";


import HomeScreen from "./src/App Flow/HomeScreen";
import ProfileScreen from "./src/App Flow/ProfileScreen";




const AuthFlow = createStackNavigator({
  Login:LoginIn,
  ForgotPassword:ForgotPassword,
  SignUp:SignUp,

},{
  headerMode:"none",
  initialRouteName:'Login'
})

const AppFlow = createDrawerNavigator({
  Home:HomeScreen,
  Profile:ProfileScreen,
})

const App = createStackNavigator({
  AuthFlow:AuthFlow,
  AppFlow:AppFlow
},{
  headerMode:"none",
  initialRouteName:'AuthFlow'
})

export default createAppContainer(App)