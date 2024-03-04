import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../assets/scss/prof-scss/course-prof.scss';
import { useEffect, useState } from 'react';
import { course } from '../../services/user';
import { FaBookOpenReader } from "react-icons/fa6";

function CourseProf() {
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
        <div className='course-main-container'>
            <div className="course-header">
        <h1 className="user">
          Study hard, <span>flames</span>!
        </h1>
      </div>
           
            <div className='course-container'>
                {subjects ? (
                    subjects.map((subject) => (
                        <Card border='secondary' className='course-card' key={subject._id}>
                            <Card.Header className='section'>
                                 <span className='block'>{subject.block}</span>
                            </Card.Header>
                            <Card.Body>
                            <div className='subject-code'>
                            {subject.subject.subjectCode}
                            </div>
                         
                                <Card.Text className='instructor-name'>
                                    {subject.professor.firstName} {subject.professor.lastName}
                                </Card.Text>
                                <button onClick={() => navigate(`/course-new/${subject._id}`)} type='button' className='btn btn-dark' data-mdb-ripple-init>
                                <FaBookOpenReader className='book' />
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

export default CourseProf;
