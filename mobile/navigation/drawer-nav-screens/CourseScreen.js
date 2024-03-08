import React, { useEffect, useState } from 'react';
import { course } from '../../services/user';
import { List, Card, Button } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const CourseScreenContent = ({ navigation }) => {
    const [subjects, setSubjects] = useState([]);
    const handlePress = () => {
        navigation.navigate('CourseNew', { subjectId: subject._id });
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await course();
                setSubjects(() => response.userDetails.studentSubjects[0].class);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <View>
            <View>
                {subjects ? (
                    subjects.map((subject) => (
                        <Card containerStyle={{ borderRadius: 8, borderWidth: 1, borderColor: 'rgb(219, 188, 44)', backgroundColor: 'white', justifyContent: 'center', marginTop: 9, marginBottom: 5, borderColor: '#d3d3d3', margin: 20 }} wrapperStyle={{}} key={subject._id}>
                            <Text>{subject.block}</Text>
                            <View style={{ textAlign: 'center', fontFamily: 'Raleway-Bold', fontSize: 13 }}>
                                <Text style={{}}>{subject.subject.subjectCode}</Text>
                                <Text style={{}}>
                                    {subject.professor.firstName} {subject.professor.lastName}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('CourseNew', { subjectId: subject._id });
                                    }}
                                    style={{}}
                                >
                                    <Text style={{}}>Open Course</Text>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    ))
                ) : (
                    <Text>No Course</Text>
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
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
export default CourseScreenContent;
const ClassworkTab = () => (
    <ScrollView>
        {tasks.length > 0 ? (
            tasks.map((data) => (
                <Card key={data._id} containerStyle={{ marginBottom: 10 }}>
                    <Card.Title>{data.postTitle}</Card.Title>
                    <Card.Divider />
                    <Card.FeaturedSubtitle>{formatDate(data.createdAt)}</Card.FeaturedSubtitle>
                    {/* <Card.Image source={require('../path/to/your/image.png')} /> */}
                    <Text onPress={() => navigate(`/task-new/${data.postChoices ? 'connect' : data.highestPossibleScore >= 0 ? 'check' : 'coach'}/${data._id}`)}>{data.postChoices ? 'CONNECT' : data.highestPossibleScore >= 0 ? 'CHECK' : 'COACH'}</Text>
                </Card>
            ))
        ) : (
            <Text>No Task yet</Text>
        )}
    </ScrollView>
);

const PeopleTab = () => (
    <ScrollView>
        <Card containerStyle={{ marginBottom: 10 }}>
            <Card.Title>Instructor</Card.Title>
            <Card.Divider />
            <Text>{`${professor.firstName} ${professor.middleName} ${professor.lastName}`}</Text>
        </Card>
        <Card containerStyle={{ marginBottom: 10 }}>
            <Card.Title>Students</Card.Title>
            <Card.Divider />
            {people.length > 0 ? people.map((data) => <Text key={data._id}>{`${data.firstName} ${data.middleName} ${data.lastName}`}</Text>) : <Text>No Students yet</Text>}
        </Card>
    </ScrollView>
);
function CourseNew() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontFamily: 'Raleway-Bold' },
                tabBarIndicatorStyle: { backgroundColor: '#dbbc2c' },
            }}
        >
            <Tab.Screen name='Classwork' component={ClassworkTab} />
            <Tab.Screen name='People' component={ConnectScreen} />
        </Tab.Navigator>
    );
}
export function CourseScreen() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='CourseScreenContent' component={CourseScreenContent} />
                <Stack.Screen name='CourseNew' component={CourseNew} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
