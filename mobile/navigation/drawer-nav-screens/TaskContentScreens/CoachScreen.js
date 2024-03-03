import React, { useEffect, useState } from 'react';
import { List, Card, Button, View, Text } from 'react-native-paper';
import { getCheckTask, getCoach, getCoachTask, getConnectTask } from '../../../services/student';
import formatDate from '../../../utils/formatDate';
import { ScrollView } from 'react-native-gesture-handler';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const NewTaskCoach = ({navigation, route}) => {

  const classType = 'coach';
  const [pageData, setData] = useState({});
    useEffect(() => {
      const taskID = route.taskID;
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
              type: "application/pdf",
              multiple: true
               
            });
  
            const formData = new FormData();
            const assets = doc.assets
            if(!assets) return
  
            const file = assets[0];
  
            const pdfFile = {
              name: file.name.split(".")[0],
              uri: file.uri,
              type: file.mimeType,
              size:file.size
            };
  
            formData.append("pdfFile", pdfFile);
          } catch (err) {
            
            console.log("User Cancelled the upload", err);
          }
        }
      return (
        <View>
        <Card>
        {classType.toLowerCase() !== 'coach' && (
                                    <>
                                    {pageData.dueDate ? (
                                        <Text>
                                            Due:<Text>{formatDate(pageData.dueDate)}</Text>
                                        </Text>
                                    ) : (
                                        <Text>'No Due Date'</Text>
                                    )}
                                </>
                            )}
                            {classType.toUpperCase()}: <Text>{pageData.postTitle}</Text>
                            <Text>{pageData.postDescription}</Text>
        </Card>
        

        <Button onPress={selectDoc} mode = 'contained'> 
        Add Work +
        </Button>
        
        <Button mode='outlined' style = {{
          margin: 5
        }}>
          Mark as done
        </Button>
        </View>
    
    );
      
  };
const CoachScreenContent = ({ navigation }) => {
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
                <Card key={data._id} onPress = {() => navigation.navigate('NewTaskCoach', {taskID: data._id})} 
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

export default function CoachScreen() {
  return (
    <NavigationContainer independent ={true}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name = "CoachScreenContent" component={CoachScreenContent}/>
        <Stack.Screen name = "NewTaskCoach" component = {NewTaskCoach}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
