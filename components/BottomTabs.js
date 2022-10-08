import React from 'react';
import {Dimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from './Home';
import Wallet from './wallet';
import Messages from './messages';
import Profile from './profile';
const {width, height} = Dimensions.get('window');
const Tabs = createMaterialTopTabNavigator();

export const BottomTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#cfcfcf',
        tabBarShowLabel: false,

        tabBarItemStyle: {
          marginTop: height * 0.007,
        },

        tabBarIndicatorStyle: {
          bottom: height * 0.025,
          backgroundColor: '#e0943e',
          width: width * 0.04,
          position: 'absolute',
          left: width * 0.12,
          height: height * 0.02,
          borderRadius: 100,
        },
        tabBarStyle: {
          backgroundColor: '#ffffff',
          width: width,
          position: 'absolute',
          borderTopWidth: 0,
          height: height * 0.08,
          borderRadius: width * 0.08,
          bottom: 2,
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FeatherIcon
              name="home"
              size={height * 0.03}
              color={focused ? color : '#cfcfcf'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            (
              <Icon
                name="wallet-outline"
                size={height * 0.03}
                color={focused ? color : '#cfcfcf'}
                focused={focused}
              />
            )
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            (
              <Icon
                name="chatbubbles-outline"
                size={height * 0.03}
                color={focused ? color : '#cfcfcf'}
                focused={focused}
              />
            )
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            (
              <Icon
                name="person-outline"
                size={height * 0.03}
                color={focused ? color : '#cfcfcf'}
                focused={focused}
              />
            )
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
