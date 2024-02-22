import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import '../../assets/scss/course-new.scss';
import { useNavigate } from 'react-router-dom';

function CourseNew() {
    const navigate = useNavigate();
    return (
        <Tabs id='justify-tab' className='mb-3' justify>
            {/* CLASSWORK TAB */}
            <Tab eventKey='classwork' title='Classwork'>
                <Container className='classwork-container'>
                    {/* CARDS within classwork tab*/}
                    <Card className='card-within'>
                        <Card.Body onClick={() => navigate('/task-new')}>
                            <h4 className='task-type'>
                                CHECK: <span className='task-title'>Module 21</span>
                            </h4>
                            <h5 className='date-posted'>February 10, 2024</h5>
                        </Card.Body>
                    </Card>
                    <Card className='card-within'>
                        <Card.Body onClick={() => navigate('/task-new')}>
                            <h4 className='task-type'>
                                CHECK: <span className='task-title'>Module 21</span>
                            </h4>
                            <h5 className='date-posted'>February 10, 2024</h5>
                        </Card.Body>
                    </Card>
                    <Card className='card-within'>
                        <Card.Body onClick={() => navigate('/task-new')}>
                            <h4 className='task-type'>
                                CHECK: <span className='task-title'>Module 21</span>
                            </h4>
                            <h5 className='date-posted'>February 10, 2024</h5>
                        </Card.Body>
                    </Card>
                    <Card className='card-within'>
                        <Card.Body onClick={() => navigate('/task-new')}>
                            <h4 className='task-type'>
                                CHECK: <span className='task-title'>Module 21</span>
                            </h4>
                            <h5 className='date-posted'>February 10, 2024</h5>
                        </Card.Body>
                    </Card>
                    <Card className='card-within'>
                        <Card.Body onClick={() => navigate('/task-new')}>
                            <h4 className='task-type'>
                                CHECK: <span className='task-title'>Module 21</span>
                            </h4>
                            <h5 className='date-posted'>February 10, 2024</h5>
                        </Card.Body>
                    </Card>
                </Container>
            </Tab>

            {/* PEOPLE TAB */}
            <Tab className='people-tab' eventKey='people' title='People'>
                <Card className='instructor-card'>
                    <Card.Header>Instructor</Card.Header>
                    <Card.Body>
                        <i className='bx bxs-user-circle'></i>
                        <p className='name'>Padme Naberie Amidala Skywalker</p>
                    </Card.Body>
                </Card>

                <Card className='student-card'>
                    <Card.Header>Students</Card.Header>
                    <Card.Body>
                        <ListGroup className='lists'>
                            <ListGroup.Item>
                                <i className='bx bxs-user-circle'></i>
                                <p className='name'>Glaiza Joyce Bauzon Alicoben</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className='bx bxs-user-circle'></i>
                                <p className='name'>Stephen Paul Bautista Bautista</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className='bx bxs-user-circle'></i>
                                <p className='name'>Jaydeebryann Estrada Ang</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className='bx bxs-user-circle'></i>
                                <p className='name'>Leanne Main Dela Cruz</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className='bx bxs-user-circle'></i>
                                <p className='name'>Christian Quimsim Munar</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Tab>
        </Tabs>
    );
}

export default CourseNew;
