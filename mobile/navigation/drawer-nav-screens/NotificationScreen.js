import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { getNotification } from '../../services/user';
import { socket } from '../../utils/socket';
import { convertDate } from '../../utils/convertDate';

const NotificationScreen = ({navigation}) => {
    const [notifications, setNotification] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getNotification();
                setNotification(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        socket.on('reminder_notification', (reminder) => {
            setNotification((prevState) => [reminder, ...prevState]);
        });

        return () => {
            socket.off('reminder_notification');
        };
    }, []);
    return (
        <View style={styles.container}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Header</Text>
            <Text style={styles.headerText}>Content</Text>
            <Text style={styles.headerText}>Time/Date</Text>
          </View>
          <FlatList
            data={notifications}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.from}>{item.header}</Text>
                <Text style={styles.content}>{item.description}</Text>
                <Text style={styles.timeDate}>{convertDate(item.updatedAt)}</Text>
              </View>
            )}
            ListEmptyComponent={() => (
              <View style={styles.tableRow}>
                <Text style={styles.feedNoAnnouncement}></Text>
              </View>
            )}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
      },
      tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
      },
      headerText: {
        fontWeight: 'bold',
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
      },
      from: {
        flex: 1,
      },
      content: {
        flex: 2,
      },
      timeDate: {
        flex: 1,
      },
      feedNoAnnouncement: {
        flex: 1,
      },
    });
export default NotificationScreen;
