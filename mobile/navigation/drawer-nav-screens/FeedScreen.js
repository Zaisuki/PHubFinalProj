import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { feed } from '../../services/user';
import { phubtemplogo } from '../../mgadimahanapnaimage';
import { convertDate } from '../../utils/convertDate';

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
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.phinmaHubLogo} source={phubtemplogo} resizeMode='contain' />
                {announcements ? (
                    announcements.map((announcement) => (
                        <View key={announcement._id} style={styles.announcementContainer}>
                            <View>
                                <Text>{announcement.header}</Text>
                                <View className='header-time'>
                                    <Text>{convertDate(announcement.createdAt)[0]}</Text>
                                    <Text>{convertDate(announcement.createdAt)[1]}</Text>
                                </View>
                            </View>

                            <View>
                                <Text>{announcement.announcement}</Text>
                                {announcement.class && <Text>{announcement.class.subject.subjectCode}</Text>}
                            </View>

                            <Text>
                                {announcement.professor.firstName} {announcement.professor.lastName}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text> No Announcements</Text>
                )}
            </View>
        </ScrollView>
    );
};

export default FeedScreen;

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    phinmaHubLogo: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
    },
    announcementContainer: {
        padding: 15,
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        marginBottom: 15,
    },
});
