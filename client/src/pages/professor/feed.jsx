import { useEffect, useRef, useState } from 'react';
import '../../assets/scss/prof-scss/feed.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { postAnnouncement } from '../../services/professor';
import { feed } from '../../services/user';
import { convertDate } from '../../utils/convertDate';
import { FaFeatherAlt, FaTrash, FaBold, FaUnderline, FaRegPaperPlane } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa6';
import { MdOutlineFormatItalic } from 'react-icons/md';


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
    const [isTitleBold, setIsTitleBold] = useState(false);
    const [isTitleItalic, setIsTitleItalic] = useState(false);
    const [isTitleUnderline, setIsTitleUnderline] = useState(false);
    const [isDescriptionBold, setIsDescriptionBold] = useState(false);
    const [isDescriptionItalic, setIsDescriptionItalic] = useState(false);
    const [isDescriptionUnderline, setIsDescriptionUnderline] = useState(false);

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

    const toggleTitleBold = () => {
        setIsTitleBold((prev) => !prev);
    };

    const toggleTitleItalic = () => {
        setIsTitleItalic((prev) => !prev);
    };

    const toggleTitleUnderline = () => {
        setIsTitleUnderline((prev) => !prev);
    };

    const toggleDescriptionBold = () => {
        setIsDescriptionBold((prev) => !prev);
    };

    const toggleDescriptionItalic = () => {
        setIsDescriptionItalic((prev) => !prev);
    };

    const toggleDescriptionUnderline = () => {
        setIsDescriptionUnderline((prev) => !prev);
    };

    const handleSubmit = async () => {
        if (titleVal !== '' && descriptionVal !== '') {
            const result = await postAnnouncement(titleVal, descriptionVal);
            if (result.message === 'Announcement posted') {
                setTitleVal('');
                setDescriptionVal('');
                // Apply styles based on state variables
                // setTitleStyle({
                //   fontStyle: isTitleItalic ? "italic" : "normal",
                //   fontWeight: isTitleBold ? "bold" : "normal",
                //   textDecoration: isTitleUnderline ? "underline" : "none",
                // });
                // setDescriptionStyle({
                //   fontStyle: isDescriptionItalic ? "italic" : "normal",
                //   fontWeight: isDescriptionBold ? "bold" : "normal",
                //   textDecoration: isDescriptionUnderline ? "underline" : "none",
                // });
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

    return (
        <Container className='feed-post'>
            <Row>
                <Col sm={7}>
                    {announcements ? (
                        announcements.map((announcement) => (
                            <Card className='feed-announcement' key={announcement._id}>
                                <div className='header-announcement'>
                                    <h1 className={`ann ${isTitleBold ? 'bold' : ''} ${isTitleItalic ? 'italic' : ''} ${isTitleUnderline ? 'underline' : ''}`}>{announcement.header}</h1>
                                    <div className='trash-dd'>
                                        <DropdownButton className='makeitdrop' id='dropdown-menu-align-right' align='right' variant='none'>
                                            <Dropdown.Item eventKey='1'>Delete</Dropdown.Item>
                                        </DropdownButton>
                                    </div>

                                    <h6 className='time'>{convertDate(announcement.createdAt)}</h6>

                                    <h1 className='fln'>
                                        <FaUserTie className='tie' /> {announcement.professor.firstName} {announcement.professor.lastName}
                                        {'・'}
                                    </h1>
                                </div>
                                <hr />
                                <p className={`${isDescriptionBold ? 'bold' : ''} ${isDescriptionItalic ? 'italic' : ''} ${isDescriptionUnderline ? 'underline' : ''}`}>{announcement.announcement}</p>
                                <h1>{announcement.class}</h1>
                                <br></br>
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
                                    <h1 className='create'>CREATE A POST</h1>
                                </div>
                                <div className='h2-text'>
                                    <h2 className='title'>Title</h2>
                                    <input
                                        className='input-placeholder p-2 bg-neutral-700 active active:outline-none focus:outline-none'
                                        placeholder='Write here...'
                                        value={titleVal}
                                        onChange={handleTitleChange}
                                        rows='1'
                                        style={{
                                            fontWeight: isTitleBold ? 'bold' : 'normal',
                                            fontStyle: isTitleItalic ? 'italic' : 'normal',
                                            textDecoration: isTitleUnderline ? 'underline' : 'none',
                                        }}
                                        ref={titleTextAreaRef}
                                    />
                                    <p className='word-count'>
                                        {titleCharacterCount}/{titleCharacterLimit}
                                    </p>
                                    <div className='effects'>
                                        <MdOutlineFormatItalic className={`i ${isTitleItalic ? 'active' : ''}`} onClick={toggleTitleItalic} />
                                        <FaBold className={`i ${isTitleBold ? 'active' : ''}`} onClick={toggleTitleBold} />
                                        <FaUnderline className={`i ${isTitleUnderline ? 'active' : ''}`} onClick={toggleTitleUnderline} />
                                    </div>
                                </div>
                                <div className='h2-text-one'>
                                    <h2 className='description'>Description</h2>
                                    <textarea
                                        className='input-placeholder-one p-2 bg-neutral-700 active active:outline-none focus:outline-none'
                                        placeholder='Write here...'
                                        value={descriptionVal}
                                        onChange={handleDescriptionChange}
                                        rows='1'
                                        style={{
                                            fontWeight: isDescriptionBold ? 'bold' : 'normal',
                                            fontStyle: isDescriptionItalic ? 'italic' : 'normal',
                                            textDecoration: isDescriptionUnderline ? 'underline' : 'none',
                                        }}
                                        ref={descriptionTextAreaRef}
                                    />
                                    <p className='word-count'>
                                        {descriptionCharacterCount}/{descriptionCharacterLimit}
                                    </p>
                                    <div className='effects'>
                                        <MdOutlineFormatItalic className={`i ${isDescriptionItalic ? 'active' : ''}`} onClick={toggleDescriptionItalic} />
                                        <FaBold className={`i ${isDescriptionBold ? 'active' : ''}`} onClick={toggleDescriptionBold} />
                                        <FaUnderline className={`i ${isDescriptionUnderline ? 'active' : ''}`} onClick={toggleDescriptionUnderline} />
                                    </div>
                                </div>
                                <div className='h2-text-two'>
                                <h2 className='course'>Select a course</h2>
                                <DropdownButton className='makeitdrop' id='dropdown-menu-align-right' align='right' variant='none'>
                                            <Dropdown.Item eventKey='1'>Everyone</Dropdown.Item>
                                            <Dropdown.Item eventKey='1'>ITE 143</Dropdown.Item>
                                            <Dropdown.Item eventKey='1'>ITE 143</Dropdown.Item>
                                        </DropdownButton>


                                </div>



                                <Button className='create-post' variant='success' onClick={handleSubmit}>
                                    <FaRegPaperPlane className='pen' />
                                    Post
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default FeedProf;
