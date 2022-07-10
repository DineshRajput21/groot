import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { signUpRequest } from './actions';
import { useDispatch } from 'react-redux';

const SignUp = ({ navigation: { replace } }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const onChange = (key, value) => {
        key === 'email' ? setEmail(value) : setPassword(value);
    }
    const submitSignup = () => {
        if (!name)
            alert("Enter Name!")
        else if (!email)
            alert("Enter Email!")
        else if (!password)
            alert("Enter Password!")
        else
            dispatch(signUpRequest({ email, password, name }));
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }} >
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                <Text style={{ ...FONTS.h1, marginVertical: 80, color: COLORS.primary }}>SIGN UP</Text>
                <TextInput
                    style={{
                        marginTop: 10,
                        borderRadius: 30,
                        width: SIZES.width - 40,
                        padding: 15, backgroundColor: COLORS.lightBg
                    }}
                    placeholder='Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={{
                        marginTop: 20,
                        borderRadius: 30,
                        width: SIZES.width - 40,
                        padding: 15, backgroundColor: COLORS.lightBg
                    }}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => onChange('email', text)}
                />
                <TextInput
                    style={{
                        marginTop: 20,
                        borderRadius: 30,
                        width: SIZES.width - 40,
                        padding: 15, backgroundColor: COLORS.lightBg
                    }}
                    placeholder='Password'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => onChange('password', text)}
                />
                <View style={{ width: '90%', marginTop: 80 }}>
                    <TouchableOpacity
                        onPress={submitSignup}
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 15, borderRadius: 20, marginBottom: 20,
                        }}>
                        <Text style={{
                            textAlign: 'center', color: COLORS.white, ...FONTS.h4,
                        }}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => replace('login')}
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 15, borderRadius: 20
                        }}>
                        <Text style={{
                            textAlign: 'center', color: COLORS.white, ...FONTS.h4,
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default SignUp;
