import { useContext, memo } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";

import { AppContext } from "../reducer/store";

function Key({ innerText, style = "normal", keyDigit }) {
  let customStyleKey = {};
  let customStyleText = {};
  if (style == "operation") {
    customStyleText = { color: "#f59e0b" };
  } else if (style == "equal") {
    customStyleKey = { backgroundColor: "#f59e0b", borderColor: "#fcd34d" };
    customStyleText = { color: "white" };
  }

  const { dispatch } = useContext(AppContext);

  console.log("Tecla re-rederizada: ", keyDigit);

  const handleKeyPress = () => {
    dispatch({ type: keyDigit });
  };

  return (
    <View style={styles.keyContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        style={{ borderRadius: 30 }}
        underlayColor="#ddd"
        onPress={() => handleKeyPress()}
      >
        <Shadow
          style={styles.shadowContainer}
          paintInside={true}
          distance={2}
          offset={[1, 2]}
        >
          <View style={[styles.key, customStyleKey]}>
            <LinearGradient
              // Background Linear Gradient
              end={{ x: 0.55, y: 0.8 }}
              colors={["rgba(110,110,110,0.2)", "transparent"]}
              style={styles.keyBackground}
            />
            <Text style={[styles.keyText, customStyleText]}>{innerText}</Text>
          </View>
        </Shadow>
      </TouchableHighlight>
    </View>
  );
}

export default memo(Key, (p, n) => {
  return p.innerText == n.innerText
});

const styles = StyleSheet.create({
  shadowContainer: {
    width: "100%",
  },
  keyBackground: {
    position: "absolute",
    borderRadius: 30,
    height: "100%",
    width: "100%",
  },
  keyContainer: {
    flexGrow: 1,
    height: "100%",
    padding: 4,
    paddingHorizontal: 6,
  },
  key: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "#fefefe",
    position: "relative",
    borderWidth: 1,
    borderColor: "white",
  },
  keyText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#525252",
    width: "100%",
  },
});
