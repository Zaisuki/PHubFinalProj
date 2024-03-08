import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { List, Card, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { pakyu } from '../../../mgadimahanapnaimage';
import * as DocumentPicker from 'expo-document-picker';
import formatDate from '../../../utils/formatDate';
import { getCheck, getCheckTask, getCoachTask, getConnectTask } from '../../../services/student';
import { ScrollView } from 'react-native-gesture-handler';
import { loadAsync } from 'expo-font';
import { useRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

const loadFontsAsync = async () => {
    await loadAsync({
        'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
        'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
    });
};

loadFontsAsync();

const NewTaskCheck = ({ navigation }) => {
    const route = useRoute();
    const { taskID } = route.params;
    const classType = 'check';
    const [pageData, setData] = useState({});
    const [attachment, setAttachment] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            let data;
            if (classType === 'coach') {
                data = await getCoachTask(taskID);
            } else if (classType === 'connect') {
                data = await getConnectTask(taskID);
            } else {
                data = await getCheckTask(taskID);
            }
            console.log(data.message);
            setData(data.message);
        };
        fetchdata();
    }, [classType]);
    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.getDocumentAsync({
                type: ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'], // Initially restrict to PDF, but allow all files to let the user pick.
                multiple: true,
            });

            const assets = doc.assets;
            if (!assets) return;

            const newAttachments = assets
                .map((file) => {
                    const fileType = file.mimeType.toLowerCase();

                    // Check if the selected file type is one of the allowed types
                    if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/gif' || fileType === 'application/pdf') {
                        return {
                            name: file.name,
                            uri: file.uri,
                            type: fileType,
                            size: file.size,
                        };
                    } else {
                        console.log('Unsupported file type:', fileType);
                        return null; // Return null for unsupported types
                    }
                })
                .filter(Boolean); // Filter out null values

            setAttachment([...attachment, ...newAttachments]);
        } catch (err) {
            console.log('User Cancelled the upload', err);
        }
    };
    useEffect(() => {
        console.log(attachment);
    }, [attachment]);
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('taskID', taskID);
        for (const file of attachment) {
            formData.append('file', file);
        }
        let result;
        if (classType === 'check') {
            result = await submitCheck(formData);
        }
        if (result.message === 'Check submitted') {
            updateForm();
        }
    };
    return (
        <ScrollView>
            <View>
                <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.1)', marginTop: 5, margin: 10 }}>
                    {classType.toLowerCase() !== 'coach' && <>{pageData.dueDate ? <Card.Title titleStyle={{ fontFamily: 'Raleway-Bold' }} title={`Due:${formatDate(pageData.dueDate)}`} /> : <Card.Title titleStyle={{ fontFamily: 'Raleway-Bold' }} title='No Due Date' />}</>}
                    <Card.Title titleStyle={{ fontFamily: 'Raleway-Bold' }} title={`${classType.toUpperCase()}: ${pageData.postTitle}`} subtitleStyle={{ fontFamily: 'Raleway-Bold' }} subtitle={classType.toLowerCase() !== 'coach' && `${pageData.highestPossibleScore} points`} />
                </Card>

                <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.1)', marginTop: 5, margin: 10 }}>
                    <Card.Content>
                        <Text style={{ fontFamily: 'Raleway-Regular' }}>{pageData.postDescription}</Text>
                    </Card.Content>
                </Card>

                <Card style={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'stretch', marginTop: 5, margin: 10 }}>
                    <Card.Title title='Your Work' titleStyle={{ textAlign: 'center', fontFamily: 'Raleway-Bold' }} subtitle='_________________________________________________' />
                    <Card.Content style={{ alignItems: 'center' }}>
                        <ScrollView>
                            {attachment && (
                                <View style={styles.attachmentContainer}>
                                    <ScrollView style={{ flex: 1 }}>
                                        {attachment.map((dataPage, idx) => (
                                            <View key={idx} style={styles.imageContainer}>
                                                {dataPage.type.startsWith('image') ? <Image source={{ uri: `${dataPage.uri}` }} style={styles.attachmentImage} onError={(error) => console.log('Error loading image:', error)} /> : <></>}
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            )}
                            <Button style={{ height: 45, width: 150, borderRadius: 10, backgroundColor: 'rgb(155, 155, 155)' }} onPress={selectDoc} mode='contained'>
                                <Text style={{ textAlign: 'center', fontFamily: 'Raleway-Regular' }}>Upload File</Text>
                            </Button>

                            <Button
                                mode='contained'
                                style={{
                                    backgroundColor: 'rgb(155, 155, 155)',
                                    borderRadius: 10,
                                    margin: 5,
                                    width: 350,
                                }}
                            >
                                <Text style={{ textAlign: 'center', fontFamily: 'Raleway-Regular' }}>Mark as done</Text>
                            </Button>
                        </ScrollView>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
};
const styles = {
    attachmentContainer: {
        // Add your styles for the attachment container
        flex: 1,
    },
    imageContainer: {
        marginRight: 10, // Adjust margin as needed
    },
    attachmentImage: {
        width: 100, // Set width as needed
        height: 100, // Set height as needed
        resizeMode: 'cover', // Adjust resize mode as needed
    },
};
const CheckScreenContent = ({ navigation }) => {
    const [expanded, setExpanded] = useState(true);
    const taskType = 'check';
    const [noDueDate, setNoDueDate] = useState([]);
    const [thisWeek, setThisWeek] = useState([]);
    const [nextWeek, setNextWeek] = useState([]);
    const [later, setLater] = useState([]);
    const [missing, setMissing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCheck();
                setNoDueDate(response.noDueDate);
                setThisWeek(response.thisWeek);
                setNextWeek(response.nextWeek);
                setLater(response.later);
                setMissing(response.missing);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView
            style={{
                backgroundColor: 'white',
            }}
        >
            <List.Section>
                <List.Accordion
                    title='No Due Date'
                    titleStyle={{
                        fontFamily: 'Raleway-Bold',
                    }}
                    expanded={expanded}
                    onPress={handlePress}
                >
                    {noDueDate.map((data) => (
                        <Card
                            key={data._id}
                            onPress={() => navigation.navigate('NewTaskCheck', { taskID: data._id })}
                            style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                height: 100,
                                backgroundColor: 'rgb(236, 235, 235)',
                                justifyContent: 'center',
                                marginTop: 5,
                                marginBottom: 5,
                                borderColor: '#d3d3d3',
                                margin: 20,
                            }}
                            contentStyle={{}}
                        >
                            <Card.Title
                                title={`${taskType.toUpperCase()}: ${data.postTitle}`}
                                subtitle={formatDate(data.createdAt)}
                                titleStyle={{
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Bold',
                                }}
                                subtitleStyle={{
                                    fontSize: 10,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Regular',
                                }}
                            />
                            <Text style={{ fontFamily: 'Raleway-Bold', marginStart: 10 }}>{data.class.subject.subjectCode}</Text>
                        </Card>
                    ))}
                </List.Accordion>

                <List.Accordion
                    title='This Week'
                    titleStyle={{
                        fontFamily: 'Raleway-Bold',
                    }}
                >
                    {thisWeek.map((data) => (
                        <Card
                            key={data._id}
                            onPress={() => navigation.navigate('NewTaskCheck', { taskID: data._id })}
                            style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                height: 100,
                                backgroundColor: 'rgb(236, 235, 235)',
                                justifyContent: 'center',
                                marginTop: 5,
                                marginBottom: 5,
                                borderColor: '#d3d3d3',
                                margin: 20,
                            }}
                            contentStyle={{}}
                        >
                            <Card.Title
                                title={`${taskType.toUpperCase()}: ${data.postTitle}`}
                                subtitle={formatDate(data.createdAt)}
                                titleStyle={{
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Bold',
                                }}
                                subtitleStyle={{
                                    fontSize: 10,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Regular',
                                }}
                            />
                            <Text style={{ fontFamily: 'Raleway-Bold', marginStart: 10 }}>{data.class.subject.subjectCode}</Text>
                        </Card>
                    ))}
                </List.Accordion>
                <List.Accordion
                    title='Next Week'
                    titleStyle={{
                        fontFamily: 'Raleway-Bold',
                    }}
                >
                    {nextWeek.map((data) => (
                        <Card
                            key={data._id}
                            onPress={() => navigation.navigate('NewTaskCheck', { taskID: data._id })}
                            style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                height: 100,
                                backgroundColor: 'rgb(236, 235, 235)',
                                justifyContent: 'center',
                                marginTop: 5,
                                marginBottom: 5,
                                borderColor: '#d3d3d3',
                                margin: 20,
                            }}
                            contentStyle={{}}
                        >
                            <Card.Title
                                title={`${taskType.toUpperCase()}: ${data.postTitle}`}
                                subtitle={formatDate(data.createdAt)}
                                titleStyle={{
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Bold',
                                }}
                                subtitleStyle={{
                                    fontSize: 10,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Regular',
                                }}
                            />
                            <Text style={{ fontFamily: 'Raleway-Bold', marginStart: 10 }}>{data.class.subject.subjectCode}</Text>
                        </Card>
                    ))}
                </List.Accordion>

                <List.Accordion
                    title='Later'
                    titleStyle={{
                        fontFamily: 'Raleway-Bold',
                    }}
                >
                    {later.map((data) => (
                        <Card
                            key={data._id}
                            onPress={() => navigation.navigate('NewTaskCheck', { taskID: data._id })}
                            style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                height: 100,
                                backgroundColor: 'rgb(236, 235, 235)',
                                justifyContent: 'center',
                                marginTop: 5,
                                marginBottom: 5,
                                borderColor: '#d3d3d3',
                                margin: 20,
                            }}
                            contentStyle={{}}
                        >
                            <Card.Title
                                title={`${taskType.toUpperCase()}: ${data.postTitle}`}
                                subtitle={formatDate(data.createdAt)}
                                titleStyle={{
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Bold',
                                }}
                                subtitleStyle={{
                                    fontSize: 10,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Regular',
                                }}
                            />
                            <Text style={{ fontFamily: 'Raleway-Bold', marginStart: 10 }}>{data.class.subject.subjectCode}</Text>
                        </Card>
                    ))}
                </List.Accordion>
                <List.Accordion
                    title='Missing'
                    titleStyle={{
                        fontFamily: 'Raleway-Bold',
                    }}
                >
                    {missing.map((data) => (
                        <Card
                            key={data._id}
                            onPress={() => navigation.navigate('NewTaskCheck', { taskID: data._id })}
                            style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                height: 100,
                                backgroundColor: 'rgb(236, 235, 235)',
                                justifyContent: 'center',
                                marginTop: 5,
                                marginBottom: 5,
                                borderColor: '#d3d3d3',
                                margin: 20,
                            }}
                            contentStyle={{}}
                        >
                            <Card.Title
                                title={`${taskType.toUpperCase()}: ${data.postTitle}`}
                                subtitle={formatDate(data.createdAt)}
                                titleStyle={{
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Bold',
                                }}
                                subtitleStyle={{
                                    fontSize: 10,
                                    textAlign: 'center',
                                    fontFamily: 'Raleway-Regular',
                                }}
                            />
                            <Text style={{ fontFamily: 'Raleway-Bold', marginStart: 10 }}>{data.class.subject.subjectCode}</Text>
                        </Card>
                    ))}
                </List.Accordion>
            </List.Section>
        </ScrollView>
    );
};

export default function CheckScreen() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='CheckScreenContent' component={CheckScreenContent} />
                <Stack.Screen name='NewTaskCheck' component={NewTaskCheck} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
