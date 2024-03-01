import React, { useEffect, useState } from 'react';
import { List, Card, Button, View, Text } from 'react-native-paper';
import { getCoach } from '../../../services/student';
import formatDate from '../../../utils/formatDate';

const CoachScreen = ({ navigation }) => {
    const [expanded, setExpanded] = useState(true);
    const taskType = 'coach';
    const [coachTask, setCoachTask] = useState([]);

    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCoach();
                setCoachTask(response.coachTask);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <List.Section>
            {coachTask.map((data) => (
                <Card className='card-within' key={data._id}>
                    {/* <Button onClick={() => navigation.navigate(`/task-new/coach/${data._id}`)}> */}
                    <Card>
                        <Text>
                            {taskType.toUpperCase()}: <Text>{data.postTitle}</Text>
                        </Text>
                        <Text>{formatDate(data.createdAt)}</Text>
                        <Text>{data.class.subject.subjectCode}</Text>
                    </Card>
                    {/* </Button> */}
                </Card>
            ))}
        </List.Section>
    );
};

export default CoachScreen;
