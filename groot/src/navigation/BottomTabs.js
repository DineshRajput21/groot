import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/tabs/ChatScreen';
import HomeScreen from '../screens/tabs/HomeScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

const Tab = createBottomTabNavigator();
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

export default function BottomTabs() {
return(
    <Tab.Navigator 
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          if (route.name === 'Delivery') {
            icon = focused
              ? //Image 
              null
              : //image 
              null;
          } else if (route.name === 'Services') {
            icon = focused ? 
           //Image
            null: 
            //Image
            null;
          } else if (route.name === 'Bag') {
            icon = focused ? 
            //Image
            null : 
            //Image
            null;
          }
          return <View>{icon}</View>;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        gestureEnabled: false,
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);
}
