import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions,KeyboardAvoidingView } from 'react-native';

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper} >

        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          keyboardType={this.props.keyboardType}
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          onChangeText={this.props.onChangeText}
          multiline={this.props.multiline}

        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: DEVICE_WIDTH - 40,
    height: 60,
    marginHorizontal: 20,
    paddingLeft: 23,
    borderRadius: 30,
    borderColor:"lightgray",
    borderWidth: 1,
    fontSize: 20,
    marginTop:10
  },
  inputWrapper: {
    margin: 5
  },
});