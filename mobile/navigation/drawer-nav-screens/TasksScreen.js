import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CoachScreen from './TaskContentScreens/CoachScreen';
import ConnectScreen from './TaskContentScreens/ConnectScreen';
import CheckScreen from './TaskContentScreens/CheckScreen';
import MissingScreen from './TaskContentScreens/MissingScreen';

const Tab = createMaterialTopTabNavigator();

function TaskScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Coach' component={CoachScreen} />
            <Tab.Screen name='Connect' component={ConnectScreen} />
            <Tab.Screen name='Check' component={CheckScreen} />
            {/* <Tab.Screen name="Missing" component={MissingScreen} /> */}
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
