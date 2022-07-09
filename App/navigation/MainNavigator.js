import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { navigationRef } from './RootNavigation';
import { store } from '../redux/store';
import BottomTabs from './BottomTabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/onboarding/SignInScreen';
import SignUpScreen from '../screens/onboarding/SignUpScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};

export default function MainNavigator() {
    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name="welcome" component={WelcomeScreen} />
                    <Stack.Screen name="login" component={SignInScreen} />
                    <Stack.Screen name="signup" component={SignUpScreen} />
                    <Stack.Screen
                        name="BottomTabs"
                        component={BottomTabs}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
