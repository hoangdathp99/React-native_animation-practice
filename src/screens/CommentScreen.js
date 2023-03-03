import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../components/backBtn';
import {EditIcon, UploadIcon} from '../constants/icons';
import CommentItem from '../components/commentItem';
import { SharedElement } from 'react-navigation-shared-element';
const CommentScreen = ({route}) => {
  const flatListRef = useRef(null);
  const {item} = route.params;
  const [text, setText] = useState('');
  const [arr, setArr] = useState([1, 2, 3, 4])
  const addcmt = () =>{
    setArr((arr)=>[...arr, arr[arr.length-1]+1])
  }
  useEffect(()=>{
    if (flatListRef.current && arr && arr.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  },[arr, flatListRef ])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArea}>
          <BackBtn />
        </View>
        <View style={styles.centerHeader}>
          <Text style={styles.titleHeader}>Comments</Text>
        </View>
        <View style={styles.rightHeader}>
          <View>
            <EditIcon />
          </View>
        </View>
      </View>
      {/* <View style={styles.content}> */}
      <FlatList
      sc
      ref={flatListRef}
      // initialScrollIndex={arr.length - 1}
        data={arr}
        style={styles.description}
        renderItem={(e => (
          <CommentItem item={item} key={e} />
        ))}
        eyExtractor={item => item}
        ListFooterComponent={<View style={{height:60}}></View>}
        >
        
      </FlatList>
      <View style={styles.addCmtContainer}>
        {/* <Image style={styles.avatar} source={{uri: item.avatar}}></Image> */}
        <SharedElement id={`text_input`}>
          <TextInput
            placeholder="Type something"
            placeholderTextColor={'#BDBDBD'}
            textAlignVertical={'center'}
            value={text}
            onChangeText={setText}
            style={{
              padding: 0,
              paddingLeft: 5,
              width: 300,
            }}></TextInput>
        </SharedElement>
        <TouchableOpacity onPress={addcmt}>
          <Text>
          Post
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};
export default CommentScreen;
const styles = StyleSheet.create({
  container: {
    // height:100,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  backArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerHeader: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
  },
  titleHeader: {
    textAlignVertical: 'center',
    //styleName: Title 01;

    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  description: {
    // flex:1,
    paddingHorizontal: 16,
    // paddingBottom: 60
    // marginBottom: 55
  },
  addCmtContainer: {
    justifyContent:'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  // addCmtWrapper: {
  //   flex: 1,

  //   marginLeft: 14,
  // },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 200,
  },
});
