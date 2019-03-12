import React, { Component } from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createAppContainer} from "react-navigation";
import LoginIn from "./src/loginScreen";
import SignUp from "./src/SignUpScreen";
import ForgotPassword from "./src/ForgetPasswordScreen";
import UsersScreen from './src/UsersScreen';

const AuthFlow = createStackNavigator({
  
  User: UsersScreen,
  ForgotPassword:ForgotPassword,
  SignUp:SignUp,
  Login:LoginIn,

},{
  headerMode:"none"
})

export default createAppContainer(AuthFlow)