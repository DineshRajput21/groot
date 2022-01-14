import * as React from 'react';
import {Text,View,TouchableOpacity, SafeAreaView} from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Text>
                    Hello Home Screen
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;