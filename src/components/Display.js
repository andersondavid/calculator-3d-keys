import { View, StyleSheet, Text } from "react-native";

export function Display({ primaryData, secondaryData }) {
  return (
    <View style={style.displayContainer}>
      <View style={style.primaryContainer}>
        <Text style={style.primaryTextContainer}>{primaryData}</Text>
      </View>
      {secondaryData && (
        <View style={style.secondaryContainer}>
          <Text style={style.secondaryTextContainer}>= {secondaryData}</Text>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  displayContainer: {
    padding: 5,
  },
  primaryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  primaryTextContainer: {
    position: "relative",
    fontSize: 50,
    textAlign: "right",
    color: "#404040",
  },
  secondaryContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  secondaryTextContainer: {
    fontSize: 30,
    textAlign: "right",
    color: "#525252",
  },
});
