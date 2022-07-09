import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { loginRequest } from './actions';

const SignUp = ({ navigation: { replace } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('D@g.com');
  const [password, setPassword] = useState('Admin1');

  const onChange = (key, value) => {
    key === 'email' ? setEmail(value) : setPassword(value);
  }

  const submitLoginRequest = () => {
    if (!email) {
      alert("Enter email!")
    } else if (!password) {
      alert("Enter Password!")
    } else {
      dispatch(loginRequest({ email, password }));
      return;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }} >
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
        <Text style={{ ...FONTS.h1, marginVertical: 80, color: COLORS.white }}>LOGIN</Text>
        <TextInput
          style={{
            marginTop: 30,
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
          onChangeText={(text) => onChange('password', text)}
        />
        <View style={{ width: '90%', marginTop: 30 }}>
          <TouchableOpacity
            onPress={submitLoginRequest}
            style={{
              backgroundColor: COLORS.primary,
              padding: 15, borderRadius: 20, marginBottom: 20,
            }}>
            <Text style={{
              textAlign: 'center', color: COLORS.white, ...FONTS.h4,
            }}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => replace('signup')}
            style={{
              backgroundColor: COLORS.primary,
              padding: 15, borderRadius: 20
            }}>
            <Text style={{
              textAlign: 'center', color: COLORS.white, ...FONTS.h4,
            }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default SignUp;
