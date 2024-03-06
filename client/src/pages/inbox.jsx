import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import "../assets/scss/inbox.scss"
import { cookies } from "../services/entry";
import Card from 'react-bootstrap/Card';

const filters = { type: "messaging" };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const inbox = () => {
  const [client, setClient] = useState(null);
  
  
  let chatUserId, chatUserToken, chatUserName;
  chatUserId = cookies.get('username');
  chatUserToken = cookies.get('chatToken');
  chatUserName = cookies.get('userFullName');

  useEffect(() => {
    const newClient = new StreamChat("2sgdxg7zqddx");

    const handleConnectionChange = ({ online = false }) => {
      if (!online) return console.log("connection lost");
      setClient(newClient);
    };

    newClient.on("connection.changed", handleConnectionChange);

    newClient.connectUser(
      {
        id: chatUserId, // change id name, look at comment below
        name: chatUserName, // change name, look at comment below
      },
      chatUserToken
      // change token, look at comment below
    );

    return () => {
      newClient.off("connection.changed", handleConnectionChange);
      newClient.disconnectUser().then(() => console.log("connection closed"));
    };
  }, []);

  if (!client) return null;

  return ( 
    
    <Chat client={client}>
      <div className="inbox">
      <Card className="channel-list">
        <ChannelList filters={filters} sort={sort} options={options} />
      </Card>
      <Card className="main-chat">
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Card>
    </div>
    </Chat>
  );
};


// chatUserId = 'glai';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2xhaSJ9.MET1LWaTy9TLgjcRKIj6Xx_ZpAvMexEcWEeJG94cIJA';
// chatUserName = 'glai';

// const chatUserId = "ley";
// const chatUserToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGV5In0.AEY82cfu50qEEWymQ2Belg1k_daFpUD4wulwy9Of_L8";
// const chatUserName = "ley";

// chatUserId = 'stephen';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3RlcGhlbiJ9.LaDhU8ohMau7z0kSrXZO5ignL6mYrVHd60CHtxYd98Q';
// chatUserName = 'stephen';

// chatUserId = 'tian';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGlhbiJ9.2FNBqakcpsDmj5bcZdDkALqEjI2cwWRu7wOxj-ZGOJg';
// chatUserName = 'tian';

export default inbox;
