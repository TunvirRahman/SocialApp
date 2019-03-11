import React, { Component } from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import ActionButton from 'react-native-action-button';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1}}>
        <View style = {{flex:1}}>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            this.props.navigation.pop()
          }}
        />
        </View>
      </SafeAreaView>
    );
  }
}
