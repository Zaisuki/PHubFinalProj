import React, { useEffect, useState } from 'react';
import { List, Card, Button, View, Text } from 'react-native-paper';
import { getCoach } from '../../../services/student';
import formatDate from '../../../utils/formatDate';
import { ScrollView } from 'react-native-gesture-handler';

const CoachScreen = ({ navigation }) => {
    const [expanded, setExpanded] = useState(true);
    const taskType = 'coach';
    const [coachTask, setCoachTask] = useState([]);

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
        <ScrollView>
        <List.Section>
            {coachTask.map((data) => (
                <Card key={data._id} onPress = {() => console.log('Pressed')} 
                style={{
                  borderRadius: 15, 
                  borderWidth: 2, 
                  height: 100, 
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                  borderColor: '#d3d3d3',
                }} 
                contentStyle= {{
                  
                }}>
                <Card.Title title={`${taskType.toUpperCase()}: ${data.postTitle}`} subtitle={formatDate(data.createdAt)} 
                titleStyle= {{
                  flexWrap:'wrap', 
                  flexDirection: 'row',
                  fontSize: 15,
                  textAlign: 'center'
      
                }} subtitleStyle = {{
                  fontSize: 10,
                  textAlign: 'center'
                }} />
                        <Text>{data.class.subject.subjectCode}</Text>
            </Card>
            ))}
               
        </List.Section>
        </ScrollView>
    );
};

export default CoachScreen;
