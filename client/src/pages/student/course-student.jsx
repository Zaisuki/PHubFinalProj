import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../assets/scss/course-student.scss';
import { useEffect, useState } from 'react';
import { course } from '../../services/user';
import { FaBookOpenReader } from "react-icons/fa6";

function CourseStudent() {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await course();
                setSubjects(() => (response.userType === 'student' ? response.userDetails.studentSubjects[0].class : response.userDetails.professorHandledClass[0].class));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='course-main-container-student'>
            <div className="course-header-student">
                <h1 className="user-student">
                    Study hard, <span>flames</span>!
                </h1>
            </div>
           
            <div className='course-container-student'>
                {subjects ? (
                    subjects.map((subject) => (
                        <Card border='secondary' className='course-card-student' key={subject._id}>
                            
                              
                            
                            <Card.Body className='body'>
                            <span className='block-student'>{subject.block}</span>
                                <div className='subject-code-student'>
                                    {subject.subject.subjectCode}
                                </div>
                                <Card.Text className='instructor-name-student'>
                                    {subject.professor.firstName} {subject.professor.lastName}
                                </Card.Text>
                                <button onClick={() => navigate(`/course-new/${subject._id}`)} type='button' className='btn btn-dark btn-student' data-mdb-ripple-init>
                                    <FaBookOpenReader className='book-student' />
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

export default CourseStudent;
