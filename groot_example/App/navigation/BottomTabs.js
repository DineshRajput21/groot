import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/TabsScreens/ChatScreen';
import HomeScreen from '../screens/TabsScreens/HomeScreen';
import ProfileScreen from '../screens/TabsScreens/ProfileScreen';
import {COLORS, ICONS} from '../constants';

const Tab = createBottomTabNavigator();
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

export default function BottomTabs() {
return(
    <Tab.Navigator 
    screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          if (route.name === 'Home') {
            icon =  ICONS.home 
          } else if (route.name === 'search') {
            icon = ICONS.search 
          } else if (route.name === 'calendar') {
            icon = ICONS.calendar 
          }else if (route.name === 'Profile') {
            icon = ICONS.account 
          }
          return <View style={{}}><Image style={{ height:22, width:22, tintColor: focused ? COLORS.primary : COLORS.headingColor}} source={icon} /></View>;
        },
        tabBarStyle: {paddingHorizontal: 30, backgroundColor: COLORS.background},
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        gestureEnabled: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="search" component={HomeScreen} />
      <Tab.Screen name="calendar" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);
}
