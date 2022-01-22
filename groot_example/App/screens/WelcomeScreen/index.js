import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native';
import { COLORS, FONTS, ICONS, SIZES } from '../../assets';

const CategoryScreen = ({ navigation: { navigate } }) => {
    const onNextPress = () => {
        navigate('BottomTabs')
    }
    
    return (
        <SafeAreaView style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
            backgroundColor: COLORS.background
        }}>
            <Text style={{ ...FONTS.body0, paddingVertical: 20, }}>Hey there!</Text>
            <TouchableOpacity onPress={onNextPress}
                style={{
                    width: '60%', backgroundColor: COLORS.primary,
                    borderRadius: 30, paddingHorizontal: 40, paddingVertical: 15
                }}>
                <Text style={{ ...FONTS.body4, color: COLORS.white, textAlign: 'center' }}>CONTINUE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingVertical: 20 }}>
                <Text style={{ ...FONTS.body5, color: COLORS.headingColor, textAlign: 'center' }}>Skip for now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CategoryScreen;