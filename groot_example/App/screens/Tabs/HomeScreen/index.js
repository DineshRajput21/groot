import * as React from 'react';
import { Text, SafeAreaView, } from 'react-native';
import { COLORS, FONTS } from '../../../assets';
import TopTabs from './TopTabs';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background, }}>
            <Text style={{ ...FONTS.body0, paddingTop: 40, paddingBottom: 10, paddingHorizontal: 20, }}>Groot Starter Kit</Text>
            <TopTabs />
        </SafeAreaView>
    );
}

export default HomeScreen;