import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/tabBottom";
import RootNavigation from "./src/navigation/rootNavigation";

const App = () =>{
  return (
    // <NavigationContainer>
      // <TabNavigator/>
      <RootNavigation/>
    // </NavigationContainer>
  )
}
export default App