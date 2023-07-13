import { useState, useReducer } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import KeyBoard from "./src/components/KeyBoard";
import { Display } from "./src/components/Display";

import { AppContext, initialState, reducer } from "./src/reducer/store";

export default function App() {
  const [calcData, setCalcData] = useState("");
  const [result, setResult] = useState("");


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <Display primaryData={calcData} secondaryData={result} />
        <KeyBoard />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
