import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { LocationAndSlider } from "./components/LocationAndSlider"
import { LocationAndHiddenRating } from "./components/LocationAndHiddenRating";
console.disableYellowBox = true;
const NAVY = '#001e4c'
class HomeScreen extends React.Component {
  render() {

    let pic = {
      uri:
        "https://usab.site-ym.com/resource/events/20161103_131928_28954.jpg"
    };


    return (
      <View style={styles.homeScreen}>

        <Image source={pic} style={styles.logo} />


        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('ReportStatus')}
        >
          <Text style={styles.buttonText}>Report Status</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('GetStatus')}
        >
          <Text style={styles.buttonText}>Get Status</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

class GetStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetzer: {
        name: "Fetzer",
        value: 0,
        visible: 0
      },
      rams: {
        name: "Rams",
        value: 0,
        visible: 0
      },
      woollen: {
        name: "Woollen",
        value: 0,
        visible: 0
      },
      hooker: {
        name: "Hooker",
        value: 0,
        visible: 0
      },
      src: {
        name: "SRC",
        value: 0,
        visible: 0
      }
    };
  }

  handlePress(e) {
    console.log("Button pressed");
  }

  renderLocationAndHiddenRating(location) {
    return <LocationAndHiddenRating
      name={location} />;
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.headerText}>Pick the Location You Want to Know About</Text>

          {this.renderLocationAndHiddenRating("Rams")}
          {this.renderLocationAndHiddenRating("Fetzer")}
          {this.renderLocationAndHiddenRating("Woollen")}
          {this.renderLocationAndHiddenRating("Hooker")}
          {this.renderLocationAndHiddenRating("SRC")}

        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

class ReportStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetzer: {
        name: "Fetzer",
        value: 0,
        visible: 0
      },
      rams: {
        name: "Rams",
        value: 0,
        visible: 0
      },
      woollen: {
        name: "Woollen",
        value: 0,
        visible: 0
      },
      hooker: {
        name: "Hooker",
        value: 0,
        visible: 0
      },
      src: {
        name: "SRC",
        value: 0,
        visible: 0
      }
    };
  }


  handlePress(e) {
    console.log("Button pressed");
  }

  renderLocationAndSlider(location) {
    return <LocationAndSlider
      name={location} />;
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.headerText}>Pick the Location You Want to Tell About</Text>

          {this.renderLocationAndSlider("Rams")}
          {this.renderLocationAndSlider("Fetzer")}
          {this.renderLocationAndSlider("Woollen")}
          {this.renderLocationAndSlider("Hooker")}
          {this.renderLocationAndSlider("SRC")}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}


const HomeStack = createStackNavigator({
   Home:{
     screen:HomeScreen,
     navigationOptions:{
      header:null,
    }
   },
  });
  const GetStatusStack = createStackNavigator({
    GetStatus:{
      screen:GetStatus,
      navigationOptions:{
       header:null,
       footer:null
     }
    },
   });
   const ReportStatusStack = createStackNavigator({
    ReportStatus:{
      screen:ReportStatus,
      navigationOptions:{
       header:null,
     }
    },
   });

export default createSwitchNavigator(
  {
    Home: HomeStack,
    GetStatus: GetStatusStack,
    ReportStatus: ReportStatusStack,
  },
  {
    initialRouteName:'Home'
  }
);

const styles = StyleSheet.create({

  logo: {
    width: 200,
    height: 200,
    borderWidth: 7,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: '10%',
    marginBottom: '2%'
  },
  button: {
    backgroundColor: "#5eb4ff",
    margin: '2%',
    width: '80%',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#5eb4ff",
    padding: 2,
    color: "#000",
    marginBottom: 4,
    borderRadius: 5,
    marginLeft: "30%",
    marginRight: "30%"
  },
  slider: {
    flex: 1,
    alignItems: "center"
  },
  scroll: {
    paddingVertical: 20,
    backgroundColor: NAVY,
  },
  buttonText: {
    fontSize: 27,
    color: "white",
    textAlign: 'center',
    padding: '5%',
    // marginBottom : 5
  },
  subText: {
    fontSize: 15,
    color: "white"
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20
  },
  leftTick: {
    flex: 1,
    marginLeft: 15,
    alignSelf: "stretch",
    flexDirection: "row",
    color: "white",
    textAlign: "left"
    // justifyContent: 'space-between'
  },
  rightTick: {
    flex: 1,
    marginRight: 15,
    alignSelf: "stretch",
    flexDirection: "row",
    color: "white",
    textAlign: "right"
    // justifyContent: 'space-between'
  },
  homeScreen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: NAVY,
    height: '100%',
  },
  safeArea:{
    flex: 1, 
    backgroundColor: NAVY,
     alignItems:'center' 
  }
})
