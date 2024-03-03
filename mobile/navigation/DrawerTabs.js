import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Image, View, Button} from 'react-native';
import ProfileScreen from './drawer-nav-screens/ProfileScreen';
import { StyleSheet } from 'react-native';
import { courseIcon, feedIcon, inboxIcon, profileIcon, statisticsIcon, taskIcon } from '../mgadimahanapnaimage';
import FeedScreen from './drawer-nav-screens/FeedScreen';
import InboxScreen from './drawer-nav-screens/InboxScreen';
import TaskScreen from './drawer-nav-screens/TasksScreen';
import CourseScreen from './drawer-nav-screens/CourseScreen';
import StatisticScreen from './drawer-nav-screens/StatisticScreen';
import AboutEnigmaScreen from './drawer-nav-screens/AboutEnigmaScreen';
import CustomDrawer from './CustomDrawerComponent/CustomDrawer';
import NotificationScreen from './drawer-nav-screens/NotificationScreen';
const Drawer = createDrawerNavigator();

function DrawerTabs() {
  const [visible, setVisible] = useState(false);
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    drawerStyle screenOptions={{
      drawerActiveBackgroundColor: '#32c069',
      drawerActiveTintColor: 'white',
      drawerInactiveBackgroundColor: 'rgba(0,0,0, 0.3)',
      drawerItemStyle: {borderRadius: 15, height: 65,},
      drawerLabelStyle: {alignSelf: 'flex-start '}
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
          return <Image style= {{height: 50, width: 50}} source={profileIcon} />
        }
      }}/>

      <Drawer.Screen name='Inbox' component={InboxScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={inboxIcon} />
        }
      }}/>


      <Drawer.Screen name='Statistics' component={StatisticScreen} options={{
        drawerIcon: ({color, size, focused}) => {
          return <Image style= {{height: 50, width: 50}} source={statisticsIcon} />
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