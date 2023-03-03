import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../components/backBtn';
import {
  Chat,
  EyeIconPurple,
  Heart,
  HeartBlack,
  PlusCircle,
  PlusCircleBlack,
  UploadIcon,
} from '../constants/icons';
import {SharedElement} from 'react-navigation-shared-element';
import CommentItem from '../components/commentItem';
import {tabBarRef} from '../navigation/tabBottom';

const DetailScreen = ({route, navigation}) => {
  // useEffect(()=>{
  //     if(tabBarRef.current != null || tabBarRef.current != undefined){
  //       tabBarRef.current.setVisible(false)
  //     }
  // },[tabBarRef])
  const {item} = route.params;
  // console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArea}>
          <BackBtn />
        </View>
        <View style={styles.rightHeader}>
          <View>
            <HeartBlack />
          </View>
          <View>
            <PlusCircleBlack />
          </View>
          <View>
            <UploadIcon />
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.title}>
          <View style={styles.infoGroup}>
            <Image style={styles.avatar} source={{uri: item.avatar}}></Image>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            style={[styles.image, {resizeMode: 'stretch'}]}
            source={{uri: item.image}}
          />
        </SharedElement>
        <View style={styles.actionGroup}>
          <View style={styles.socialAction}>
            <Text style={styles.socialCount}>{item.numComt}</Text>
            <View>
              <EyeIconPurple />
            </View>
          </View>
          <View style={styles.socialAction}>
            <Text style={styles.socialCount}>{item.numComt}</Text>
            <TouchableOpacity>
              <Chat width={17} />
            </TouchableOpacity>
          </View>
          <View style={styles.socialAction}>
            <Text style={styles.socialCount}>{item.numLike}</Text>
            <TouchableOpacity>
              <Heart width={17} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.description}
        contentContainerStyle={{paddingBottom: 60}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#212121',
            marginBottom: 6,
          }}>
          Street portrait
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#828282',
            marginBottom: 16,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,
          neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,
          neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,
          neque cursus risus.
        </Text>
        {[1, 2, 3, 4, 5].map(e => (
          <CommentItem item={item} key={e} />
        ))}
      </ScrollView>
      <View style={styles.addCmtContainer}>
        <Image style={styles.avatar} source={{uri: item.avatar}}></Image>
        <TouchableOpacity
          style={styles.addCmtWrapper}
          onPress={() => navigation.navigate('Comment', {item: item})}>
          <SharedElement id={`text_input`}>
            <Text
              style={{
                textAlign: 'left',
                textAlignVertical: 'center',
                color: '#BDBDBD',
                fontSize: 14,
                fontWeight: '400',
              }}>
              Add a comment
            </Text>
          </SharedElement>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
// DetailScreen.sharedElement = (route, otherRoute, showing) => {
//   return [`circle_btn_${route.params.item.id}`]
// }
///NOTE: write like this will cause issue
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
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
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightHeader: {
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
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
    justifyContent: 'space-around',
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
  addCmtContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  addCmtWrapper: {
    flex: 1,

    marginLeft: 14,
  },
  description: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
});
