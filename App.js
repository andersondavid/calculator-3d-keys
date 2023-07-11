import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import { KeyBoard } from "./src/components/KeyBoard";
import { Display } from "./src/components/Display";

import { core } from "./src/utils/core";

export default function App() {
  const [calcData, setCalcData] = useState("");
  const [result, setResult] = useState("");

  function calculate() {
    const result = core(calcData);
    setCalcData(String(result));
    setResult("");
  }

  useEffect(() => {
    const result = core(calcData);
    if (result) {
      setResult(result);
    } else if (calcData == "") {
      setResult("");
    }
  }, [calcData]);

  return (
    <View style={[styles.container, { backgroundColor: themeBg }]}>
      <Display primaryData={calcData} secondaryData={result} />
      <KeyBoard state={{ calcData, setCalcData }} calculate={calculate} />
    </View>
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
