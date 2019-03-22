import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions, SectionList, Image, TextInputComponent,AsyncStorage,TextInput } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from "react-native-action-button";
import Feather from "react-native-vector-icons/Feather";

const logout = <Feather name="log-out" size={30} color="blue"></Feather>


const screen = Dimensions.get("window")

const hamburgerIcon = <FontAwesomeIcon name="bars" size={30} color="blue"></FontAwesomeIcon>

const profileItemsAndProperties = [
  {
    title: 'INFO',
    data: [
      {
        itemName: 'First Name',
        secure: false
      },
      {
        itemName: 'Last Name',
        secure: false
      },
      {
        itemName: 'Country',
        secure: false
      }, {
        itemName: 'Job Title',
        secure: false
      }, {
        itemName: 'Phone No',
        secure: false
      }
    ]
  },
  {
    title: 'Confirm Password',
    data: [
      {
        itemName: 'Old Password',
        secure: true
      },
      {
        itemName: 'New Passoword',
        secure: true
      },
      {
        itemName: 'Confirm Password',
        secure: true
      }
    ]
  }
]

class SectionListItems extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.currentUser)
  }

  getItemName = (index,property) => {
    switch (index) {
      case 0: return (property)?"****":this.props.currentUser.FirstName
      case 1: return (property)?"****":this.props.currentUser.LastName
      case 2: return (property)?"****":this.props.currentUser.ResidenceCountry
      case 3: return this.props.currentUser.JobTitle
      case 4: return this.props.currentUser.PhoneNo
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', margin: 15, justifyContent: 'space-between', alignItems: 'center', height: 60 }}>
        <Text style={{ flex: .3, fontSize: 20, paddingLeft: 7, color: 'gray', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start', direction: 'ltr' }}>{this.props.item.itemName}</Text>
        <TextInput
          style={{ flex: .5, fontSize: 25,  color: 'black', borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', width: 150, fontWeight: 'bold', fontFamily: 'Helvetica', paddingLeft: 5, paddingRight: 5 }}
          placeholder={this.getItemName(this.props.index,this.props.item.secure)}
          editable = {false}
          secureTextEntry={this.props.item.secure}
          autoCorrect={false}
          autoCapitalize={'none'}
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          textAlign={'right'}
        />
      </View>
    )
  }
}
export default class ProfileScreen extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      currentUser:{
        Email: "",
        FirstName: "",
        JobTitle: "",
        LastName: "",
        password: "",
        PhoneNo: "",
        ResidenceCountry: ""
      }
    }
  }

  componentDidMount = async ()=>{
    const user = await AsyncStorage.getItem("@CurrentUser:key")
    this.setState({currentUser:JSON.parse(user)})
  }

  renderHeaderComponent = () => {
    return (

      <View style={{ backgroundColor: 'transparent', height: 200, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 125, width: 125, borderRadius: 64 }}
          source={{ uri: "https://randomuser.me/api/portraits/men/3.jpg" }}
        />
       
      </View>
    )
  }
  separator = () =>{
    return(
      <View style={{borderColor:'lightgray',borderWidth:.5,marginLeft:15,marginRight:15}}>
      </View>
    )
  }
  renderFooterComponent = () => {
    return (
      <View>
        <LinearGradient style={{ borderRadius: 25, alignItems: 'center', justifyContent: 'center', height: 60, margin: 17, width: screen.width - 40 }}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#FE9244', '#FF5050']}
        >
          <Text style={{ fontSize: 18, fontFamily: 'Gill Sans', textAlign: 'center', margin: 10, color: '#ffffff', backgroundColor: 'transparent' }} onPress={() => console.log("Data will be saved")}>
            SAVE</Text>
        </LinearGradient>
      </View>
    )
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

        {/* Nav Title and HamburgerMenu */}

        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 0.08, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'transparent' }}>
            <Text style={{ flex: 0.8, fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Profile</Text>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              {hamburgerIcon}
            </TouchableOpacity>
          </View>

          {/* Nav Title and HamburgerMenu */}

          {/* This is main Container */}

          <View style={{ flex: 0.92, backgroundColor: 'transparent' }}>
            <SectionList
              ListHeaderComponent={this.renderHeaderComponent}
              //ListFooterComponent={this.renderFooterComponent}
              ItemSeparatorComponent={this.separator}
              renderSectionHeader={({ section }) => <Text style={{ backgroundColor: 'transparent', fontSize: 20, padding: 0, color: '#FF5050', fontWeight: '200', margin: 15 }}> {section.title} </Text>}

              sections={profileItemsAndProperties}
              renderItem={({ item, index }) => {
                return (
                  <SectionListItems item={item} index={index} currentUser = {this.state.currentUser}/>
                )
              }}
              keyExtractor={(item, index) => index}
            />

            <ActionButton
              buttonColor="antiquewhite"
              renderIcon={() => logout}
              onPress={() => {
                this.props.navigation.pop()
              }}
            />
          </View>

          {/* This is main Container */}
        </View>
      </SafeAreaView>
    );
  }
}
