import * as React from 'react';
import {Text,View,TouchableOpacity, SafeAreaView} from 'react-native';

const ChatScreen = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity>
                <Text>
                    Chat
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ChatScreen;