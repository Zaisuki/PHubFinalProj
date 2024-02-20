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

const filters = { type: "messaging" };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const inbox = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const newClient = new StreamChat("2sgdxg7zqddx");

    const handleConnectionChange = ({ online = false }) => {
      if (!online) return console.log("connection lost");
      setClient(newClient);
    };

    newClient.on("connection.changed", handleConnectionChange);

    newClient.connectUser(
      {
        id: "stephen", // change id name, look at comment below
        name: "stephen", // change name, look at comment below
      },
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3RlcGhlbiJ9.LaDhU8ohMau7z0kSrXZO5ignL6mYrVHd60CHtxYd98Q"
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
      <div className="channel-list">
        <ChannelList filters={filters} sort={sort} options={options} />
      </div>
      <div className="main-chat">
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </div>
    </div>
    </Chat>
  );
};

// chatUserId = 'renek';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicmVuZWsifQ.92NK8Q4keQCHit2IpjKfVYAD80UVYubMB_y9gIpNkqY';
// chatUserName = 'renek';

// chatUserId = 'glai';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2xhaSJ9.MET1LWaTy9TLgjcRKIj6Xx_ZpAvMexEcWEeJG94cIJA';
// chatUserName = 'glai';

// chatUserId = 'ley';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGV5In0.AEY82cfu50qEEWymQ2Belg1k_daFpUD4wulwy9Of_L8';
// chatUserName = 'ley';

// chatUserId = 'stephen';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3RlcGhlbiJ9.LaDhU8ohMau7z0kSrXZO5ignL6mYrVHd60CHtxYd98Q';
// chatUserName = 'stephen';

// chatUserId = 'tian';
// chatUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGlhbiJ9.2FNBqakcpsDmj5bcZdDkALqEjI2cwWRu7wOxj-ZGOJg';
// chatUserName = 'tian';

export default inbox;
