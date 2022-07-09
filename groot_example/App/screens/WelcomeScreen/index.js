import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, } from 'react-native';
import { useTranslation } from 'react-i18next';
import LottieView from 'lottie-react-native';
import { COLORS, FONTS, } from '../../constants';

const CategoryScreen = ({ navigation: { navigate } }) => {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        animation.play();
    }, []);

    const onNextPress = () => {
        navigate('BottomTabs')
    }
    const onboardingPress = () => {
        navigate('login');
    }

    return (
        <SafeAreaView style={{
            flex: 1, alignItems: 'center',
            backgroundColor: COLORS.background
        }}>
            <LottieView
                style={{ marginTop: 30, height: 400, paddingHorizontal: 10 }}
                ref={animation => {
                    this.animation = animation;
                }}
                source={require('../../assets/animations/welcome.json')}
            />
            <TouchableOpacity onPress={onNextPress}
                style={{
                    marginTop: 80,
                    width: '60%', backgroundColor: COLORS.primary,
                    borderRadius: 30, paddingHorizontal: 40, paddingVertical: 15
                }}>
                <Text style={{ ...FONTS.body5, color: COLORS.white, textAlign: 'center' }}>{t('common:guestLogin')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onboardingPress}
                style={{
                    marginTop: 20,
                    width: '60%',
                    paddingHorizontal: 40,
                }}>
                <Text style={{ ...FONTS.med4, color: COLORS.black, textAlign: 'center' }}>{t('common:login')}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CategoryScreen;