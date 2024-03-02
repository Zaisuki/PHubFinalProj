import React, { useEffect, useState } from 'react';
import { List, Card, Button, Text } from 'react-native-paper';
import { getConnect } from '../../../services/student';
import formatDate from '../../../utils/formatDate';
import { ScrollView } from 'react-native-gesture-handler';

const ConnectScreen =  ({navigation}) => {
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
          <ScrollView>

          <List.Section>
          <List.Accordion
            title="This Week"
            expanded={expanded}
            onPress={handlePress}>
                                {thisWeek.map((data) => (
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

            
          </List.Accordion>
  
          <List.Accordion
            title="Next Week">
             {nextWeek.map((data) => (
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
          </List.Accordion>
    
          <List.Accordion
            title="Later">
             {later.map((data) => (
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
        
          </List.Accordion>
          <List.Accordion
            title="Missing">
             {missing.map((data) => (
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
        
          </List.Accordion>
        </List.Section>
          </ScrollView>
          );
        };
  
  export default ConnectScreen;
