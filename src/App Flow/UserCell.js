import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import UserDemoDetails from './UserDemoDetails';
import { ListItem } from 'react-native-elements'

export default class UserCell extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    console.log(this.props.item)
    return (
      <ListItem
        title={<View style={{ flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', flex: .75, margin: 5, padding: 10, justifyContent: 'center' }}>
          <Text style={{ fontSize: 25 }}>{this.props.item.FirstName} {this.props.item.LastName}</Text>
          <Text style={{ fontSize: 15 }}>{this.props.item.JobTitle}</Text>
        </View>}
        leftAvatar={<Image
          style={{ height: 70, width: 70, borderRadius: 35, justifyContent: 'center', alignSelf: 'center', paddingLeft: 10 }}
          source={{ uri: this.props.item.ProfileImage }}
        />}
        onPress={()=> this.props.navigation.push("UserDemoDetails")}
      />
    );
  }
}