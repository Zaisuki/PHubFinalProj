import '../../assets/scss/taskNew.scss';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getCheckTask, getCoachTask, getConnectTask } from '../../services/student';
import formatDate from '../../utils/formatDate';

export default function NewTask() {
    let { taskID, classType } = useParams();
    const [pageData, setData] = useState({});
    classType = classType.toLowerCase();

    useEffect(() => {
        const fetchdata = async () => {
            let data;
            if (classType === 'coach') {
                data = await getCoachTask(taskID);
            } else if (classType === 'connect') {
                data = await getConnectTask(taskID);
            } else {
                data = await getCheckTask(taskID);
            }
            console.log(data.message);
            setData(data.message);
        };
        fetchdata();
    }, [taskID, classType]);
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
                {classType.toLowerCase() === 'check' && (
                    <Col xs={12} md={8} lg={4}>
                        <Card className='main-right-card-container'>
                            <Card className='submission-card'>
                                <h5>Your Work</h5>

                                {/* eto yung lalabas pag nakapag-upload na yung student ng file/pic/link */}
                                <Card className='student-work-container'>
                                    <p>Module 21.jpg</p>
                                    <box-icon name='x' color='#686464' size='md'></box-icon>
                                </Card>

                                <div className='buttons-container'>
                                    <Button className='upload-file-button'>Upload File</Button>
                                </div>
                                <div>
                                    <Button className='mark-button'>Mark as done</Button>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}
