import * as React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { List, Card, Button } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { pakyu } from '../../../mgadimahanapnaimage';
import * as DocumentPicker from 'expo-document-picker';

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
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
  
    return (
        <List.Section>
        <List.Accordion
          title="This Week"
          expanded={expanded}
          onPress={handlePress}>
          
          <Card onPress = {() => navigation.push("NewTask")} 
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
          <Card.Title title="CHECK: Module 21" subtitle="February 29, 2024" 
          titleStyle= {{
            flexWrap:'wrap', 
            flexDirection: 'row',
            fontSize: 15,
            textAlign: 'center'

          }} subtitleStyle = {{
            fontSize: 10,
            textAlign: 'center'
          }} />
      </Card>

      <Card onPress = {() => console.log('Pressed')} 
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
          <Card.Title title="CHECK: Module 22" subtitle="February 29, 2024" 
          titleStyle= {{
            flexWrap:'wrap', 
            flexDirection: 'row',
            fontSize: 15,
            textAlign: 'center'

          }} subtitleStyle = {{
            fontSize: 10,
            textAlign: 'center'
          }} />
      </Card>
        </List.Accordion>

        <List.Accordion
          title="Next Week">
          <Card onPress = {() => console.log('Pressed')} 
          style={{
            borderRadius: 15, 
            borderWidth: 2, 
            height: 100, 
            justifyContent: 'center',
            marginTop: 5,
            marginTop: 5,
            borderColor: '#d3d3d3',
          }} 
          contentStyle= {{
            
          }}>
          <Card.Title title="CHECK: Module 23" subtitle="February 29, 2024" 
          titleStyle= {{
            flexWrap:'wrap', 
            flexDirection: 'row',
            fontSize: 15,
            textAlign: 'center'

          }} subtitleStyle = {{
            fontSize: 10,
            textAlign: 'center'
          }} />
      </Card>
        </List.Accordion>
  
        <List.Accordion
          title="Later">
          <Card onPress = {() => console.log('Pressed')} 
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
          <Card.Title title="CHECK: Module 24" subtitle="February 29, 2024" 
          titleStyle= {{
            flexWrap:'wrap', 
            flexDirection: 'row',
            fontSize: 15,
            textAlign: 'center'

          }} subtitleStyle = {{
            fontSize: 10,
            textAlign: 'center'
          }} />
      </Card>
      <Card onPress = {() => console.log('Pressed')} 
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
          <Card.Title title="CHECK: Module 25" subtitle="February 29, 2024" 
          titleStyle= {{
            flexWrap:'wrap', 
            flexDirection: 'row',
            fontSize: 15,
            textAlign: 'center'

          }} subtitleStyle = {{
            fontSize: 10,
            textAlign: 'center'
          }} />
        </Card>
        </List.Accordion>
      </List.Section>
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
