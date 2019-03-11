import React, { Component } from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createAppContainer} from "react-navigation";
import LoginIn from "./src/loginScreen";
import SignUp from "./src/SignUpScreen";
import ForgotPassword from "./src/ForgetPasswordScreen";

const AuthFlow = createStackNavigator({
  Login:LoginIn,
  SignUp:SignUp,
  ForgotPassword:ForgotPassword
},{
  
})

export default createAppContainer(AuthFlow)