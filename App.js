import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { db } from "./config/db"

export default class App extends React.Component {
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
  };
}

export class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5,
      name: '',
      color: '#001e4c',
      isVis:false,
    }
  }
  getVal(val) {
    //console.warn(val);
  }
  makeVis = (event) => {
    this.setState({
      number: this.state.number,
      isVis:!this.state.isVis,
    })

    //
    console.log("pressed")
    console.log(this.state)
    console.log(this.state.number)
  }
  render() {
    return (
      <View >
        <TouchableOpacity
          title="Press Me"
          style={styles.button}
          onPress={this.makeVis}
        >
          <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableOpacity>

        <Text style = {this.state.isVis ? styles.subTextAnswer: styles.hiddenText}> 5 </Text>

        </View>
    );
  }
}

const styles = StyleSheet.create({
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

  hiddenText: {
    height:0,
  },
  subTextAnswer:{
    color: "white",
    textAlign: 'center',
    marginBottom: 5,
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20
  },

  
});
