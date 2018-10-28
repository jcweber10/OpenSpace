import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { db } from "../config/db"

export default class LocationAndHiddenRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5,
      name: '',
      color: '#001e4c',
      isVis: false,
    }
  }
  getVal(val) {
    //console.warn(val);
  }
  makeVis = (event) => {
    this.setState({
      number: this.state.number,
      isVis: !this.state.isVis,
    })
  }
  render() {
    return (
      <View >
        <TouchableOpacity
          title="Press Me"
          style={styles.locationButton}
          onPress={this.makeVis}
        >
          <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableOpacity>
        <Text style={this.state.isVis ? styles.subTextAnswer : styles.hiddenText}> {lastRatingOfLocation(this.props.name)} </Text>
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
  locationButton: {
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
    textAlign: 'center',
  },

  hiddenText: {
    height: 0,
  },
  subTextAnswer: {
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

export let lastRatingOfLocation = (locName) => {
  let filtered = db.ref().child("entries").orderByChild("location").equalTo(locName).limitToLast(3);
  let rating;
  filtered.on("child_added", snapshot => {
    rating = snapshot.val().rating;
  });
  return rating;
}

export { LocationAndHiddenRating };