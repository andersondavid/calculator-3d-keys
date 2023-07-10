import { View, StyleSheet } from "react-native";
import { Key } from "./Key";

export function KeyBoard({ state }) {
  const { calcData, setCalcData } = state;

  function handleKeyPress(key) {
    if (key == "clear") {
      setCalcData("");
    } else if (key == "bksp") {
      setCalcData(prev => prev.slice(0, -1))
    } else {
      setCalcData((prev) => prev + key);
    }
  }

  return (
    <View>
      <View style={style.keyRow}>
        <Key
          innerText="<"
          type="operation"
          handleKeyPress={handleKeyPress}
          keyDigit="bksp"
        />
        <Key
          innerText="C"
          type="operation"
          handleKeyPress={handleKeyPress}
          keyDigit="clear"
        />
        <Key innerText="%" type="operation" />
        <Key
          innerText="/"
          type="operation"
          handleKeyPress={handleKeyPress}
          keyDigit="/"
        />
      </View>
      <View style={style.keyRow}>
        <Key innerText="1" handleKeyPress={handleKeyPress} keyDigit="1" />
        <Key innerText="2" handleKeyPress={handleKeyPress} keyDigit="2" />
        <Key innerText="3" handleKeyPress={handleKeyPress} keyDigit="3" />
        <Key
          innerText="*"
          type="operation"
          handleKeyPress={handleKeyPress}
          keyDigit="*"
        />
      </View>
      <View style={style.keyRow}>
        <Key innerText="4" handleKeyPress={handleKeyPress} keyDigit="4" />
        <Key innerText="5" handleKeyPress={handleKeyPress} keyDigit="5" />
        <Key innerText="6" handleKeyPress={handleKeyPress} keyDigit="6" />
        <Key
          innerText="-"
          type="operation"
          handleKeyPress={handleKeyPress}
          keyDigit="-"
        />
      </View>
      <View style={style.keyRow}>
        <Key innerText="7" handleKeyPress={handleKeyPress} keyDigit="7" />
        <Key innerText="8" handleKeyPress={handleKeyPress} keyDigit="8" />
        <Key innerText="9" handleKeyPress={handleKeyPress} keyDigit="9" />
        <Key
          innerText="+"
          type="operation"
          handleKeyPress={handleKeyPress}
          keyDigit="+"
        />
      </View>
      <View style={style.keyRow}>
        <Key innerText="." handleKeyPress={handleKeyPress} keyDigit="." />
        <Key innerText="0" handleKeyPress={handleKeyPress} keyDigit="0" />
        <Key innerText="," handleKeyPress={handleKeyPress} keyDigit="," />
        <Key
          innerText={"="}
          type="equal"
          handleKeyPress={handleKeyPress}
          keyDigit="equal"
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  keyRow: {
    flexDirection: "row",
    height: 80,
  },
});
