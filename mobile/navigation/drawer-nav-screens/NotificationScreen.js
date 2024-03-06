import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { getNotification } from '../../services/user';
import { socket } from '../../utils/socket';
import { convertDate } from '../../utils/convertDate';
import { Card } from 'react-native-paper';
import { notifbell } from '../../mgadimahanapnaimage';
import {loadAsync} from 'expo-font';

const loadFontsAsync = async () => {
  await loadAsync({
    'Raleway-Regular': require('../../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../../assets/fonts/Raleway-Bold.ttf'),

  });
};

loadFontsAsync();

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
      <>
          <FlatList style = {{backgroundColor: 'white'}}
            data={notifications}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Card style={{
                borderRadius: 8,  
                borderWidth: 1,
                borderColor: 'rgb(219, 188, 44)',
                backgroundColor: 'white', 
                justifyContent: 'center',
                marginTop: 9,
                marginBottom: 5,
                borderColor: '#d3d3d3',
                margin: 20,
                }}>
                <Image source = {notifbell} style = {{width: 25, height: 25, margin: 9}}/>
                <Card.Title title = {item.header} titleStyle = {{textAlign: 'center', fontFamily: 'Raleway-Bold', fontSize: 13}} />
                <Card.Content>
                <Text style={{textAlign: 'center', fontFamily: 'Raleway-Regular', fontSize: 12}}>{item.description}</Text>
                <Text style= {{textAlign: 'right', fontFamily: 'Raleway-Regular', fontSize: 8}}>{'\n'}{convertDate(item.updatedAt)}</Text>
                </Card.Content>
              </Card>
            )}
            ListEmptyComponent={() => (
              <View style={styles.tableRow}>
                <Text style={styles.feedNoAnnouncement}></Text>
              </View>
            )}
          />
          </>
        
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        borderRadius: 10
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
