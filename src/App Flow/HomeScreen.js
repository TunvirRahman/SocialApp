import React, { Component } from 'react';
import { SafeAreaView,View, Text,TouchableOpacity,ActivityIndicator} from 'react-native';
import Axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import FirebaseService from "./../Service and Data/FirebaseService";

const hamburgerIcon = <FontAwesomeIcon name = "bars" size = {30} color = "blue"></FontAwesomeIcon>

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers:{},
      isLoading:true
    }
  }


  componentDidMount(){
    let service = new FirebaseService()
    service.loadUserFromCountry("india").then(users=>{
      this.setState({
        allUsers:users,
        isLoading:false
      })
    })
  }

  render() {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'white'}}>
      {console.log(this.state.allUsers)}
      {/* Nav Title and HamburgerMenu */}

          <View style = {{flex:0.08,justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'transparent'}}>
            <Text style = {{flex:0.8,fontSize:20,textAlign:'center',fontWeight: 'bold'}}>Home</Text>
            <TouchableOpacity onPress = {()=>this.props.navigation.toggleDrawer()}>
              {hamburgerIcon}
            </TouchableOpacity>
          </View>

      {/* Nav Title and HamburgerMenu */}

      {/* MainContents Goes here */}
      
        <View style= {{flex:0.92,backgroundColor:'gray',alignItems:'center'}}>
            {this.state.isLoading? <ActivityIndicator color = "blue" size = 'large'></ActivityIndicator>:<Text>List of people with data will load here</Text>}
            
        </View>

      {/* MainContents Goes here */}
      </SafeAreaView>
    );
  }
}
