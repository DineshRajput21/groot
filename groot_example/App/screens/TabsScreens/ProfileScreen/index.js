import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Selector from './components/Selector';
import { FONTS } from '../../../constants';
import { replace } from '../../../navigation/RootNavigation';
import { readData } from '../../../utils';

const ProfileScreen = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = React.useState('');

    const fetchUserEmail = React.useCallback(async () => {
        const data = await readData('email');
        setEmail(data);
    }, []);

    React.useEffect(() => {
        fetchUserEmail();
    }, [fetchUserEmail]);

    const onLogoutPress = () => {
        replace('welcome');
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ ...FONTS.h2, marginBottom: 50 }}>{email}</Text>
            <Text style={{ ...FONTS.body1 }}>
                {t('common:languageSelector')}
            </Text>
            <Selector />
            <TouchableOpacity onPress={onLogoutPress} style={{ marginTop: 100 }}>
                <Text style={{ ...FONTS.h2, color: 'red' }}>{t('common:logout')}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ProfileScreen;