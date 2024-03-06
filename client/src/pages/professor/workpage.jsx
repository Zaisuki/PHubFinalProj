import { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { getCheckTask, getCoachTask, getConnectTask } from '../../services/professor';
import formatDate from '../../utils/formatDate';
import StudentWork from '../../components/professor/studentWork';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../../assets/scss/prof-scss/workpage.scss';
import '../../assets/scss/prof-scss/PDFViewer.scss';
import ImagePreview from '../../components/imagePreview';
import LinkPreview from '../../components/linkPreview';
import ChoicesConnect from '../../components/choicesConnect';
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
                        {pageData.attachment && pageData.attachment.length > 0 && (
                            <Card className='attachment-container'>
                                <h4>Attachment</h4>

                                <div className='file-container'>
                                    {pageData.attachment.map((dataPage) => (
                                        <div key={dataPage._id}>{dataPage.type.startsWith('image') ? <ImagePreview imageUrl={dataPage.url} /> : <LinkPreview Url={dataPage.url} />}</div>
                                    ))}
                                </div>
                            </Card>
                        )}
                        {pageData.postChoices && (
                            <Card className='pool-container'>
                                <h4>Pool</h4>

                                <div className='choice-container'>
                                    {pageData.postChoices.map((dataPage) => (
                                        <ChoicesConnect data={dataPage} totalStudents={pageData.class.totalStudents} key={dataPage._id} />
                                    ))}
                                </div>
                            </Card>
                        )}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey='student-work'>
                    <StudentWork classType={classType.toLowerCase()} taskID={taskID} pageData={pageData} />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    );
}

export default WorkPage;
