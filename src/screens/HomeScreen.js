import { useIsFocused } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import FilterTabBar from '../components/filterTabBar';
import MessageBtn from '../components/messageBtn';
import NewsFeed from '../components/newsFeed';
import SearchBar from '../components/searchBar';
import {FAKE_DATA} from '../constants/fakeData';
import { tabBarRef } from '../navigation/tabBottom';
const Home = ({...props}) => {
  // console.log({props});
  const [selectFilter, setSelectFilter] = useState(0);
  const focus = useIsFocused()
  // console.log(focus);
  useEffect(()=>{
    if(focus){
      if(tabBarRef.current != null || tabBarRef.current != undefined){
        tabBarRef.current.setVisible(true)
      }
    }
    // else{
    //   if(tabBarRef.current != null || tabBarRef.current != undefined){
    //     tabBarRef.current.setVisible(false)
    //   }
    // }
  },[tabBarRef, focus])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <SharedElement id={`search`} style={{flex:1}}>
            <SearchBar navigation={props.navigation} />
          </SharedElement>
          <MessageBtn />
        </View>
        <View style={{marginHorizontal: -20}}>
          <FilterTabBar
            items={[
              {value: 0, label: 'Popular'},
              {value: 1, label: 'Trending'},
              {value: 2, label: 'Following'},
            ]}
            selected={selectFilter}
            setSelected={setSelectFilter}
          />
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={FAKE_DATA}
          renderItem={({item}) => (
            <NewsFeed item={item} navigate={props.navigation} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100, paddingTop: 18}}
          ItemSeparatorComponent={() => (
            <View style={{height: 16}} />
          )}></FlatList>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'c',
    // elevation: 5,
    backgroundColor: '#F6F7F9',
    // paddingVertical: 20,
    // paddingHorizontal: 16,
    // paddingBottom: 100
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingBottom: 0,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignContent:'center'
    columnGap: 16,
    paddingBottom: 12,
    // backgroundColor:'red'
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F6F7F9',
    // marginTop: 19,
  },
});
