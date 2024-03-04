import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CoachScreen from './TaskContentScreens/CoachScreen';
import ConnectScreen from './TaskContentScreens/ConnectScreen';
import CheckScreen from './TaskContentScreens/CheckScreen';
import {loadAsync} from 'expo-font';

const Tab = createMaterialTopTabNavigator();

const loadFontsAsync = async () => {
    await loadAsync({
      'Raleway-Regular': require('../../assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Bold': require('../../assets/fonts/Raleway-Bold.ttf'),
    });
  };

function TaskScreen() {
    loadFontsAsync();
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {fontFamily: 'Raleway-Bold'},
            tabBarIndicatorStyle: {backgroundColor: '#dbbc2c'}
        }}>
            <Tab.Screen name='Coach' component={CoachScreen} />
            <Tab.Screen name='Connect' component={ConnectScreen} />
            <Tab.Screen name='Check' component={CheckScreen} />
        </Tab.Navigator>
    );
}

export default TaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
});
