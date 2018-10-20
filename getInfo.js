import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

export default class GetInfo extends React.Component {
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
    textAlign: 'center',
    // marginBottom : 5
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
