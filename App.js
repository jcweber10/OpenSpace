import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Slider,
  SliderComponent,
  SafeAreaView,
  Button,
  TouchableOpacity
} from "react-native";
//import { fb } from "./fb.js";
// import firebase from "react-native-firebase";

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

  renderLocation(location) {
    return <Location name={location} />;
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.headerText}>Please Pick Your Location</Text>

          {this.renderLocation("Rams")}
          {this.renderLocation("Fetzer")}
          {this.renderLocation("Woollen")}
          {this.renderLocation("Hooker")}
          {this.renderLocation("SRC")}
          {/* renderLocation("test"); */}

          {/* <TouchableOpacity style={styles.button} onPress={this.showFetzer}>
            <Text style={styles.buttonText}>Fetzer Hall</Text>
          </TouchableOpacity>

          <Slider
            style={styles.slider}
            step={1}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={"white"}
            maximumTrackTintColor={"white"}
            thumbTintColor={"#fff"}
          />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.leftTick}> 1</Text>
            <Text style={styles.rightTick}>10</Text>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.subText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Woollen Gym</Text>
          </TouchableOpacity>

          <Slider
            style={styles.slider}
            step={1}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={"white"}
            maximumTrackTintColor={"white"}
            thumbTintColor={"#fff"}
          />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.leftTick}> 1</Text>
            <Text style={styles.rightTick}>10</Text>
          </View>

          <TouchableOpacity label={"rams"} style={styles.button}>
            <Text style={styles.buttonText}>Ram's Gym</Text>
          </TouchableOpacity>

          <Slider
            style={styles.slider}
            step={1}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={"white"}
            maximumTrackTintColor={"white"}
            thumbTintColor={"#fff"}
          />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.leftTick}> 1</Text>
            <Text style={styles.rightTick}>10</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hooker Fields</Text>
          </TouchableOpacity>

          <Slider
            style={styles.slider}
            step={1}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={"white"}
            maximumTrackTintColor={"white"}
            thumbTintColor={"#fff"}
          />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.leftTick}> 1</Text>
            <Text style={styles.rightTick}>10</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SRC</Text>
          </TouchableOpacity>

          <Slider
            style={styles.slider}
            step={1}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={"white"}
            maximumTrackTintColor={"white"}
            thumbTintColor={"#fff"}
          />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.leftTick}> 1</Text>
            <Text style={styles.rightTick}>10</Text>
          </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
  makeVis(event){
    //this.setState({height:20})
    console.log("pressed")
  }

  changeDimensions = () => {
    this.setState({ height: 0 }, { width: 0 });
  };
}

export class Location extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View >
        <TouchableOpacity  
  title="Press Me" style={styles.button}>
          <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableOpacity>

        <Slider onPress={this.makeVis}
          style={styles.slider}
          step={1}
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor={"white"}
          maximumTrackTintColor={"white"}
          thumbTintColor={"#fff"}
          //height = {0}
          
        />

        <View height = {0} style={{ flexDirection: "row" }}>
          <Text style={styles.leftTick}> 1</Text>
          <Text style={styles.rightTick}>10</Text>
        </View>
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
    color: "white"
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
});
