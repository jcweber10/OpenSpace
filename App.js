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
import { db } from "./config/db"
import Location from "./Location"

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
          <Text style={styles.headerText}>Please Pick Your Location</Text>

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

// export class Location extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 1,
//       name: "test"
//     }
//   }
//   getVal(val) {
//     console.warn(val);
//   }
//   makeVis = (event) => {
//     let day = new Date();
//     let date = day.getFullYear().toString() + (day.getMonth() > 9 ? "" : "0") + day.getMonth().toString() + (day.getDay() > 9 ? "" : "0") + day.getDay().toString() + (day.getHours() > 9 ? "" : "0") + day.getHours().toString() + (day.getMinutes() > 9 ? "" : "0") + day.getMinutes().toString() + (day.getSeconds() > 9 ? "" : "0") + day.getSeconds().toString();
//     writeNewPost(this.props.name, this.state.number, date);
//     console.log("pressed")
//     console.log(this.props.name)
//     console.log(this.state.number)
//   }
//   render() {
//     return (
//       <View >
//         <TouchableOpacity
//           title="Press Me"
//           style={styles.button}
//           onPress={this.makeVis}
//         >
//           <Text style={styles.buttonText}>{this.props.name}</Text>
//         </TouchableOpacity>

//         <Slider
//           style={styles.slider}
//           step={1}
//           minimumValue={1}
//           maximumValue={10}
//           minimumTrackTintColor={"white"}
//           maximumTrackTintColor={"white"}
//           thumbTintColor={"#fff"}
//           onValueChange={val => this.setState({ number: val })}
//           onSlidingComplete={val => this.getVal(val)}

//         //height = {0}

//         />

//         <View style={{ flexDirection: "row" }}>
//           <Text style={styles.leftTick}> 1</Text>
//           <Text style={styles.rightTick}>10</Text>
//         </View>
//       </View>
//     );
//   }
// }

// export class SliderAndSubmit extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <View>
//         <Slider
//           style={styles.slider}
//           step={1}
//           minimumValue={1}
//           maximumValue={10}
//           minimumTrackTintColor={"white"}
//           maximumTrackTintColor={"white"}
//           thumbTintColor={"#fff"}
//         //height = {0}

//         />

//         <View height={0} style={{ flexDirection: "row" }}>
//           <Text style={styles.leftTick}> 1</Text>
//           <Text style={styles.rightTick}>10</Text>
//         </View>
//       </View>
//     )
//   }
// }


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




export function writeNewPost(location, rating, timestamp) {
  // A post entry.
  var postData = {
    location: location,
    rating: rating,
    timestamp: timestamp,
  };

  // Get a key for a new Post.
  var newPostKey = db.ref().child('entries').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/entries/' + newPostKey] = postData;

  return db.ref().update(updates);
}