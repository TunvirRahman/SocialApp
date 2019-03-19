import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, SectionList, TextInput, Image, Dimensions } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import ActionButton from "react-native-action-button";
import LinearGradient from 'react-native-linear-gradient';
import Feather from "react-native-vector-icons/Feather";

const logout = <Feather name="log-out" size={30} color="blue"></Feather>

const hamburgerIcon = <FontAwesomeIcon name="bars" size={30} color="blue"></FontAwesomeIcon>

const currentUser = {
  Email: "Sundor@gmail.com",
  FirstName: "Sundor",
  JobTitle: "CEO",
  LastName: "Pichai",
  password: " ",
  PhoneNo: "0973223234",
  ProfileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  ResidenceCountry: "India"
}

const profileItemsAndProperties = [
  {

    title: "INFO",
    data: [
      {
        itemName: "First Name",
      }, {
        itemName: "Last Name",
      },
      {
        itemName: "Email",
      }, {
        itemName: "Country",
      }, {
        itemName: "Phone",
      }, {
        itemName: "CHANGE PASSWORD",
      },
    ],
  },
  {

    title: "CONFIRM PASSWORD",
    data: [
      {
        itemName: "Old Password",
      }, {
        itemName: "New Password",
      },
      {
        itemName: "Confirm New Password",
      }
    ],
  }
];
const screen = Dimensions.get("window")


class SectionListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ backgroundColor: 'blue',flexDirection:'row',margin:15,justifyContent:'space-around',alignItems:'flex-start' }}>
        <Text style={{fontSize:20, color:'lightgray',backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>{this.props.index}</Text>
        <TextInput style={{fontSize:20, color:'black',backgroundColor:'red'}}
          placeholder={currentUser.FirstName}
        />
      </View>
    )
  }
}

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    console.log(currentUser)
  }

  renderHeaderComponent = () => {
    return (
      <View style={{ backgroundColor: 'red', height: 200, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 125, width: 125, borderRadius: 64 }}
          source={{ uri: "https://randomuser.me/api/portraits/men/3.jpg" }}
        />
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
          <Text style={{ fontSize: 18, fontFamily: 'Gill Sans', textAlign: 'center', margin: 10, color: '#ffffff', backgroundColor: 'transparent' }} onPress={() => { }}>
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
             renderSectionHeader={ ({section}) => <Text style={{backgroundColor : 'transparent',fontSize : 20,padding: 0,color: '#FF5050',fontWeight: '200',margin:15}}> { section.title } </Text> }
            
              sections={profileItemsAndProperties}
              renderItem={({ item, index }) => {
                return (
                  <SectionListItems item={item} index={index}/>
                )
              }}
              keyExtractor={ (item, index) => index }
            />

            <ActionButton
              buttonColor="transparent"
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
