import { View, StyleSheet } from "react-native";

import Key from "./Key";

function KeyBoard() {


  return (
    <View>
      <View style={style.keyRow}>
        <Key
          innerText="<"
          style="operation"
          keyDigit="bksp"
          key="bksp"
        />
        <Key
          innerText="C"
          style="operation"
          keyDigit="clear"
          key="clear"
        />
        <Key
          innerText="%"
          style="operation"
          keyDigit="percent"
          key="percent"
        />
        <Key
          innerText="/"
          style="operation"
          keyDigit="/"
          key="/"
        />
      </View>
      <View style={style.keyRow}>
        <Key
          innerText="1"
          keyDigit="1"
          key="1"
        />
        <Key
          innerText="2"
          keyDigit="2"
          key="2"
        />
        <Key
          innerText="3"
          keyDigit="3"
          key="3"
        />
        <Key
          innerText="*"
          style="operation"
          keyDigit="*"
          key="*"
        />
      </View>
      <View style={style.keyRow}>
        <Key
          innerText="4"
          keyDigit="4"
          key="4"
        />
        <Key
          innerText="5"
          keyDigit="5"
          key="5"
        />
        <Key
          innerText="6"
          keyDigit="6"
          key="6"
        />
        <Key
          innerText="-"
          style="operation"
          keyDigit="-"
          key="-"
        />
      </View>
      <View style={style.keyRow}>
        <Key
          innerText="7"
          keyDigit="7"
          key="7"
        />
        <Key
          innerText="8"
          keyDigit="8"
          key="8"
        />
        <Key
          innerText="9"
          keyDigit="9"
          key="9"
        />
        <Key
          innerText="+"
          style="operation"
          keyDigit="+"
          key="+"
        />
      </View>
      <View style={style.keyRow}>
        <Key
          innerText="."
          keyDigit="."
          key="."
        />
        <Key
          innerText="0"
          keyDigit="0"
          key="0"
        />
        <Key
          innerText=","
          keyDigit=","
          key=","
        />
        <Key
          innerText={"="}
          style="equal"
          keyDigit="equal"
          key="equal"
        />
      </View>
    </View>
  );
}

export default KeyBoard;

const style = StyleSheet.create({
  keyRow: {
    flexDirection: "row",
    height: 80,
  },
});
