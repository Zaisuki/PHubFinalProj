import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Image, View, Button, Text} from 'react-native';
import ProfileScreen from './drawer-nav-screens/ProfileScreen';
import { StyleSheet } from 'react-native';
import { courseIcon, feedIcon, inboxIcon, notificationIcon, profileIcon, statisticsIcon, taskIcon } from '../mgadimahanapnaimage';
import FeedScreen from './drawer-nav-screens/FeedScreen';
import InboxScreen from './drawer-nav-screens/InboxScreen';
import TaskScreen from './drawer-nav-screens/TasksScreen';
import CourseScreen from './drawer-nav-screens/CourseScreen';
import StatisticScreen from './drawer-nav-screens/StatisticScreen';
import CustomDrawer from './CustomDrawerComponent/CustomDrawer';
import NotificationScreen from './drawer-nav-screens/NotificationScreen';
import { loadAsync } from 'expo-font'
const Drawer = createDrawerNavigator();

const loadFontsAsync = async () => {
  await loadAsync({
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
  });
};

loadFontsAsync();

function DrawerTabs() {

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    drawerStyle initialRouteName='Feed' screenOptions={{
      drawerActiveBackgroundColor: 'rgba(255,255,255, 0.2)',
      
      drawerActiveTintColor: '#dbbc2c',
      drawerInactiveTintColor: 'white',
      drawerItemStyle: {borderRadius: 10, height: 65,},
      drawerLabelStyle: {alignSelf: 'flex-start', fontFamily: 'Raleway-Bold'},
      headerTitleStyle: {fontFamily: 'Raleway-Bold', color: 'white'},
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#3a4f24'}
    }}>
      
      <Drawer.Screen name='Profile' component={ProfileScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50,}} source={profileIcon} />
        }
      }}/>

      <Drawer.Screen name='Feed' component={FeedScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={feedIcon} />
        }
      }}/>

      <Drawer.Screen name='Tasks' component={TaskScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={taskIcon} />
        }
      }}/>

      <Drawer.Screen name='Course' component={CourseScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={courseIcon} />
        }
      }}/>

      <Drawer.Screen name='Notification' component={NotificationScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={notificationIcon} />
        }
      }}/>

      <Drawer.Screen name='Inbox' component={InboxScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={inboxIcon} />
        }
      }}/>
      
    </Drawer.Navigator>
  );
}

export default DrawerTabs;

const styles = StyleSheet.create({
  border: {
    borderRadius: 50
  }
});