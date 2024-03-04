import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { List, Card, Button } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { pakyu } from '../../../mgadimahanapnaimage';
import * as DocumentPicker from 'expo-document-picker';
import formatDate from '../../../utils/formatDate';
import { getCheck, getCheckTask, getCoachTask, getConnectTask } from '../../../services/student';
import { ScrollView } from 'react-native-gesture-handler';
import {loadAsync} from 'expo-font';
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

const NewTaskCheck = ({navigation}) => {
  loadFontsAsync();
  const route = useRoute();
  const {taskID} = route.params;
  const classType = 'check';
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
      <View>
       <Card>
        {classType.toLowerCase() !== 'coach' && (
                                    <>
                                    {pageData.dueDate ? (
                                        <Text style = {{fontFamily: 'Raleway-Bold'}}>
                                            Due:<Text>{formatDate(pageData.dueDate)}</Text>
                                        </Text>
                                    ) : (
                                        <Text style = {{fontFamily: 'Raleway-Bold'}}>'No Due Date'</Text>
                                    )}
                                </>
                            )}
                            <Text style = {{fontFamily: 'Raleway-Bold'}}>{classType.toUpperCase()}: <Text>{pageData.postTitle}</Text></Text>
                            <Text style = {{fontFamily: 'Raleway-Regular'}}>{pageData.postDescription}</Text>
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

const CheckScreenContent =  ({navigation}) => {
    loadFontsAsync();
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
      <ScrollView style = {{
        backgroundColor: 'white'
      }}>
        <List.Section>
        <List.Accordion
          title="No Due Date"
          titleStyle = {{
            fontFamily: 'Raleway-Bold'
          }}
          expanded={expanded}
          onPress={handlePress}>
          {noDueDate.map((data) => (
                <Card key={data._id} onPress = {() => navigation.navigate('NewTaskCheck', {taskID: data._id})} 
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
          

     
        </List.Accordion>

        <List.Accordion
          title="This Week"
          titleStyle = {{
            fontFamily: 'Raleway-Bold'
          }}>
         {thisWeek.map((data) => (
                <Card key={data._id} onPress = {() => navigation.navigate('NewTaskCheck', {taskID: data._id})} 
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
        </List.Accordion>
        <List.Accordion
          title="Next Week"
          titleStyle = {{
            fontFamily: 'Raleway-Bold'
          }}>
         {nextWeek.map((data) => (
                <Card key={data._id} onPress = {() => navigation.navigate('NewTaskCheck', {taskID: data._id})} 
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
        </List.Accordion>
  
        <List.Accordion
          title="Later"
          titleStyle = {{
            fontFamily: 'Raleway-Bold'
          }}>
          {later.map((data) => (
                <Card key={data._id} onPress = {() => navigation.navigate('NewTaskCheck', {taskID: data._id})} 
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
        </List.Accordion>
        <List.Accordion
          title="Missing"
          titleStyle = {{
            fontFamily: 'Raleway-Bold'
          }}>
          {missing.map((data) => (
                <Card key={data._id} onPress = {() => navigation.navigate('NewTaskCheck', {taskID: data._id})} 
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
        </List.Accordion>
      </List.Section>
      </ScrollView>
    );
  };
  
  export default function CheckScreen() {
    return (
      <NavigationContainer independent ={true}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name = "CheckScreenContent" component={CheckScreenContent}/>
          <Stack.Screen name = "NewTaskCheck" component = {NewTaskCheck}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
