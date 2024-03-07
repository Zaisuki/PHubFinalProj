import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, ChannelList, MessageList, MessageInput, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import '../assets/scss/inbox.scss';
import { cookies } from '../services/entry';
import Card from 'react-bootstrap/Card';

const Inbox = () => {
    const [client, setClient] = useState(null);

    let chatUserId, chatUserToken, chatUserName;
    chatUserId = cookies.get('username');
    chatUserToken = cookies.get('chatToken');
    chatUserName = cookies.get('userFullName');
    const filters = { type: 'messaging', members: { $in: [chatUserId] } }; // yes AHHAHAHAHA
    const options = { state: true, presence: true, limit: 10 };
    const sort = { last_message_at: -1 };

    useEffect(() => {
        const newClient = new StreamChat('z2a8ej6rey5a');

        const handleConnectionChange = ({ online = false }) => {
            if (!online) return console.log('connection lost');
            setClient(newClient);
        };

        newClient.on('connection.changed', handleConnectionChange);

        newClient.connectUser(
            {
                id: chatUserId, // change id name, look at comment below
                name: chatUserName, // change name, look at comment below
            },
            chatUserToken
            // change token, look at comment below
        );

        return () => {
            newClient.off('connection.changed', handleConnectionChange);
            newClient.disconnectUser().then(() => console.log('connection closed'));
        };
    }, [chatUserId, chatUserToken, chatUserName]);

    if (!client) return null;

    return (
        <Chat client={client}>
            <div className='inbox'>
                <Card className='channel-list'>
                    <ChannelList filters={filters} sort={sort} options={options} />
                </Card>
                <Card className='main-chat'>
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

export default Inbox;
