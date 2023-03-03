import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { BackIcon } from "../constants/icons";

const BackBtn = () =>{
  const navigator = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigator.goBack()}>
      <BackIcon/>
    </TouchableOpacity>
  )
}
export default BackBtn