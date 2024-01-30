import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

import InboxScreen from '../bottom-nav-screens/InboxScreen';
import CourseScreen from '../bottom-nav-screens/CourseScreen';
import FeedScreen from '../bottom-nav-screens/FeedScreen';
import StatisticScreen from '../bottom-nav-screens/StatisticScreen';
import ProfileScreen from '../bottom-nav-screens/ProfileScreen';



const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress = {onPress}
    >
        <View style = {{
            width: 90,
            height: 90,
            borderRadius: 50,
            backgroundColor: '#32a852'
        }}>
            {children}
        </View>
    </TouchableOpacity>

);

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: {display: 'none'},
            tabBarStyle: {
                position: 'absolute',
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 5,
                height: 90,
                ...styles.shadow
            }
        }}>
            <Tab.Screen name="Inbox" component={InboxScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesignIcon
                        name = 'inbox' 
                        resizeMode='contain'
                        size={50}
                        style={{
                            // you must treat react-native-vector-icons as text when using styles
                            color: focused ? '#000000' : '#000000',
                        }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name="Course" component={CourseScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center'}}>
                        <EntypoIcon
                        name = 'chat' 
                        resizeMode='contain'
                        size={50}
                        style={{
                            // you must treat react-native-vector-icons as text when using styles
                            color: focused ? '#000000' : '#000000',
                        }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Feed" component={FeedScreen} options={{
                tabBarIcon: ({focused}) => (
                        <FontAwesomeIcon
                        name = 'newspaper-o' 
                        resizeMode='contain'
                        size={50}
                        style={{
                            // you must treat react-native-vector-icons as text when using styles
                            color: focused ? '#000000' : '#000000',
                        }}
                        />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                )
            }}
            />
            <Tab.Screen name="Statistics" component={StatisticScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialIcon
                        name = 'insert-chart-outlined' 
                        resizeMode='contain'
                        size={50}
                        style={{
                            // you must treat react-native-vector-icons as text when using styles
                            color: focused ? '##000000' : '#000000',
                        }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center'}}>
                         <FontAwesome6Icon
                        name = 'circle-user' 
                        resizeMode='contain'
                        size={50}
                        style={{
                            // you must treat react-native-vector-icons as text when using styles
                            color: focused ? '#000000' : '#000000',
                        }}
                        />
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;