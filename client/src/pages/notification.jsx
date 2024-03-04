import { useEffect, useState } from 'react';
import '../assets/scss/notification.scss';
import Table from 'react-bootstrap/Table';
import { socket } from '../utils/socket';
import { getNotification } from '../services/user';
import { convertDate } from '../utils/convertDate';
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosNotifications, IoMdNotificationsOutline } from "react-icons/io";



function Notification() {
    const [notifications, setNotification] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getNotification();
                setNotification(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        socket.on('reminder_notification', (reminder) => {
            setNotification((prevState) => [reminder, ...prevState]);
        });

        return () => {
            socket.off('reminder_notification');
        };
    }, []);
    return (
        <div className='bgN'>
           
        <div className='notif'>
        <Table hover className='table-main'>
            
            <tbody className='t-body'>
           <h1 className='ioss'> Notification</h1>
            {/* <thead className='table-header'>
                <tr>
                    <th>Header</th>
                    <th>Content</th>
                    <th>Time/Date</th>
                </tr>
            </thead> */}
                {notifications ? (
                    notifications.map((notif, idx) => (
                        <div className='desc-tr' key={idx}>
                            
                            <div className='bag'>
                            <IoMdNotificationsOutline className='ios' />
                            
                            <div className='from'>{notif.header}</div>
                            <div className='content'>{notif.description}</div>
                            <div className='time-date'><MdOutlineAccessTime />{convertDate(notif.updatedAt)}</div>
                        </div>
                        </div>
                    ))
                ) : (
                    <tr>
                        <td className='feed-no-announcement'></td>
                    </tr>
                )}
            </tbody>
        </Table>
        </div>
        </div>
    );
}

export default Notification;
