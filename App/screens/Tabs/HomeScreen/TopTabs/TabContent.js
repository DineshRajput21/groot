import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, } from '../../../../assets';


export default function TabContent({ navigation: { navigate } }) {
  const renderActivites = ({ item: { image, title, desc } }) => {
    return <TouchableOpacity
      style={{
        marginHorizontal: 10,
      }}>
      <Text style={{ ...FONTS.h5, color: COLORS.black, marginTop: 10 }}>{title}</Text>

    </TouchableOpacity>
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, }}>
      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: COLORS.background, marginLeft: 20,
        }}
        renderItem={renderActivites}
      />
    </View>
  );
}

const DATA = [{
  title: 'ABC',
}, {
  title: 'XYZ',
}, {
  title: 'LKS',
},{
  title: 'UPS',
},]

