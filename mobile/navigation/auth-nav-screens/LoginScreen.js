import React, { useEffect, useState } from 'react';
import { phublogowithoutbg } from '../../mgadimahanapnaimage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { login } from '../../services/entry';
import { authenticateToken } from '../../services/authentication';

const LoginScreen = ({ navigation }) => {
    const [userIdentifier, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUserIdentifierChange = (newText) => {
        setUsername(newText);
    };
    const handlePasswordChange = (newText) => {
        setPassword(newText);
    };
    useEffect(() => {
        authenticateToken()
            .then((isValid) => {
                if (isValid) {
                    navigation.replace('FeedScreen');
                }
            })
            .catch(() => {});
    }, []);
    const handleLogin = async () => {
        try {
            console.log("nig")
            const response = await login({ userIdentifier, password });
            if (response.message === 'success') {
                if (response.userType === 'E2jF8sG5dH9tY3kL4zX7pQ6wR1oV0mCqB6nI8bT7yU5iA3gD2fS4hJ9uMlKoP1e') {
                    await AsyncStorage.setItem('authorization', response.accessToken);
                    await AsyncStorage.setItem('chatToken', response.chatToken);
                    await AsyncStorage.setItem('userType', response.userType);
                    await AsyncStorage.setItem('userFullName', response.userFullName);
                    await AsyncStorage.setItem('username', response.username);

                    navigation.replace('FeedScreen');
                } else {
                }
            } else {
                // TODO: Show Component about the error
                console.log(response);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.wFull}>
                    <View style={styles.row}>
                        <Image source={phublogowithoutbg} style={styles.mr7} />
                        <Text style={styles.brandName}>PHub</Text>
                    </View>

                    {/* I replaced the "Login to continue text" with welcoming text */}
                    <Text style={styles.loginContinueTxt}>Welcome to PHINMA Hub!</Text>
                    <TextInput style={styles.input} onChangeText={handleUserIdentifierChange} placeholder='Email' />
                    <TextInput style={styles.input} onChangeText={handlePasswordChange} placeholder='Password' />

                    <View style={styles.loginBtnWrapper}>
                        <LinearGradient colors={['#00000c', '#ffff']} style={styles.linearGradient} start={{ y: 0.2, x: 0.0 }} end={{ y: 3.6, x: 0.0 }}>
                            {/******************** LOGIN BUTTON *********************/}
                            <TouchableOpacity onPress={handleLogin} activeOpacity={0.7} style={styles.loginBtn}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    {/***************** FORGOT PASSWORD BUTTON *****************/}
                    <TouchableOpacity style={styles.forgotPassBtn}>
                        <Text style={styles.forgotPassText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container: {
        padding: 15,
        width: '100%',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 90
    },
    brandName: {
        fontSize: 42,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        opacity: 0.9,
        display: 'none',
    },
    loginContinueTxt: {
        fontSize: 21,
        textAlign: 'center',
        color: 'black',
        marginBottom: 16,
        fontWeight: 'bold',
        // display: 'none',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        marginVertical: 10,
        borderRadius: 15,
        height: 65,
        paddingVertical: 0,
    },
    // Login Btn Styles
    loginBtnWrapper: {
        height: 55,
        marginTop: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    linearGradient: {
        width: '100%',
        borderRadius: 50,
    },
    loginBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
    forgotPassText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
    },
    // footer
    footer: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        flexDirection: 'row',
    },
    footerText: {
        color: 'black',
        fontWeight: 'bold',
    },
    // utils
    wFull: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    mr7: {
        marginRight: 0,
        marginBottom: 0,
        height: 120,
        width: 120,
    },
});
