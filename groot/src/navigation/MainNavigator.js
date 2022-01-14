import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen/index';
import SignInScreen from '../screens/SignInScreen/index';
import BottomTabs from './BottomTabs';
import ChatScreen from '../screens/tabs/ChatScreen';
import HomeScreen from '../screens/tabs/HomeScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {
headerShown:false,
gestureEnabled: false,
};

export default function MainNavigator() {
    return (
<NavigationContainer>
    <Stack.Navigator  screenOptions={screenOptions}>
        <Stack.Screen name = "SignUp" component = {SignUpScreen}/>
        <Stack.Screen name = "SignIn" component = {SignInScreen}/>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name = "Chat" component = {ChatScreen}/>
        <Stack.Screen name = "Profile" component = {ProfileScreen}/>
        <Stack.Screen name = "Home" component = {HomeScreen}/>

        
        </Stack.Navigator>
    </NavigationContainer>
);
}
