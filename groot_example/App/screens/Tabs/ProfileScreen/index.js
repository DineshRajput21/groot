import * as React from 'react';
import {Text,View,TouchableOpacity, SafeAreaView} from 'react-native';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity>
            <Text>
                Profile 
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
}

export default ProfileScreen;