import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CommentItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: item.avatar}}></Image>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#212121',
          marginBottom: 4
        }}>
        {item.name}
      </Text>
      <Text style={{
          fontSize: 14,
          fontWeight: '400',
          color: '#212121',
          marginBottom: 10
        }}>Great shot! I love it</Text>
      <Text style={{
          fontSize: 12,
          fontWeight: '400',
          color: '#828282',
          // marginBottom: 4
        }}>{item.date}</Text>
    </View>
  );
};
export default CommentItem;
const styles = StyleSheet.create({
  container: {
    // height: 200,
    backgroundColor: '#F6F7F9',
    borderRadius: 8,
    overflow: 'hidden',
    paddingVertical: 16,
    paddingRight: 30,
    paddingLeft: 62,
    marginBottom: 10
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 200,
    position: 'absolute',
    top: 16,
    left: 16,
  },
});
