import React, { useEffect, useState } from "react";
import { useChatContext, useChannelStateContext } from "stream-chat-react";
import './assets/scss/inbox.scss'

const Users: React.FC = () => {
    const { client } = useChatContext();
  const { channel } = useChannelStateContext();
  const [channelUsers, setChannelUsers] = useState<Array<{ name: string; online: boolean }>>([]);
  useEffect(() => {
    const updateChannelUsers = (event?: any) => {
      // test if the updated user is a member of this channel
      if (!event || channel.state.members[event.user!.id] !== undefined) {
        setChannelUsers(
          Object.values(channel.state.members).map((user) => ({
            name: user.user_id!,
            online: !!user.user!.online,
            avatar: user.user!.image, 
          })),
        );
      }
    };

    updateChannelUsers();

    //
    client.on('user.presence.changed', updateChannelUsers);

    return () => {
      client.off('user.presence.changed', updateChannelUsers);
    };
  }, [client, channel]);

  return (
    <ul className='users-list'>
      {channelUsers.map((member) => (
        <li key={member.name}>
          {member.name} - {member.online ? 'online' : 'offline'}
          
        </li>
      ))}
    </ul>
  );
};

export default Users;