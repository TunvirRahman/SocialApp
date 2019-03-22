import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import UserInput from './UserInput';
export default class Form extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInput style = {{flex:0.4}}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={(text)=>this.props.onChange({login:text})}
        />
        <UserInput style = {{flex:0.4}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});