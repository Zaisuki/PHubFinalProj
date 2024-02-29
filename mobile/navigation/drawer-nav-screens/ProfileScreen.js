import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { logout } from '../../services/entry';

const ProfileScreen = ({ navigation }) => {
    const handleLogout = () => {
        logout();
        navigation.replace('Login');
    };
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title='Log out' onPress={handleLogout} />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
});
