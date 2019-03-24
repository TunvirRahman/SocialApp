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


const styles = StyleSheet.create({
  input: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 20,
    paddingLeft: 23,
    borderRadius: 25,
    borderColor:"lightgray",
    borderWidth: 1,
    fontSize: 20,
    marginTop:10
  },
  inputWrapper: {
    margin: 5
  },
});