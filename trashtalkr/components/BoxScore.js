import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import BoxScoreRow from "./BoxScoreRow";

class BoxScore extends React.Component {
  constructor() {
    super();
    this.state = {
      yourTeam: "Your Shitty Team",
      theirTeam: "Their Shitty Team"
    };
  }

  render() {
    return (
      <View className="boxscore" style={styles.boxscore}>
        <Text style={styles.titleText}>
          {this.state.yourTeam}
          {"\n"}
          {"\n"}
        </Text>

        <View className="myteam" style={styles.myteam}>
          {this.props.data["hometeam"].map(player => (
            <BoxScoreRow
              key={player[0]["lastname"]}
              firstname={player[0]["firstname"]}
              lastname={player[0]["lastname"]}
              score={player[0]["score"]}
            />
          ))}
        </View>

        <Text style={styles.titleText}>
          {this.state.theirTeam}
          {"\n"}
          {"\n"}
        </Text>
        <View className="yourteam" style={styles.yourteam}>
          {this.props.data["awayteam"].map(player => (
            <BoxScoreRow
              key={player[0]["lastname"]}
              firstname={player[0]["firstname"]}
              lastname={player[0]["lastname"]}
              score={player[0]["score"]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxscore: {
    width: "100%",
    height: "90%"
  },
  myteam: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 10
  },
  yourteam: {
    flex: 1,
    backgroundColor: "white"
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});


export default BoxScore;
