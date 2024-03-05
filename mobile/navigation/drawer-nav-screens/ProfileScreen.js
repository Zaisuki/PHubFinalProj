import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { logout } from '../../services/entry';
import { profile } from '../../services/user';
import formatDate from '../../utils/formatDate';
import { ogrenek } from '../../mgadimahanapnaimage';
import {loadAsync} from 'expo-font';

const loadFontsAsync = async () => {
    await loadAsync({
      'Raleway-Regular': require('../../assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Bold': require('../../assets/fonts/Raleway-Bold.ttf'),
    });
  };
  
  loadFontsAsync();

const ProfileScreen = ({ navigation }) => {
    const [data, setData] = useState({});
    const [userInformation, setUserInformation] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await profile();
                setData(response);
                setUserInformation(() => (response.userType === 'student' ? response.studentInformation : response.userType === 'professor' ? response.professorInformation : response.adminInformation));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={ogrenek} resizeMode='contain' />
                <Text style = {{fontFamily:'Raleway-Regular'}}>
                    {userInformation.firstName} {userInformation.middleName} {userInformation.lastName}
                </Text>
                <Text style = {{fontFamily:'Raleway-Regular'}}>{userInformation.personalNumber}</Text>
                <Text style = {{fontFamily:'Raleway-Regular'}}>{data.personalEmail}</Text>
            </View>
            <View style={styles.studentDetails}>
                <Text style = {{fontFamily:'Raleway-Regular'}}><Text style = {{fontFamily:'Raleway-Bold'}}>Year/Grade:</Text> 2nd</Text>
                <Text style = {{fontFamily:'Raleway-Regular'}}><Text style = {{fontFamily:'Raleway-Bold'}}>Block:</Text> {userInformation.section}</Text>
            </View>
            <View style={styles.studentCourse}>
                <Text style = {{fontFamily:'Raleway-Regular'}}> <Text style = {{fontFamily:'Raleway-Bold'}}>Course:</Text> {userInformation.course}</Text>
                <Text style = {{fontFamily:'Raleway-Regular'}}><Text style = {{fontFamily:'Raleway-Bold'}}>Semester:</Text> Second</Text>
            </View>
            <View style={styles.additionalInformation}>
                <Text style={{fontFamily:'Raleway-Bold', textAlign: 'center'}}>Personal Data</Text>
                <View style={styles.nameContainer}>
                    <View>
                        <Text style = {{fontFamily:'Raleway-Bold'}}>First Name</Text>
                        <Text style = {{fontFamily:'Raleway-Regular'}}>{userInformation.firstName}</Text>
                    </View>

                    <View>
                        <Text style = {{fontFamily:'Raleway-Bold'}}>Last Name</Text>
                        <Text style = {{fontFamily:'Raleway-Regular'}}>{userInformation.lastName}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {{fontFamily:'Raleway-Bold'}}>Middle Name</Text>
                    <Text style = {{fontFamily:'Raleway-Regular'}}>{userInformation.middleName}</Text>
                </View>
                <View style={styles.birthdayContainer}>
                    <View>
                        <Text style = {{fontFamily:'Raleway-Bold'}}>Birth Date</Text>
                        <Text>{formatDate(userInformation.birthday)}</Text>
                    </View>

                    <View>
                        <Text style = {{fontFamily:'Raleway-Bold'}}>Contact Number</Text>
                        <Text style = {{fontFamily:'Raleway-Regular'}}>{userInformation.personalNumber}</Text>
                    </View>
                </View>

                <View>
                    <Text style = {{fontFamily:'Raleway-Bold'}}>Current Address(House#, Street, Brgy, City)</Text>
                    <Text style = {{fontFamily:'Raleway-Regular'}}>{userInformation.address}</Text>
                </View>

                <View>
                    <Text style = {{fontFamily:'Raleway-Bold'}}>School Email</Text>
                    <Text style = {{fontFamily:'Raleway-Regular'}}>{data.schoolEmail}</Text>
                </View>
            </View>
        </ScrollView>

    );
};

export default ProfileScreen;


const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'rgb(236, 235, 235)'
    },
    headerImage: {
        width: windowWidth * 0.4,
        height: windowWidth * 0.4,
        borderRadius: 150,
    },
    studentDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'rgb(236, 235, 235)'
    },
    studentCourse: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-around',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'rgb(236, 235, 235)'
    },
    additionalInformation: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'rgb(236, 235, 235)',
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    birthdayContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
});
