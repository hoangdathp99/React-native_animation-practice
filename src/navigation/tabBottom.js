import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {createRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import LinearGradient from 'react-native-linear-gradient';
import {SharedElement} from 'react-navigation-shared-element';
import {
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
const Tab = createBottomTabNavigator();
export const tabBarRef = createRef();
const _renderIcon = (routeName, selectedTab) => {
  if (routeName === 'TabHome') {
    return selectedTab === 'TabHome' ? <IconHomesActive /> : <IconHomes />;
  } else if (routeName === 'Category') {
    return selectedTab === 'Category' ? <CategoryActive /> : <Category />;
  } else if (routeName === 'Notification') {
    return selectedTab === 'Notification' ? <NotiActive /> : <Notification />;
  } else if (routeName === 'Profile') {
    return selectedTab === 'Profile' ? <ProfileActive /> : <Profile />;
  }
};
const renderTabBar = ({routeName, selectedTab, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const TabNavigator = React.memo(props => {
  return (
    // <NavigationContainer>
    <CurvedBottomBar.Navigator
      ref={tabBarRef}
      style={styles.bottomBar}
      height={55}
      circleWidth={50}
      // circleHeight={50}
      bgColor="white"
      // borderTopLeftRight={0}
      initialRouteName="TabHome"
      renderCircle={({selectedTab, navigate, routeName}) => (
        <TouchableOpacity
          // style={{
          //   flex: 1,
          //   justifyContent: 'center',
          // }}
          onPress={() => {
            navigate('Plus');
          }}>
          <SharedElement id={`circle_btn`}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['rgba(81, 81, 198, 1)', 'rgba(136, 139, 244, 1)']}
              style={styles.btnCircle}>
              <PlusIcon />
            </LinearGradient>
          </SharedElement>
        </TouchableOpacity>
      )}
      circlePosition={'CENTER'}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="TabHome"
        component={HomeNavigation}
        position="LEFT"
        options={({route}) => ({
          tabBarLabel: 'Profile',
          // tabBarStyle: {display: 'none'},
          // title: i18n.t("home"),
          headerShown: false,
        })}
      />
      {/* <CurvedBottomBar.Screen
        {...props}
        name="Plus"
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
        position="center"
      /> */}
      <CurvedBottomBar.Screen
        name="Category"
        component={Plus}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Notification"
        component={Home}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Profile"
        component={Home}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
    // </NavigationContainer>
  );
});
export default TabNavigator;
const styles = StyleSheet.create({
  bottomBar: {
    // display:'none',
    borderTopRightRadius: 10,
    // overflow:"hidden",
    // backgroundColor:'red',
    // bottom: 20
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'linear-gradient(270.95deg, #888BF4 0%, #5151C6 20%)',
    // padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 10,
    bottom: 30,
  },
});
