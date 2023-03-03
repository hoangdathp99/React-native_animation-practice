import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import {
  BgTab,
  Category,
  CategoryActive,
  IconHomes,
  IconHomesActive,
  NotiActive,
  Notification,
  PlusIcon,
  Profile,
  ProfileActive,
} from '../constants/icons';
import Home from '../screens/HomeScreen';
import Plus from '../screens/PlusScreen';
import HomeNavigation from './homeNavigation';
import OtherHomeNav from './otherHomeNav';

const Tab = createBottomTabNavigator();
function MyTabBar({state, descriptors, navigation, route}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          // if (!isFocused) {
          //   delete state.routes[state.index].state;
          // }
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const renderIconMenu = () => {
          if (route.name === 'HomNav') {
            return isFocused ? (
              <IconHomesActive width={19} height={19} />
            ) : (
              <IconHomes width={19} height={19} />
            );
          } else if (route.name === 'Category') {
            return isFocused ? (
              <CategoryActive width={20.79} height={20.79} />
            ) : (
              <Category width={20.79} height={20.79} />
            );
          } else if (route.name === 'Notification') {
            return isFocused ? (
              <NotiActive width={19} height={19} />
            ) : (
              <Notification width={19} height={19} />
            );
          } else if (route.name === 'Profile') {
            return isFocused ? (
              <ProfileActive width={19} height={19} />
            ) : (
              <Profile width={19} height={19} />
            );
          }
        };

        return (
          <>
            <TouchableOpacity
            key={index}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonNav }>
              <View
                style={[
                  styles.viewButton,
                  isFocused && styles.viewButtonBorder,
                ]}>
                <View style={styles.mgb5}>{renderIconMenu()}</View>
              </View>
            </TouchableOpacity>
            {index === 1 && (
              <View style={{height: 75}} key={`${index}_icon`}>
                {/* <View style={{position:'absolute'}}> */}
                <BgTab />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Plus');
                  }}>
                  <SharedElement id={`circle_btn`}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={[
                        'rgba(81, 81, 198, 1)',
                        'rgba(136, 139, 244, 1)',
                      ]}
                      style={{
                        position: 'absolute',
                        bottom: 37,
                        alignSelf: 'center',
                        // backgroundColor: 'blue',
                        width: 60,
                        height: 60,
                        borderRadius: 200,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <PlusIcon />
                    </LinearGradient>
                  </SharedElement>
                </TouchableOpacity>
              </View>
            )}
          </>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    elevation: 5,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    height: 75,
    // paddingVertical: 17,
  },
  buttonNav: {
    flex: 1,
    // width:50,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  viewButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: 'white',
  },

  viewButtonBorder: {},
  mgb5: {marginBottom: 5},
});
const TabNavigatortest = React.memo(props => {
  const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if (routeName !== 'Home' && routeName != '') {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      initialRouteName={'HomNav'}
      tabBar={rest => <MyTabBar {...rest} />}>
      <Tab.Screen
        name={'HomNav'}
        component={HomeNavigation}
        options={({route}) => ({
          // tabBarVisible: getTabBarVisibility(route),
          // tabBarVisible: false,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name={'Category'}
        component={Plus}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // tabBarStyle: { display: 'none' },
          headerShown: false,
        })}
      />
      {/* <Tab.Screen
        name={"Plus"}
        component={Plus}
        options={({ route }) => ({
          headerShown: false,
          // tabBarVisible: true,
          tabBarVisible: getTabBarVisibility(route),
        
        })}
      /> */}
      <Tab.Screen
        name={'Notification'}
        component={OtherHomeNav}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),

          headerShown: false,
        })}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),

          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
});
export default TabNavigatortest;
