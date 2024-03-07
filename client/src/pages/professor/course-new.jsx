import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../../assets/scss/prof-scss/cnp.scss';
import { useNavigate } from 'react-router-dom';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FaBook } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getClassPeople, getClassTask } from '../../services/user';
import { useParams } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

function CourseNew() {
    const navigate = useNavigate();
    let { classID } = useParams();
    const [task, setTask] = useState([]);
    const [people, setPeople] = useState([]);
    const [professor, setProfessor] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseClass = await getClassTask(classID);
                let data = responseClass.message.sort((a, b) => b.createdAt - a.createdAt);
                const responsePeople = await getClassPeople(classID);
                console.log(responsePeople.message.professor);
                setPeople(responsePeople.message.students);
                setProfessor(responsePeople.message.professor);
                setTask(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [classID]);
    return (
        <Tabs id='justify-tab' className='mb-3' justify>
            {/* CLASSWORK TAB */}
            <Tab className='class' eventKey='classwork' title='Classwork'>
                <Container className='classwork-container'>
                    {/* CARDS within classwork tab */}
                    {task.length > 0 ? (
                        <>
                            {task.map((data) => (
                                <Card className='card-within' key={data._id}>
                                    <Card.Body onClick={() => navigate(`/work-page/${data.postChoices ? 'CONNECT' : data.highestPossibleScore >= 0 ? 'CHECK' : 'COACH'}/${data._id}`)}>
                                        <FaBook className='book' />
                                        <h4 className='task-type'>{data.postChoices ? 'CONNECT' : data.highestPossibleScore >= 0 ? 'CHECK' : 'COACH'}</h4>
                                        <span className='task-title'>{data.postTitle}</span>
                                        <h5 className='date-posted'>
                                            <MdOutlineAccessTime />
                                            {formatDate(data.createdAt)}
                                        </h5>
                                    </Card.Body>
                                </Card>
                            ))}
                        </>
                    ) : (
                        <p className='pp'>No Task yet</p>
                    )}
                </Container>
            </Tab>

            {/* PEOPLE TAB */}
            <Tab className='people-tab' eventKey='people' title='People'>
                <Card className='instructor-card'>
                    <Card.Header>Instructor</Card.Header>
                    <Card.Body>
                        <i className='bx bxs-user-circle'></i>
                        <p className='name'>
                            {professor.firstName} {professor.middleName} {professor.lastName}
                        </p>
                    </Card.Body>
                </Card>

                <Card className='student-card'>
                    <Card.Header>Students</Card.Header>
                    {people.length > 0 ? (
                        <>
                            {people.map((data) => (
                                <Card.Body key={data._id}>
                                    <i className='bx bxs-user-circle'></i>
                                    <p className='name'>
                                        {data.firstName} {data.middleName} {data.lastName}
                                    </p>
                                </Card.Body>
                            ))}
                        </>
                    ) : (
                        <p className='ppp'>No Students yet</p>
                    )}
                </Card>
            </Tab>
        </Tabs>
    );
}

export default CourseNew;
