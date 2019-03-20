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
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInput
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={(text)=>this.props.onChange({login:text})}
        />
        <UserInput
          secureTextEntry={true}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(text)=>this.props.onChange({password:text})}
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