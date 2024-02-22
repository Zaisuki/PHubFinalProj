import { useEffect, useRef, useState } from 'react';
import '../../assets/scss/prof-scss/feed.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { postAnnouncement } from '../../services/professor';
import { feed } from '../../services/user';
import { convertDate } from '../../utils/convertDate';

function FeedProf() {
    const titleTextAreaRef = useRef(null);
    const descriptionTextAreaRef = useRef(null);
    const [titleVal, setTitleVal] = useState('');
    const [descriptionVal, setDescriptionVal] = useState('');
    const [titleCharacterCount, setTitleCharacterCount] = useState(0);
    const [descriptionCharacterCount, setDescriptionCharacterCount] = useState(0);
    const titleCharacterLimit = 30;
    const descriptionCharacterLimit = 500;
    const [announcements, setAnnouncements] = useState([]);

    const handleTitleChange = (e) => {
        const input = e.target.value;
        if (input.length <= titleCharacterLimit) {
            setTitleVal(input);
            setTitleCharacterCount(input.length);
        }
    };

    const handleDescriptionChange = (e) => {
        const input = e.target.value;
        if (input.length <= descriptionCharacterLimit) {
            setDescriptionVal(input);
            setDescriptionCharacterCount(input.length);
        }
    };
    const handleSubmit = async () => {
        if (titleVal !== '' && descriptionVal !== '') {
            const result = await postAnnouncement(titleVal, descriptionVal);
            if (result.message === 'Announcement posted') {
                // Todo: show gui for success notif add it to announcements
                setTitleVal('');
                setDescriptionVal('');
            }
        }
        // Todo: show gui empty inputs
    };
    useEffect(() => {
        if (titleTextAreaRef.current) {
            titleTextAreaRef.current.style.height = 'auto';
            titleTextAreaRef.current.style.height = titleTextAreaRef.current.scrollHeight + 'px';
        }
        if (descriptionTextAreaRef.current) {
            descriptionTextAreaRef.current.style.height = 'auto';
            descriptionTextAreaRef.current.style.height = descriptionTextAreaRef.current.scrollHeight + 'px';
        }
    }, [titleVal, descriptionVal]);

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
    useEffect(() => {
        console.log(announcements);
    }, [announcements]);
    return (
        <Container className='feed-post'>
            <Row>
                <Col sm={7}>
                    {announcements ? (
                        announcements.map((announcement) => (
                            <Card className='feed-announcement' key={announcement._id}>
                                <div className='header-announcement'>
                                    <h1>{announcement.header}</h1>
                                    <div className='header-time'>
                                        <h6>{convertDate(announcement.createdAt)[0]}</h6>
                                        <h6>{convertDate(announcement.createdAt)[1]}</h6>
                                    </div>
                                </div>
                                <p>{announcement.announcement}</p>
                                <h1>{announcement.class}</h1>
                                <h1>
                                    {announcement.professor.firstName} {announcement.professor.lastName}
                                </h1>
                            </Card>
                        ))
                    ) : (
                        <p className='feed-no-announcement'></p>
                    )}
                </Col>

                <Col>
                    <Card className='feed-post-one'>
                        <Row>
                            <Col>
                                <div className='text-one'>
                                    <h1>CREATE A POST</h1>
                                </div>

                                <div className='h2-text'>
                                    <h2>Title</h2>
                                </div>
                                <div className='input-placeholder'>
                                    <input className='p-2 bg-neutral-700 active active:outline-none focus:outline-none w-100 h-80' placeholder='Type something..' value={titleVal} onChange={handleTitleChange} rows='1' ref={titleTextAreaRef} />
                                    <p className='word-count'>
                                        {titleCharacterCount}/{titleCharacterLimit}
                                    </p>
                                </div>
                                <div className='h2-text-one'>
                                    <h2>Description</h2>

                                    <div className='input-placeholder-one'>
                                        <div className='textArea'>
                                            <textarea className='p-2 bg-neutral-700 active active:outline-none focus:outline-none w-100 h-80' placeholder='Type something..' value={descriptionVal} onChange={handleDescriptionChange} rows='1' ref={descriptionTextAreaRef}></textarea>
                                            <p className='word-count'>
                                                {descriptionCharacterCount}/{descriptionCharacterLimit}
                                            </p>
                                            <Button className='create-post' variant='success' onClick={handleSubmit}>
                                                Post
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default FeedProf;
