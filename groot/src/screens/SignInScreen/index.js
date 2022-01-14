import * as React from 'react';
import { TouchableOpacity,Text,View,SafeAreaView } from "react-native";
const SignInScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View>
                
                <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
                <Text>
                    Hello SignIn
                </Text>
                </TouchableOpacity>           
                 </View>
        </SafeAreaView>
    );
}
export default SignInScreen;