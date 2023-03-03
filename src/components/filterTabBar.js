import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FilterTabBar = ({items, setSelected, selected}) => {
  // const [selected, setSelected] = useState(0)
  return (
    <View style={styles.container}>
      {items.map(e => {
        return (
          <TouchableOpacity key={e.value} style={selected === e.value ? styles.buttn : styles.buttnDeActive} onPress={()=>setSelected(e.value)}>
            <Text style={selected === e.value ? styles.label : styles.labelDeActive}>{e.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default FilterTabBar;

const styles=StyleSheet.create({
  container:{
    backgroundColor: "white",
    // flex:1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  buttn:{
    flex:1,
    backgroundColor: '#F1F1FE',
    borderRadius:6,
    justifyContent: 'center',
    alignContent:'center',
    // paddingHorizontal:10,
    paddingVertical: 10
  },
  buttnDeActive:{
    flex:1,
    // paddingHorizontal:4,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius:6,
    justifyContent: 'center',
    alignContent:'center'
  },
  label:{
    // flex:1,
    color: '#5151C6',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  labelDeActive:{
    // flex:1,
    color: '#BDBDBD',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})
