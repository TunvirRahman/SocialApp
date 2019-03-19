import React, { Component } from 'react';

import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import UserInput from './UserInput';
export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state={
      email:'',
      password:'',
    }

    //give data to the previous class
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }
    
  getEmail=()=>{
    return this.state.email
  }
  getPassword(){
    return this.state.password
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInput
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={(text)=>this.setState({email:text})}
        />
        <UserInput
          secureTextEntry={true}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(text)=>this.setState({password:text})}
        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});