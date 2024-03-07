import React, { useEffect, useState } from 'react';
import { List, Card, Button} from 'react-native-paper';
import { getCheckTask, getCoach, getCoachTask, getConnectTask } from '../../../services/student';
import formatDate from '../../../utils/formatDate';
import { ScrollView } from 'react-native-gesture-handler';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import {loadAsync} from 'expo-font'

const Stack = createNativeStackNavigator();

const loadFontsAsync = async () => {
  await loadAsync({
    'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
  });
};

loadFontsAsync();

const NewTaskCoach = ({navigation}) => {

  const route = useRoute();
  const {taskID} = route.params;
  const classType = 'coach';
  const [pageData, setData] = useState({});

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
        <ScrollView style = {{backgroundColor: 'white'}}>
        <View>
        <Card>
        {classType.toLowerCase() !== 'coach' && (
                                    <>
                                    {pageData.dueDate ? (
                                        <Text style = {{
                                          fontFamily: 'Raleway-Bold'
                                        }}>
                                            Due:<Text style = {{fontFamily: 'Raleway-Regular'}}>{formatDate(pageData.dueDate)}</Text>
                                        </Text>
                                    ) : (
                                        <Text style = {{fontFamily: 'Raleway-Regular'}}>'No Due Date'</Text>
                                    )}
                                </>
                            )}
                            </Card>
                            <Card style = {{backgroundColor: 'white', borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.1)', marginTop: 5, margin: 10}}>
                            <Card.Title titleStyle = {{fontFamily: 'Raleway-Bold'}} title = {`${classType.toUpperCase()}: ${pageData.postTitle}`}/>
                            </Card>
                            <Card style = {{backgroundColor: 'white', borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.1)', marginTop: 5, margin: 10}}>
                            <Card.Content>
                            <Text style = {{fontFamily: 'Raleway-Regular'}}>{pageData.postDescription}</Text>
                            </Card.Content>
                            </Card>
        
        
 
        </View>
        </ScrollView>
    
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
        <ScrollView style = {{
          backgroundColor: 'white'
        }}>
        <List.Section>
            {coachTask.map((data) => (
                <Card key={data._id} onPress = {() => navigation.navigate('NewTaskCoach', {taskID: data._id})} 
                style={{
                  borderRadius: 10, 
                  borderWidth: 2, 
                  height: 100,
                  backgroundColor: 'rgb(236, 235, 235)', 
                  justifyContent: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                  borderColor: '#d3d3d3',
                  margin: 20
                }} 
                contentStyle= {{
                  
                }}>
                <Card.Title title={`${taskType.toUpperCase()}: ${data.postTitle}`} subtitle={formatDate(data.createdAt)} 
                titleStyle= {{
                  flexWrap:'wrap', 
                  flexDirection: 'row',
                  fontSize: 15,
                  textAlign: 'center',
                  fontFamily: 'Raleway-Bold'
      
                }} subtitleStyle = {{
                  fontSize: 10,
                  textAlign: 'center',
                  fontFamily: 'Raleway-Regular'
                }} />
                        <Text style = {{fontFamily: 'Raleway-Bold', marginStart: 10}}>{data.class.subject.subjectCode}</Text>
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
