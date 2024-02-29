import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './auth-nav-screens/LoginScreen';
import DrawerTabs from './DrawerTabs';
import { authenticateToken } from '../services/authentication';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerBackTitleVisible: false,
                headerTintColor: '#32c069',
                headerStyle: {
                    backgroundColor: '#32c069',
                },
            }}
        >
                    <Stack.Screen name='FeedScreen' component={DrawerTabs} /> 
                    <Stack.Screen name='Login' component={LoginScreen} />
                    <Stack.Screen name='Forgot Password' component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
