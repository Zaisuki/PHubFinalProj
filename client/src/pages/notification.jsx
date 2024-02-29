import { useEffect, useState } from 'react';
import '../assets/scss/notification.scss';
import Table from 'react-bootstrap/Table';
import { socket } from '../utils/socket';
import { getNotification } from '../services/user';
import { convertDate } from '../utils/convertDate';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosNotifications } from "react-icons/io";
import { LiaPercentageSolid } from "react-icons/lia";
import Container from "react-bootstrap/Container";

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
            <Navbar className="nav-nav" expand="lg">
        <Container fluid className="cfluid">
          <Navbar.Brand className="nav-text" href="#home">
          <IoIosNotifications />
            NOTIFICATION
          </Navbar.Brand>

          <Nav className="nav-b"></Nav>
        </Container>
      </Navbar>
        <div className='notif'>
        <Table hover className='table-main'>
            <thead className='table-header'>
                <tr>
                    <th>Header</th>
                    <th>Content</th>
                    <th>Time/Date</th>
                </tr>
            </thead>
            <tbody className='t-body'>
                {notifications ? (
                    notifications.map((notif, idx) => (
                        <tr className='desc-tr' key={idx}>
                            <td className='from'>{notif.header}</td>
                            <td className='content'>{notif.description}</td>
                            <td className='time-date'>{convertDate(notif.updatedAt)}</td>
                        </tr>
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
