import React, { Component } from 'react';
import {Button} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default class GradientButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Button title = {this.props.title}></Button>
    );
  }
}
