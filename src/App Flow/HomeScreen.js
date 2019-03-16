import React, { Component } from 'react';
import { SafeAreaView,View, Text } from 'react-native';
import Axios from "axios";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    
    Axios.get("https://social-4a626.firebaseio.com/user.json").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'white'}}>
        <View style= {{flex:1,backgroundColor:'white'}}>
            <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
