import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import DetailScreen from "../screens/DetailScreen";
import Home from "../screens/HomeScreen";
import Plus from "../screens/PlusScreen";
import SearchScreen from "../screens/SearchScreen";
// import TabNavigator from "./tabBottom";

const Stack = createSharedElementStackNavigator();
const HomeNavigation = ({ ...props }) => {
  return (
    // <NavigationContainer >
      <Stack.Navigator initialRouteName={"Home"}>
        {/* <Stack.Screen
          {...props}
          name={"TabHome"}
          component={TabNavigator}
          options={{
            headerShown: false,

            gestureEnabled: false,
          }}
          
        /> */}
        <Stack.Screen
          {...props}
          name={"Home"}
          component={Home}
          options={{
            headerShown: false,
            // cardStyleInterpolator: ({current: {progress}})=>{
            //   return {
            //     cardStyle: {
            //       opacity: progress
            //     }
            //   }
            // },
            gestureEnabled: false,
          }}
        />
        {/* <Stack.Screen
          {...props}
          name={"Plus"}
          component={Plus}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({current: {progress}})=>{
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            },
            gestureEnabled: false,
          }}
          sharedElements={(route, otherRoute, showing) => {
            
            return [{id:`circle_btn`}];
          }}
        /> */}
        <Stack.Screen
          {...props}
          name={"Search"}
          component={SearchScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({current: {progress}})=>{
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            },
            
            gestureEnabled: false,
            
          }}
          sharedElements={(route, otherRoute, showing) => {
            return [{id:`search`,animation: 'move', resize: 'auto', align: 'center-top'},{id:'icon.search'},{id:'text.input'}];
          }}
        />
        {/* <Stack.Screen
          {...props}
          name={"Detail"}
          component={DetailScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({current: {progress}})=>{
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            },
            gestureEnabled: false,
          }}
          sharedElements={(route, otherRoute, showing) => {
            // if (otherRoute.name === 'TabHome') {
            const { item } = route.params;
            return [{id:`item.${item.id}.photo`,animation: "move", resize:'none'}];
          // }
        }}
        /> */}
        
      </Stack.Navigator>
    // </NavigationContainer>
  )
}
export default HomeNavigation