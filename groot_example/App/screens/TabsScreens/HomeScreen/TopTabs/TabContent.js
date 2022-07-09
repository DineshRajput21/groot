import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, } from '../../../../constants';

export default function TabContent({ navigation: { navigate }, route }) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, alignItems:'center', justifyContent:'center' }}>
      <Text >{route.name}</Text>
    </View>
  );
}


