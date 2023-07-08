import { View, StyleSheet } from 'react-native';
import { Key } from './Key';

export function KeyBoard() {
  return (
    <View>
      <View style={style.keyRow}>
        <Key innerText={'<'} type='operation'/>
        <Key innerText={'C'} type='operation'/>
        <Key innerText={'%'} type='operation'/>
        <Key innerText={'/'} type='operation'/>
      </View>
      <View style={style.keyRow}>
        <Key innerText={'1'}/>
        <Key innerText={'2'}/>
        <Key innerText={'3'}/>
        <Key innerText={'*'} type='operation'/>
      </View>
      <View style={style.keyRow}>
        <Key innerText={'4'}/>
        <Key innerText={'5'}/>
        <Key innerText={'6'}/>
        <Key innerText={'-'} type='operation'/>
      </View>
      <View style={style.keyRow}>
        <Key innerText={'7'}/>
        <Key innerText={'8'}/>
        <Key innerText={'9'}/>
        <Key innerText={'+'} type='operation'/>
      </View>
      <View style={style.keyRow}>
        <Key innerText={'.'}/>
        <Key innerText={'0'}/>
        <Key innerText={','}/>
        <Key innerText={'='} type='equal'/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  keyRow: {
    flexDirection: 'row',
    height: 80,
  },
});
