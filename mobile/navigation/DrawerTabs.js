import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Image, View} from 'react-native';
import ProfileScreen from './drawer-nav-screens/ProfileScreen';
import { StyleSheet } from 'react-native';
import { calendarIcon, courseIcon, feedIcon, inboxIcon, profileIcon, statisticsIcon, taskIcon } from '../mgadimahanapnaimage';
import FeedScreen from './drawer-nav-screens/FeedScreen';
import InboxScreen from './drawer-nav-screens/InboxScreen';
import TaskScreen from './drawer-nav-screens/TasksScreen';
import CourseScreen from './drawer-nav-screens/CourseScreen';
import StatisticScreen from './drawer-nav-screens/StatisticScreen';
import EvaluationScreen from './drawer-nav-screens/EvaluationScreen';
import CalendarScreen from './drawer-nav-screens/CalendarScreen';
import AboutEnigmaScreen from './drawer-nav-screens/AboutEnigmaScreen';
import CustomDrawer from './CustomDrawerComponent/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerTabs() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    drawerStyle screenOptions={{
      drawerActiveBackgroundColor: '#32c069',
      drawerActiveTintColor: 'white',
      drawerInactiveBackgroundColor: 'rgba(0,0,0, 0.3)',
      drawerItemStyle: {borderRadius: 15, height: 80, },
      drawerLabelStyle: {alignItems: 'center', }
    }}>
      <Drawer.Screen name='Feed' component={FeedScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50,}} source={feedIcon} />
        }
      }}/>

      <Drawer.Screen name='Inbox' component={InboxScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={inboxIcon} />
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

      <Drawer.Screen name='Statistics' component={StatisticScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={statisticsIcon} />
        }
      }}/>

      <Drawer.Screen name='Profile' component={ProfileScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={profileIcon} />
        }
      }}/>

      <Drawer.Screen name='Evaluation' component={EvaluationScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={profileIcon} />
        }
      }}/>

      <Drawer.Screen name='Calendar' component={CalendarScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={calendarIcon} />
        }
      }}/>

      <Drawer.Screen name='About Enigma' component={AboutEnigmaScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={profileIcon} />
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