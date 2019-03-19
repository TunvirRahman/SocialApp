import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image} from 'react-native';


export default class UserCell extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
    <View style = {{flex:0.05,height:90,backgroundColor:'gray',borderRadius:20,justifyContent:'flex-start'}}>
        <View style = {{flex:0.98,flexDirection:'column',backgroundColor:'white'}}>

        </View>
        {/* <Text style = {{textAlign:'center',fontWeight:'bold',fontSize:12}}>{this.props.user.Email}</Text>
        <Text style = {{textAlign:'center',fontWeight:'bold',fontSize:12}}>{this.props.user.FirstName} {this.props.user.LastName}</Text> */}
      </View>
    );
  }
}
