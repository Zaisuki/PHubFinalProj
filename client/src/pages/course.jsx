import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../assets/scss/course.scss';
import { useEffect, useState } from 'react';
import { course } from '../services/user';

function Course() {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await course();
                setSubjects(() => (response.userType === 'student' ? response.userDetails.studentSubjects.class : response.userDetails.professorHandledClass.class));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='course-main-container'>
            <div className='course-container'>
                {subjects ? (
                    subjects.map((subject) => (
                        <Card border='secondary' className='course-card' key={subject._id}>
                            <Card.Header className='subject-code'>
                                {subject.subject.subjectCode}: <span className='block'>{subject.block}</span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title> Instructor </Card.Title>
                                <Card.Text className='instructor-name'>
                                    {subject.professor.firstName} {subject.professor.lastName}
                                </Card.Text>
                                <button onClick={() => navigate(`/course-new/${subject._id}`)} type='button' className='btn btn-dark' data-mdb-ripple-init>
                                    View
                                </button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p className='feed-no-announcement'></p>
                )}
            </div>
        </div>
    );
}

export default Course;
