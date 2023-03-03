import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Send} from '../constants/icons';

const MessageBtn = () => {
  return (
    <TouchableOpacity style={styles.messageBtn}>
      <View style={{transform:[{
      translateX: -1
      // translateY:-1
    },{translateY: 1}]}}>
        <Send />
      </View>
    </TouchableOpacity>
  );
};
export default MessageBtn;

const styles = StyleSheet.create({
  messageBtn: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#F3F5F7',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
});
