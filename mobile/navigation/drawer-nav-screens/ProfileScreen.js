import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { logout } from '../../services/entry';
import { profile } from '../../services/user';
import formatDate from '../../utils/formatDate';
import { ogrenek } from '../../mgadimahanapnaimage';

const ProfileScreen = ({ navigation }) => {
    const [data, setData] = useState({});
    const [userInformation, setUserInformation] = useState({});
    const handleLogout = () => {
        logout();
        navigation.replace('Login');
    };
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
                <Text>
                    {userInformation.firstName} {userInformation.middleName} {userInformation.lastName}
                </Text>
                <Text>{userInformation.personalNumber}</Text>
                <Text>{data.personalEmail}</Text>
            </View>
            <View style={styles.studentDetails}>
                <Text>Year/Grade: 2nd</Text>
                <Text>Block: {userInformation.section}</Text>
            </View>
            <View style={styles.studentCourse}>
                <Text>Course: {userInformation.course}</Text>
                <Text>Semester: Second</Text>
            </View>
            <View style={styles.additionalInformation}>
                <Text style={styles.textAlignCenter}>Personal Data</Text>
                <View style={styles.nameContainer}>
                    <View>
                        <Text>First Name</Text>
                        <Text>{userInformation.firstName}</Text>
                    </View>

                    <View>
                        <Text>Last Name</Text>
                        <Text>{userInformation.lastName}</Text>
                    </View>
                </View>
                <View>
                    <Text>Middle Name</Text>
                    <Text>{userInformation.middleName}</Text>
                </View>
                <View style={styles.birthdayContainer}>
                    <View>
                        <Text>Birth Date</Text>
                        <Text>{formatDate(userInformation.birthday)}</Text>
                    </View>

                    <View>
                        <Text>Contact Number</Text>
                        <Text>{userInformation.personalNumber}</Text>
                    </View>
                </View>

                <View>
                    <Text>Current Address(House#, Street, Brgy, City)</Text>
                    <Text>{userInformation.address}</Text>
                </View>

                <View>
                    <Text>School Email</Text>
                    <Text>{data.schoolEmail}</Text>
                </View>
            </View>

            <View>
                <Button title='Log out' onPress={handleLogout} />
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
        marginBottom: 5
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
        marginBottom: 5
    },
    studentCourse: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        padding: 15,
        marginBottom: 5
    },
    additionalInformation: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        padding: 15,
        marginBottom: 5
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
        marginBottom: 5
    },
});
