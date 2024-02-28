import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/scss/prof-scss/workpage.scss';
import Card from 'react-bootstrap/Card';
import { Tab, Nav } from 'react-bootstrap';
import { getCheckTask, getCoachTask, getConnectTask } from '../../services/professor';
import formatDate from '../../utils/formatDate';
import StudentWork from '../../components/professor/studentWork';

function WorkPage() {
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
            console.log(data);
            setData(data.message);
        };
        fetchdata();
    }, [taskID, classType]);

    return (
        <Tab.Container id='tabs-example' defaultActiveKey='instruction'>
            <Nav justify variant='tabs' className='nav-tab'>
                <Nav.Item>
                    <Nav.Link eventKey='instruction' style={{ color: 'grey' }}>
                        Instructor
                    </Nav.Link>
                </Nav.Item>
                {classType !== 'coach' && (
                    <Nav.Item>
                        <Nav.Link eventKey='student-work' style={{ color: 'grey' }}>
                            Student Work
                        </Nav.Link>
                    </Nav.Item>
                )}
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey='instruction'>
                    {/* Content inside instruction tab */}
                    <div className='instruction-container'>
                        <Card className='header-container'>
                            <h5 className='posted'>
                                Posted
                                <span className='date'> {formatDate(pageData.createdAt)}</span>
                            </h5>
                            <h4 className='task-type'>
                                {classType.toUpperCase()}: <span className='task-title'>{pageData.postTitle}</span>
                            </h4>
                            {classType !== 'coach' && pageData.highestPossibleScore && (
                                <h5 className='points-label'>
                                    <span className='points'>{pageData.highestPossibleScore} </span>
                                    points
                                </h5>
                            )}
                        </Card>

                        <Card className='content-container'>
                            <p>{pageData.postDescription}</p>
                        </Card>
                        {classType !== 'connect' && pageData.attachment && (
                            <Card className='attachment-container'>
                                <h4>Attachment</h4>
                            </Card>
                        )}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey='student-work'>
                    <StudentWork />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    );
}

export default WorkPage;
