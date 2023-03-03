import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { TabBar } from "../constants/icons";

const Plus = () => {
  return (
    <>
      <SharedElement id={`circle_btn`} style={styles.container}>
        <View style={styles.btnCircle}>
        </View>
      </SharedElement>
      {/* <View style={{position: "absolute", bottom: 0, backgroundColor:'red', width:'100%'}}>

      <TabBar width={'100%'}/>
      </View> */}
    </>
  )
}
export default Plus;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    elevation: 5,
    backgroundColor: "#AAB3B6",
    // paddingVertical: 20,
    paddingHorizontal: 16
  },
  bubleContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 200,
    aspectRatio: 1,
    // alignSelf: "center"
  },
  btnCircle: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
})
