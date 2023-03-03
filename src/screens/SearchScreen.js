import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import CateCard from "../components/cateCard";
import SearchBar from "../components/searchBar";
import { FAKE_CATE } from "../constants/fakeData";
import { tabBarRef } from "../navigation/tabBottom";

const SearchScreen = () =>{
//   useEffect(()=>{
//     if(tabBarRef.current != null || tabBarRef.current != undefined){
//       tabBarRef.current.setVisible(false)
//     }
// },[tabBarRef])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <SearchBar type="search"/>
      </View>
      <View style={{paddingHorizontal: 16}}>
      <FlatList 
        data={FAKE_CATE}
        renderItem={({item}) => <CateCard item={item}/>}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        ItemSeparatorComponent={() => (
          <View style={{height: 16}} />
        )}/>
      </View>
    </View>
  )
}
export default SearchScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
  },
  header:{
    // flexDirection:'row',
    // backgroundColor:'red',
    width: '100%',
    paddingHorizontal:16,
    paddingVertical: 12,
  }
})