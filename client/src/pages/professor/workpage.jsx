import { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { getCheckTask, getCoachTask, getConnectTask } from '../../services/professor';
import formatDate from '../../utils/formatDate';
import StudentWork from '../../components/professor/studentWork';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../../assets/scss/prof-scss/workpage.scss';
import '../../assets/scss/prof-scss/PDFViewer.scss';

function WorkPage() {
    let { taskID, classType } = useParams();
    const [pageData, setData] = useState({});
    classType = classType.toLowerCase();
    const [pdfFile, setPDFFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);

    const fileType = ['application/pdf'];
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
    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && fileType.includes(selectedFile.type)) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                setPDFFile(reader.result);
            };
        } else {
            setPDFFile(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        } else {
            setViewPdf(null);
        }
    };

    const newplugin = defaultLayoutPlugin();

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
                        {classType !== 'connect' && pageData.attachment && (
                            <Card className='attachment-container'>
                                <h4>Attachment</h4>
                                <form onSubmit={handleSubmit}>
                                    <input type='file' className='form-control' onChange={handleChange} />
                                    <button type='submit' className='btn btn-success'>
                                        View PDF
                                    </button>
                                </form>
                                <h2>view pdf</h2>
                                <div className='pdf-container'>
                                    <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
                                        {viewPdf && <Viewer file={{ data: viewPdf }} plugins={[newplugin]} />}
                                        {!viewPdf && <>No PDF</>}
                                    </Worker>
                                </div>
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
