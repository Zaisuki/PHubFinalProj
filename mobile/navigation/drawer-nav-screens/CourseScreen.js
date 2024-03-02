import React, { useEffect, useState } from 'react';
import { course } from '../../services/user';
import { StyleSheet, Text, View } from 'react-native';

const CourseScreen = ({navigation}) => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await course();
                setSubjects(() => (response.userType === 'student' ? response.userDetails.studentSubjects.class : response.userDetails.professorHandledClass.class));
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
                    <View key={subject._id}>
                        <Text>
                            {subject.subject.subjectCode}: <Text>{subject.block}</Text>
                        </Text>
                        <View>
                            <Text> Instructor </Text>
                            <Text>
                                {subject.professor.firstName} {subject.professor.lastName}
                            </Text>
                            {/* <Button onPress={() => navigate(`/course-new/${subject._id}`)} type='button' className='btn btn-dark' data-mdb-ripple-init>
                                View */}
                            {/* </Button> */}
                        </View>
                    </View>
                ))
            ) : (
                <Text>No Announcement</Text>
            )}
        </View>
    </View>
    )
};

export default CourseScreen;
