import Card from 'react-bootstrap/Card';
import '../../assets/scss/feed.scss';
import feedImg from '../../assets/img/feed.png';
import { useEffect, useState } from 'react';
import { convertDate } from '../../utils/convertDate';
import { feed } from '../../services/user';

function Feed() {
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await feed();
                setAnnouncements(response.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Card className='feed-student'>
            <Card className='feed-student-body'>
                <img className='feed-img' src={feedImg} alt='feed' />
                <h1></h1>
                {announcements ? (
                    announcements.map((announcement) => (
                        <Card className='feed-content' key={announcement._id}>
                            <div className='header-announcement'>
                                <h1>{announcement.header}</h1>
                                <div className='header-time'>
                                    <h6>{convertDate(announcement.createdAt)[0]}</h6>
                                    <h6>{convertDate(announcement.createdAt)[1]}</h6>
                                </div>
                            </div>
                            <p>{announcement.announcement}</p>
                            {announcement.class && <h1>{announcement.class.subject.subjectCode}</h1>}
                            <h1>
                                {announcement.professor.firstName} {announcement.professor.lastName}
                            </h1>
                        </Card>
                    ))
                ) : (
                    <p className='feed-no-announcement'></p>
                )}
            </Card>
        </Card>
    );
}

export default Feed;
