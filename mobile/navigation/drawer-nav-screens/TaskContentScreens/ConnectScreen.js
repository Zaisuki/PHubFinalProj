import * as React from 'react';
import { List, Card, Button } from 'react-native-paper';

const ConnectScreen =  ({navigation}) => {
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
        return (
          <List.Section>
          <List.Accordion
            title="This Week"
            expanded={expanded}
            onPress={handlePress}>
            
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
              marginBottom: 5,
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
  
  export default ConnectScreen;
