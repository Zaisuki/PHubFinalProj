import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { Chat, OverlayProvider, ChannelList, Channel, MessageList, MessageInput } from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { chatApiKey, chatUserId } from '../../chatConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useChatClient } from '../../chatFiles/useChatClient';
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const chatClient = StreamChat.getInstance(chatApiKey);
const Stack = createStackNavigator();

const filters = {
    members: {
      '$in': [chatUserId]
    },
  };

  const sort = {
    last_message_at: -1,
  };

const ChannelListScreen = props => {
    return (
    <ChannelList onSelect={(channel)=> {
        const {navigation} = props;
        navigation.navigate('ChannelScreen', {channel})
    }}
    filters = {filters}
    sort = {sort}/>
    ); 
};

const ChannelScreen = props => {
    const { route } = props;
    const {params: {channel}} = route;
    return (
        
        <Channel channel={channel}>
          <MessageList />
          <MessageInput />
        </Channel>
        
      );
};

const NavigationStack = () => {
    const { clientIsReady } = useChatClient();
  
    if (!clientIsReady) {
      return <Text>Loading chat ...</Text>
    }
return (
    <OverlayProvider>
    <Chat client={chatClient}>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="ChannelListScreen" component={ChannelListScreen}/>
            <Stack.Screen name="ChannelScreen" component={ChannelScreen}/>
        </Stack.Navigator>
    </Chat>
    </OverlayProvider>
);
};

const InboxScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, paddingTop: 0}}>
        <NavigationContainer independent= {true}>
            <NavigationStack />
        </NavigationContainer>
        </SafeAreaView>
    )
};


export default InboxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});