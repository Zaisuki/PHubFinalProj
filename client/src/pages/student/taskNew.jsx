import '../../assets/scss/taskNew.scss';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getCheckTask, getCoachTask, getConnectTask, submitCheck, unSubmitCheck } from '../../services/student';
import formatDate from '../../utils/formatDate';
import { FileUploader } from 'react-drag-drop-files';
import { FaTimes } from 'react-icons/fa';
import ImagePreview from '../../components/imagePreview';
import LinkPreview from '../../components/linkPreview';

export default function NewTask() {
    let { taskID, classType } = useParams();
    const [pageData, setData] = useState({});
    const [showWindow, setShowWindow] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    classType = classType.toLowerCase();

    const fileTypes = ['JPG', 'PNG', 'GIF', 'PDF'];
    const [attachment, setAttachement] = useState([]);

    const handlePlusClick = () => {
        setShowWindow(true);
    };

    const handleCloseClick = () => {
        setShowWindow(false);
    };
    const handleRemove = (index) => {
        setAttachement(attachment.filter((_, i) => i !== index));
    };
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('taskID', taskID);
        for (const file of attachment) {
            formData.append('file', file);
        }
        let result;
        if (classType === 'check') {
            result = await submitCheck(formData);
        } else if (classType === 'connect') {
            // result = await postConnect(formData);
        }
        if (result.message === 'Check submitted' || result.message === 'Connect submitted') {
            updateForm();
        }
    };
    const handleUnSubmit = async () => {
        let result = await unSubmitCheck(taskID);
        if (result.message === 'Check unsubmitted') {
            updateForm();
        }
    };
    const updateForm = () => {
        setAttachement([]);
        setSubmitted((prevState) => !prevState);
    };
    useEffect(() => {
        const fetchdata = async () => {
            let data;
            if (classType === 'coach') {
                data = await getCoachTask(taskID);
            } else if (classType === 'connect') {
                data = await getConnectTask(taskID);
            } else {
                data = await getCheckTask(taskID);
                setSubmitted(data.message.studentSubmission.length !== 0);
            }
            setData(data.message);
        };
        fetchdata();
    }, [taskID, classType, submitted]);

    useEffect(() => {
        handleCloseClick();
    }, [attachment]);
    return (
        <Container>
            <Row>
                {/* Here is where you can find all the contents inside the right container or card */}
                <Col xs={12} md={8}>
                    <Card className='main-left-card-container'>
                        <Card className='header-container'>
                            {classType.toLowerCase() !== 'coach' && (
                                <h5 className='due'>
                                    {pageData.dueDate ? (
                                        <>
                                            Due:<span className='date'> {formatDate(pageData.dueDate)}</span>{' '}
                                        </>
                                    ) : (
                                        'No Due Date'
                                    )}
                                </h5>
                            )}
                            <h4 className='task-type'>
                                {classType.toUpperCase()}: <span className='task-title'>{pageData.postTitle}</span>
                            </h4>{' '}
                            {classType.toLowerCase() !== 'coach' && (
                                <h5 className='points-label'>
                                    <span className='points'>{pageData.highestPossibleScore}</span>
                                    points
                                </h5>
                            )}
                        </Card>

                        <Card className='content-container'>
                            <p>{pageData.postDescription}</p>
                        </Card>

                        {classType == 'connect' && pageData.attachment && (
                            <Card className='attachment-container'>
                                <h4>Attachment</h4>
                            </Card>
                        )}
                    </Card>
                </Col>

                {/* Here is where you can find all the contents inside the left container or card */}
                {classType.toLowerCase() === 'check' && !submitted ? (
                    <>
                        <Col xs={12} md={8} lg={4}>
                            <Card className='main-right-card-container'>
                                <Card className='submission-card'>
                                    <h5>Your Work</h5>

                                    {/* eto yung lalabas pag nakapag-upload na yung student ng file/pic/link */}
                                    <Card className='student-work-container'>
                                        {attachment.map((file, idx) => (
                                            <p key={idx}>
                                                {file.name}
                                                <FaTimes className='eks' onClick={() => handleRemove(idx)} />
                                            </p>
                                        ))}
                                        <box-icon name='x' color='#686464' size='md'></box-icon>
                                    </Card>

                                    <div className='buttons-container'>
                                        <Button className='upload-file-button' onClick={handlePlusClick}>
                                            Upload File
                                        </Button>
                                    </div>
                                    <div>
                                        <Button className='mark-button' onClick={handleSubmit}>
                                            Mark as done
                                        </Button>
                                    </div>
                                </Card>
                            </Card>
                        </Col>

                        {showWindow && (
                            <div className='popup-submission'>
                                <FaTimes className='eks' onClick={handleCloseClick} />
                                <FileUploader className='w-screen' handleChange={(files) => setAttachement((prevState) => [...prevState, ...Object.values(files)])} name='file' types={fileTypes} multiple={true} />
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <Col xs={12} md={8} lg={4}>
                            <Card className='main-right-card-container'>
                                <Card className='submission-card'>
                                    <h5>Your Work</h5>

                                    <div className='file-container'>{pageData.studentSubmission.map((submission) => submission.attachment.map((dataPage) => <div key={dataPage._id}>{dataPage.type.startsWith('image') ? <ImagePreview imageUrl={dataPage.url} /> : <LinkPreview Url={dataPage.url} />}</div>))}</div>

                                    <div>
                                        <Button className='mark-button' onClick={handleUnSubmit}>
                                            Unsubmit
                                        </Button>
                                    </div>
                                </Card>
                            </Card>
                        </Col>

                        {showWindow && (
                            <div className='popup-submission'>
                                <FaTimes className='eks' onClick={handleCloseClick} />
                                <FileUploader className='w-screen' handleChange={(files) => setAttachement((prevState) => [...prevState, ...Object.values(files)])} name='file' types={fileTypes} multiple={true} />
                            </div>
                        )}
                    </>
                )}
            </Row>
        </Container>
    );
}
