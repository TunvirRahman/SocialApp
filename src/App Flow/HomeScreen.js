import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import Axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import FirebaseService from "./../Service and Data/FirebaseService";
import { SearchBar } from "react-native-elements";
import UserCell from "./UserCell";

const hamburgerIcon = <FontAwesomeIcon name="bars" size={30} color="blue"></FontAwesomeIcon>


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: {},
      isLoading: true
    }
  }


  componentDidMount() {
    let service = new FirebaseService()
    service.loadUserFromCountry("india").then(users => {
      this.setState({
        allUsers: users,
        isLoading: false
      })
    })
  }
  separator = () =>{
    return(
      <View style={{borderColor:'lightgray',borderWidth:.5,marginLeft:15,marginRight:15}}>
      </View>
    )
  }
  render() {
    console.log(this.state.allUsers)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {}
        {/* Nav Title and HamburgerMenu */}

        <View style={{ flex: 0.08, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'transparent' }}>
          <Text style={{ flex: 0.8, fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Home</Text>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            {hamburgerIcon}
          </TouchableOpacity>
        </View>

        {/* Nav Title and HamburgerMenu */}

        {/* MainContents Goes here */}

        <View style={{ flex: 0.92, backgroundColor: 'white' }}>
          {this.state.isLoading ? <ActivityIndicator color="blue" size='large'></ActivityIndicator> :
            <View style={{flex:1}}>
              <SearchBar style={{ height: 20, backgroundColor: 'transparent' }} placeholder="Search People here" inputStyle={{ backgroundColor: 'transparent' }} containerStyle={{ backgroundColor: 'transparent' }} round lightTheme></SearchBar>
              <FlatList
                data = {this.state.allUsers}
                renderItem ={({item,index})=> {
                  return(
                    <UserCell item={item} index={index}/>
                  )
                }}
                keyExtractor={(item, index) => item.Email}
                ItemSeparatorComponent = {this.separator}>
              </FlatList>
            </View>
          }

        </View>

        {/* MainContents Goes here */}
      </SafeAreaView>
    );
  }
}
