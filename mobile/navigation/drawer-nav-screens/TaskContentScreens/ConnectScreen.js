import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { List, Card, Button, useTheme } from 'react-native-paper';
import { getConnect } from '../../../services/student';
import formatDate from '../../../utils/formatDate';
import { ScrollView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getCheckTask, getCoach, getCoachTask, getConnectTask } from '../../../services/student';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { loadAsync } from 'expo-font';
import convertPercentage from '../../../utils/convertPercentage';
import { RadioButton } from 'react-native-paper';
const Stack = createNativeStackNavigator();
const loadFontsAsync = async () => {
    await loadAsync({
        'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
        'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
    });
};

loadFontsAsync();

const NewTaskConnect = ({ navigation }) => {
    const route = useRoute();
    const { taskID } = route.params;
    const classType = 'connect';
    const [pageData, setData] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState('');
    const handleConnectSubmit = async () => {
        let result = await submitConnect(taskID, selectedChoice);
        if (result.message === 'Connect submitted') {
            updateForm();
        }
    };
    const handleRadioChange = (event) => {
        setSelectedChoice(event.target.value);
    };
    const updateForm = () => {
        setSelectedChoice('');
        setSubmitted((prevState) => !prevState);
    };
    useEffect(() => {
        const fetchData = async () => {
            let data;
            if (classType === 'coach') {
                data = await getCoachTask(taskID);
            } else if (classType === 'connect') {
                data = await getConnectTask(taskID);
                setSubmitted(data.message.studentSubmission.length !== 0);
            } else {
                data = await getCheckTask(taskID);
                setSubmitted(data.message.studentSubmission.length !== 0);
            }
            setData(data.message);
        };
        fetchData();
    }, [taskID, classType, submitted]);

    return (
        <ScrollView>
            <View>
                <Card>
                    {classType.toLowerCase() !== 'coach' && (
                        <>
                            {pageData.dueDate ? (
                                <Text
                                    style={{
                                        fontFamily: 'Raleway-Bold',
                                    }}
                                >
                                    Due:<Text> {formatDate(pageData.dueDate)}</Text>
                                </Text>
                            ) : (
                                <Text style={{ fontFamily: 'Raleway-Bold' }}>'No Due Date'</Text>
                            )}
                        </>
                    )}
                    <Text style={{ fontFamily: 'Raleway-Bold' }}>
                        {classType.toUpperCase()}: <Text>{pageData.postTitle}</Text>
                    </Text>
                    <Text style={{ fontFamily: 'Raleway-Regular' }}>{pageData.postDescription}</Text>
                </Card>
                {classType.toLowerCase() === 'connect' && pageData.postChoices && (
                    <Card containerStyle={{ marginBottom: 20 }}>
                        <Text>Pool</Text>

                        {submitted ? (
                            <View style={{ padding: 10 }}>
                                {pageData.postChoices.map((dataPage) => (
                                    <View key={dataPage._id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>{pageData.studentSubmission[0] && <Text>{pageData.studentSubmission[0].answer._id === dataPage._id ? '✔️' : ''}</Text>}</Text>
                                        <Text>{dataPage.choice}</Text>
                                        <Text>{convertPercentage(dataPage.respondents, pageData.class.totalStudents)}%</Text>
                                    </View>
                                ))}
                            </View>
                        ) : (
                            <View style={{ padding: 10 }}>
                                {pageData.postChoices.map((dataPage) => (
                                    <>
                                        {pageData.studentSubmission[0] && (
                                            <RadioButton key={dataPage._id} onPress={() => handleRadioChange(dataPage)}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text>{dataPage.choice}</Text>
                                                </View>
                                            </RadioButton>
                                        )}
                                    </>
                                ))}
                                <Button title='Submit' onPress={handleConnectSubmit} buttonStyle={{ marginTop: 10 }} />
                            </View>
                        )}
                    </Card>
                )}
            </View>
        </ScrollView>
    );
};

const ConnectScreenContent = ({ navigation }) => {
    const [expanded, setExpanded] = useState(true);
    const taskType = 'connect';
    const [thisWeek, setThisWeek] = useState([]);
    const [nextWeek, setNextWeek] = useState([]);
    const [later, setLater] = useState([]);
    const [missing, setMissing] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getConnect();
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
                    title='This Week'
                    titleStyle={{
                        fontFamily: 'Raleway-Bold',
                    }}
                    expanded={expanded}
                    onPress={handlePress}
                >
                    {thisWeek.map((data) => (
                        <Card
                            key={data._id}
                            onPress={() => navigation.navigate('NewTaskConnect', { taskID: data._id })}
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
                            onPress={() => navigation.navigate('NewTaskConnect', { taskID: data._id })}
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
                            onPress={() => navigation.navigate('NewTaskConnect', { taskID: data._id })}
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
                            onPress={() => navigation.navigate('NewTaskConnect', { taskID: data._id })}
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

export default function ConnectScreen() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='ConnectScreenContent' component={ConnectScreenContent} />
                <Stack.Screen name='NewTaskConnect' component={NewTaskConnect} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
