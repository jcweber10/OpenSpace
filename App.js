import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, Slider, SliderComponent, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import { db } from "./config/db"
import { Location } from "./Location"

class HomeScreen extends React.Component {
  render() {

    let pic = {
      uri:
        "https://usab.site-ym.com/resource/events/20161103_131928_28954.jpg"
    };


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Image source={pic} style={styles.picTest} />


        <TouchableOpacity
          style={styles.buttonfinal}
          onPress={() => this.props.navigation.navigate('Details')}
        >
          <Text style={styles.buttonText2}>Report Status</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonfinal}
          onPress={() => this.props.navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText1}>Get Status</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
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

  renderLocation(location) {
    return <Location
      name={location} />;
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.headerText}>Pick the Location You Want to Know About</Text>

          {this.renderLocation("Rams")}
          {this.renderLocation("Fetzer")}
          {this.renderLocation("Woollen")}
          {this.renderLocation("Hooker")}
          {this.renderLocation("SRC")}

        </ScrollView>
      </SafeAreaView>
    );
  }


  changeDimensions = () => {
    this.setState({ height: 0 }, { width: 0 });
  }
}


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = StyleSheet.create({

  picTest: {
    width: 200,
    height: 200,
    borderWidth: 7,
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonfinal: {
    backgroundColor: "#33adff",
    padding: 5,
    width: 100,
    height: 100,
    marginLeft: 7,
    marginTop: 60,
    borderRadius: 5,
    borderWidth: 7,
    borderColor: "#aaa",
  },
  buttonText2: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    paddingTop: 25,
    paddingLeft: 15,
    paddingBottom: 15

  },

  headerText: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20
  },

  buttonText1: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    paddingTop: 25,
    paddingLeft: 0,
    paddingBottom: 10

  },



  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5eb4ff",
    padding: 2,
    marginBottom: 10,
    borderRadius: 5,
    marginLeft: "4%",
    marginRight: "4%"
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
    backgroundColor: "#001e4c"
  },
  buttonText: {
    fontSize: 27,
    color: "white",
    textAlign : 'center',
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
  }
})
