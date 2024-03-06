import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { feed, profile } from '../../services/user';
import { phubtemplogo } from '../../mgadimahanapnaimage';
import { convertDate } from '../../utils/convertDate';
import { Card } from 'react-native-paper';
import {loadAsync} from 'expo-font';

const loadFontsAsync = async () => {
    await loadAsync({
      'Raleway-Regular': require('../../assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Bold': require('../../assets/fonts/Raleway-Bold.ttf'),
    });
  };
  
  loadFontsAsync();

const FeedScreen = ({ navigation }) => {
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await feed();
                setAnnouncements(response.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
        <ScrollView style = {{
            backgroundColor: '#ffffff'
        }}>
            <Text style = {{
                padding: 3,
                fontSize: 10,
                textAlign: 'center',
                backgroundColor: '#3a4f24',
                color: 'white',
                marginBottom: 5,
                
            }}>Welcome to Phinma Hub,<Text style = {{
                color: '#dbbc2c'
            }}> {userInformation.firstName} {userInformation.middleName} {userInformation.lastName}</Text> </Text>
                {announcements ? (
                    announcements.map((announcement) => (
                        
                        <Card key={announcement._id} style={styles.announcementContainer}>

                            <Card.Title title = {announcement.header} subtitle = {convertDate(announcement.createdAt)} 
                            titleStyle= {{
                  flexWrap:'wrap', 
                  flexDirection: 'row',
                  fontSize: 14,
                  textAlign: 'center',
                  fontFamily: 'Raleway-Bold',
      
                }} subtitleStyle = {{
                  fontSize: 10,
                  textAlign: 'center',
                  fontFamily: 'Raleway-Regular',
                }}/>
                            
                            <Card.Content>
                                <Text style = {{
                                    fontFamily: 'Raleway-Regular',
                                    fontSize: 12,
                                }}>{announcement.announcement}</Text>
                                
                                {announcement.class && <Text>{announcement.class.subject.subjectCode}</Text>}
                           

                            <Text style = {{
                                fontFamily: 'Raleway-Bold'
                            }}>
                                {'\n'}
                                {announcement.professor.firstName} {announcement.professor.lastName}
                            </Text>
                            </Card.Content>
                            </Card>
                        
                    ))
                ) : (
                    <Text style = {{fontFamily: 'Raleway-Bold'}}> No Announcements</Text>
                )}
        </ScrollView>
    );
};

export default FeedScreen;

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    phinmaHubLogo: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
    },
    announcementContainer: {
        marginTop: 10,
        marginLeft: 18, 
        marginRight: 18,
        marginBottom: 5,
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        
         
    },
});
