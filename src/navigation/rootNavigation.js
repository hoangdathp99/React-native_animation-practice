import {NavigationContainer} from '@react-navigation/native';
import {TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import CommentScreen from '../screens/CommentScreen';
import DetailScreen from '../screens/DetailScreen';
import Plus from '../screens/PlusScreen';
import SearchScreen from '../screens/SearchScreen';
import TabNavigator from './tabBottom';
import TabNavigatortest from './tabBottomTest';
// import TabNavigator from "./tabBottom";

const Stack = createSharedElementStackNavigator();
const RootNavigation = ({...props}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          {...props}
          name={'TabHome'}
          component={TabNavigatortest}
          options={{
            headerShown: false,

            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          {...props}
          name={'Search'}
          component={SearchScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
            gestureEnabled: false,
          }}
          sharedElements={(route, otherRoute, showing) => {
            return [
              {
                id: `search`,
                animation: 'move',
                resize: 'auto',
                align: 'center-top',
              },
              {id: 'icon.search'},
              {id: 'text.input'},
            ];
          }}
        />
        <Stack.Screen
          {...props}
          name={'Plus'}
          component={Plus}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
            gestureEnabled: false,
          }}
          // sharedElements={(route, otherRoute, showing) => {

          //   return [{id:`circle_btn`}];
          // }}
        />
        <Stack.Screen
          {...props}
          name={'Detail'}
          component={DetailScreen}
          options={{
            headerShown: false,
            // cardStyleInterpolator: ({current: {progress}})=>{
            //   return {
            //     cardStyle: {
            //       opacity: progress
            //     }
            //   }
            // },
            // transitionSpec:{
            //   open: TransitionSpecs.FadeInFromBottomAndroidSpec,
            //   close: TransitionSpecs.TransitionIOSSpec
            // },
            gestureEnabled: false,
          }}
          sharedElements={(route, otherRoute, showing) => {
            if (otherRoute.name === 'Home') {
              const {item} = route.params;
              return [
                {
                  id: `item.${item.id}.photo`,
                  animation: 'move',
                  resize: 'none',
                },
              ];
            }
          }}
        />
        <Stack.Screen
          {...props}
          name={'Comment'}
          component={CommentScreen}
          options={{
            headerShown: false,
            // cardStyleInterpolator: ({current: {progress}}) => {
            //   return {
            //     cardStyle: {
            //       opacity: progress,
            //     },
            //   };
            // },
            gestureEnabled: false,
          }}
          sharedElements={(route, otherRoute, showing) => {
  
              return [
                {
                  id: `text_input`,
                  animation: 'fade',
                  resize: 'none',
                },
              ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
