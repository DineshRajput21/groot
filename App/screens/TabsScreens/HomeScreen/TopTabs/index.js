import * as React from 'react';
import { Animated, View, TouchableOpacity, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, FONTS } from '../../../../constants';
import TabContent from './TabContent';

const Tab = createMaterialTopTabNavigator();

function Tabs({ state, descriptors, navigation, position }) {
    return (
        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft:10,}}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const Color = isFocused ? COLORS.black : COLORS.dimGray
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, paddingVertical: 15, }}
                    >
                        <Animated.Text style={{ color: Color, alignSelf: 'center', ...FONTS.med4 }}>
                            {label}
                        </Animated.Text>
                        {isFocused && <View style={{
                            backgroundColor: COLORS.primary, width: 3, marginTop:4,
                            padding: 4, borderRadius: 5, alignSelf: 'center'
                        }} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default function TopTabs() {
    return (<Tab.Navigator tabBar={props => <Tabs {...props} />}>
        <Tab.Screen
            name="Popular"
            component={TabContent}
        />

        <Tab.Screen
            name="Newest"
            component={TabContent}
        />

        <Tab.Screen
            name="For You"
            component={TabContent}
        />
        <Tab.Screen
            name="All"
            component={TabContent}
        />
    </Tab.Navigator>);
}