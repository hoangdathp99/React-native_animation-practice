import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import OverLay from '../assests/images/overLay.png'
const CateCard = ({item}) =>{
  return (
    <View style={styles.container}>
      <View style={[styles.image]}>
      <Image style={[styles.image,{position:'absolute'}]} source={{uri:'https://thuthuatnhanh.com/wp-content/uploads/2021/11/hinh-anh-chill-dep.jpg'}}/>
      <Image source={OverLay} style={[styles.image, {position:'absolute'}]}/>
      <Text style={[styles.label, {textAlign: item.id % 2 === 0 ? 'right': 'left'}]}>
        {item.label}
      </Text>
      </View>
    </View>
  )
}
export default CateCard;
const styles = StyleSheet.create({
  image: {
    height: 140,
    width:'100%',
    justifyContent: "center",
  },
  container: {
    borderRadius: 10,
    overflow:"hidden"
  },
  label:{
    marginHorizontal: 30,
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  }
})