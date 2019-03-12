import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from './Images/logo.png';

export default class Logo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image  style={styles.image} source={logoImg} />
        {(this.props.firstHeading)?<Text style={[styles.text, {color: 'gray', fontWeight:'100', fontSize: 30}]}>{this.props.firstHeading}</Text>:<Text></Text>}
        {(this.props.pageName)?<Text style={[styles.text, {color: 'black', fontWeight:'bold' , fontSize: 40,}]}>{this.props.pageName}</Text>:<Text></Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    backgroundColor: 'transparent',
    margin: 5,
  },
});