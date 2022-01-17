import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
