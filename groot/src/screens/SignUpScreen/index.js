import * as React from 'react';
import {Text,View,TouchableOpacity,SafeAreaView} from 'react-native';
const SignUpScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View>
                
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text>
                    Hello SignUp
                </Text>
                </TouchableOpacity>   
            </View>
        </SafeAreaView>
    );
}
export default SignUpScreen;