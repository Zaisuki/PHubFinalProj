import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { List, Card, Button } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { pakyu } from '../../../mgadimahanapnaimage';
import * as DocumentPicker from 'expo-document-picker';
import formatDate from '../../../utils/formatDate';
import { getCheck } from '../../../services/student';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const dimensions = Dimensions.get('window');   
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;



const NewTask = ({navigation, route}) => {
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
      <Card style ={{
        borderWidth: 3,
        marginTop: 5,
        marginBottom: 5
      }}>
        <Card.Title title = "Module 24" subtitle = "Feb 24, 2024"/>
        <Card.Content>
          <Text variant="bodyMedium"> Please blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah {"\n"}</Text>
        </Card.Content>
        <Card.Cover source = {{uri: 'https://picsum.photos/700'}}/>
        <Text variant="bodyMedium"> {"\n"} Tas eto isunod niyo rin para mas mahirapan kayo ganitoganyanganyanganyanganyanganyanganyangan{"\n"}yanganyanganyanganyanganyanganyan</Text>
      </Card>

      <Card style ={{
        borderWidth: 3,
        marginTop: 5,
        marginBottom: 5
      }}>
        <Card.Content>
          <Text>Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag Balagbag </Text>
        </Card.Content>
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

const CheckScreenContent =  ({navigation, route}) => {
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
      <ScrollView>
        <List.Section>
        <List.Accordion
          title="No Due Date"
          expanded={expanded}
          onPress={handlePress}>
          {noDueDate.map((data) => (
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
          title="This Week">
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
  
  export default function CheckScreen() {
    return (
      <NavigationContainer independent ={true}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name = "CheckScreenContent" component={CheckScreenContent}/>
          <Stack.Screen name = "NewTask" component = {NewTask}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
