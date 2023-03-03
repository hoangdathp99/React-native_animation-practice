import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
  Text,
  Keyboard,
} from 'react-native';
import {Search} from '../constants/icons';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
const SearchBar = ({type = 'view', navigation}) => {
  const [searchText, setSearchText] = useState('');
  const navigationRef = useNavigation();
  const [startSearch, setStartSearch] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const AnimatedShared = Animated.createAnimatedComponent(SharedElement);
  const localInputRef = useRef();
  const collapse = scale.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '86%'],
  });
  useEffect(() => {
    // console.log(localInputRef.current);
    if (localInputRef.current) {
      Keyboard.addListener('keyboardDidHide', () => {
        localInputRef.current?.blur?.();
        // setStartSearch(false);
      });
    }
    return () => Keyboard.removeAllListeners;
  }, [localInputRef]);
  useEffect(() => {
    // console.log(startSearch);
    if (startSearch) {
      Animated.spring(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else if (!startSearch) {
      Animated.spring(scale, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [scale, startSearch]);
  return (
    <View style={{flexDirection: 'row'}}>
      <AnimatedShared
        style={[styles.container, {width: collapse}]}
        id={`search`}>
        <View
          style={{
            overflow: 'hidden',
            borderRadius: 30,
            borderColor: '#5151C6',
            borderWidth: startSearch ? 1 : 0,
            height: 37,
            // paddingVertical: 8,
            paddingHorizontal: 14,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F3F5F7',
            width: '100%',
            // transform: [{scaleX: 0.8},{translateX: -50}],
          }}
        />
      </AnimatedShared>
      <TouchableOpacity
        activeOpacity={1}
        disabled={type !== 'view'}
        onPress={() => {
          navigationRef.navigate('Search');
        }}
        style={{
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor:'red',
          height: '100%',
          paddingLeft: 10
          // transform: [{translateY: 5}, {translateX: 10}],
        }}>
        <SharedElement id="icon.search">
          <Search fill="#5151C6" />
        </SharedElement>
        <SharedElement id="text.input">
          <TextInput
            ref={localInputRef}
            onEndEditing={() => setStartSearch(false)}
            onFocus={() => setStartSearch(true)}
            onBlur={() => setStartSearch(false)}
            style={{padding: 0, paddingLeft: 5, width: 250}}
            onChangeText={e => setSearchText(e)}
            value={searchText}
            placeholder="Search"
            placeholderTextColor={'#BDBDBD'}
            textAlignVertical={'center'}
            editable={type !== 'view'}
          />
        </SharedElement>
      </TouchableOpacity>
      {startSearch && (
        <TouchableOpacity
          style={{justifyContent: 'center', marginLeft: 10}}
          onPress={() => navigationRef.goBack()}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flex: 1,
    // width: '100%',

    // backgroundColor: 'red',
    // overflow: 'hidden',
    // borderRadius: 30,
    // paddingVertical: 8,

    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelBtn: {
    color: '#333333',
    fontWeight: 400,
    fontSize: 14,
  },
});
