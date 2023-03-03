import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import {Chat, Heart, PlusCircle} from '../constants/icons';
const NewsFeed = ({item,navigate}) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => {navigate.navigate('Detail' ,{item:item})}}>
      <View style={styles.title}>
        <View style={styles.infoGroup}>
          <Image style={[styles.avatar]} source={{uri: item.avatar}}></Image>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <SharedElement id={`item.${item.id}.photo`} >
      <Image style={[styles.image,{resizeMode: 'stretch'}]} source={{uri: item.image}} />
      </SharedElement>
      <View style={styles.actionGroup}>
        <View style={styles.challengeAction}>
          <TouchableOpacity style={{width: 20}}>
          <PlusCircle />
          </TouchableOpacity>
        </View>
        <View style={[styles.socialAction, {columnGap: 18}]}>
          <View style={styles.socialAction}>
            <Text style={styles.socialCount}>{item.numComt}</Text>
            <TouchableOpacity>
              <Chat />
            </TouchableOpacity>
          </View>
          <View style={styles.socialAction}>
            <Text style={styles.socialCount}>{item.numLike}</Text>
            <TouchableOpacity>
              <Heart />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  infoGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignItems: 'center',
  },
  name: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    // backgroundColor:'red'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 200,
  },
  image: {
    width: '100%',
    height: 224,
  },
  actionGroup: {
    flexDirection: 'row',
    paddingVertical: 14.7,
    paddingHorizontal: 16,
  },
  challengeAction: {
    flex: 1,
    // backgroundColor:'red'
  },
  socialAction: {
    flexDirection: 'row',
    // columnGap: 18
  },
  socialCount: {
    color: '#828282',
    fontSize: 14,
    fontWeight: '400',
    marginRight: 8,
  },
  date: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: '400',
  },
});
