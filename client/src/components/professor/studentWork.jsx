import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { editCheckHighScore, editConnectHighScore, getCheckTaskSubmission, getConnectTaskSubmission, scoreStudentCheck, scoreStudentConnect } from '../../services/professor';
import '../../assets/scss/prof-scss/studentWork.scss';
import ImagePreview from '../imagePreview';
import LinkPreview from '../linkPreview';

const StudentWork = ({ classType, taskID, pageData }) => {
    const [checkboxes, setCheckboxes] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [data, setData] = useState('');
    const [scores, setScores] = useState({});
    const [newHighScore, setNewHighScores] = useState('');
    const [highScore, setHighScores] = useState(pageData.highestPossibleScore);

    const handleStudentNameClick = (studentName) => {
        setSelectedStudent(studentName[1]);
    };
    const handleCheckboxChange = (studentId) => {
        const isChecked = checkboxes.includes(studentId);
        if (isChecked) {
            setCheckboxes(checkboxes.filter((id) => id !== studentId));
        } else {
            setCheckboxes([...checkboxes, studentId]);
        }
    };
    const updateScore = async (event) => {
        event.preventDefault();
        let result;
        if (classType === 'check') {
            result = await editCheckHighScore(taskID, newHighScore);
        } else {
            result = await editConnectHighScore(taskID, newHighScore);
        }
        if (result.message === 'Task high score updated') {
            setHighScores(newHighScore);
            setNewHighScores('');
            console.log('success');
        }
    };
    const handleReturnScores = async (event) => {
        event.preventDefault();
        const data = Object.fromEntries(Object.entries(scores).filter(([key, value]) => checkboxes.includes(key) && value !== null && !isNaN(value)));
        let result;
        if (classType === 'check') {
            result = await scoreStudentCheck(JSON.stringify(data));
        } else {
            result = await scoreStudentConnect(JSON.stringify(data));
        }
        if (result.message === 'Students score updated') {
            const fetchData = async () => {
                try {
                    let response;
                    if (classType === 'check') {
                        response = await getCheckTaskSubmission(taskID);
                    } else {
                        response = await getConnectTaskSubmission(taskID);
                    }
                    setData(response);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
            setHighScores(pageData.highestPossibleScore);
        }
    };
    const handleScoreChange = (event, studentId) => {
        setScores((prevScores) => ({
            ...prevScores,
            [studentId]: event.target.value,
        }));
    };

    // Determine if all checkboxes are checked
    useEffect(() => {
        console.log(checkboxes, scores);
    }, [checkboxes, scores]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (classType === 'check') {
                    response = await getCheckTaskSubmission(taskID);
                    console.log(response);
                } else {
                    response = await getConnectTaskSubmission(taskID);
                }
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        setHighScores(pageData.highestPossibleScore);
    }, [classType, taskID, pageData]);
    return (
        <div className='overall-container'>
            <div className='left-container'>
                <div className='upper-left-container'>
                    <div className='sub-upper-left-container'>
                        <h2 className='activity-title'>Module 14: Check for Understanding</h2>
                        <div className='sub-content'>
                            <Container className='stats'>
                                <Row className='numbers'>
                                    <Col className='turned-in-total' sm={1}>
                                        {data.studentTurnedIn && data.studentTurnedIn.length}
                                    </Col>
                                    <Col className='assigned-total' sm={1}>
                                        {data.studentAssigned && data.studentAssigned.length}
                                    </Col>
                                    <Col className='returned-total' sm={1}>
                                        {data.studentGraded && data.studentGraded.length}
                                    </Col>
                                </Row>
                                <Row className='labels'>
                                    <Col className='turned-in-label' sm={1}>
                                        Turned In
                                    </Col>
                                    <Col className='assigned-label' sm={1}>
                                        Assigned
                                    </Col>
                                    <Col className='returned-label' sm={1}>
                                        Returned
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className='button-container'>
                        <Button type='submit' onClick={handleReturnScores}>
                            Return
                        </Button>
                        <div>
                            <input type='text' value={newHighScore} onChange={(e) => setNewHighScores(e.target.value)} style={{ border: '1px solid black' }} />
                            <Button type='submit' onClick={updateScore}>
                                Update score
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='student-table-container'>
                    <div>
                        <div className='checkbox-selectall'>
                            <h3>Turned In</h3>
                        </div>
                        <div>
                            {data.studentTurnedIn &&
                                data.studentTurnedIn.map((student) => (
                                    <div key={student[0]._id} className='studentList' onClick={() => handleStudentNameClick(student)}>
                                        <Form.Check aria-label='option 1' onChange={() => handleCheckboxChange(student[0]._id)} />
                                        <div className='student-name'>
                                            <span className='icon'>
                                                <i className='bx bxs-user-circle'></i>
                                            </span>
                                            {`${student[0].firstName} ${student[0].middleName} ${student[0].lastName}`}
                                        </div>
                                        <span>
                                            <input style={{ border: '1px solid black', width: '30px' }} onChange={(event) => handleScoreChange(event, student[0]._id)} />/{highScore}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <div className='checkbox-selectall'>
                            <h3>Graded</h3>
                        </div>
                        <div>
                            {data.studentGraded &&
                                data.studentGraded.map((student) => (
                                    <div key={student[0]._id} className='studentList' onClick={() => handleStudentNameClick(student)}>
                                        <Form.Check aria-label='option 1' onChange={() => handleCheckboxChange(student[0]._id)} />
                                        <div className='student-name'>
                                            <span className='icon'>
                                                <i className='bx bxs-user-circle'></i>
                                            </span>
                                            {`${student[0].firstName} ${student[0].middleName} ${student[0].lastName}`}
                                        </div>
                                        <span>
                                            <input style={{ border: '1px solid black', width: '30px' }} defaultValue={student[1].score} onChange={(event) => handleScoreChange(event, student[0]._id)} />/{highScore}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <div className='checkbox-selectall'>
                            <h3>Assigned</h3>
                        </div>
                        <div>
                            {data.studentAssigned &&
                                data.studentAssigned.map((student) => (
                                    <div key={student[0]._id} className='studentList' onClick={() => handleStudentNameClick(student)}>
                                        <Form.Check aria-label='option 1' onChange={() => handleCheckboxChange(student[0]._id)} />
                                        <div className='student-name'>
                                            <span className='icon'>
                                                <i className='bx bxs-user-circle'></i>
                                            </span>
                                            {`${student[0].firstName} ${student[0].middleName} ${student[0].lastName}`}
                                        </div>
                                        <span>
                                            <input style={{ border: '1px solid black', width: '30px' }} disabled onChange={(event) => handleScoreChange(event, student[0]._id)} />/{highScore}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Contents of right part of student-work container */}
            </div>
            <div className='right-container'>
                {selectedStudent && (
                    <div className='right-sub-content'>
                        <h2>
                            {selectedStudent.student.firstName} {selectedStudent.student.middleName} {selectedStudent.student.lastName}
                        </h2>
                        <div className='attached-file'>
                            {classType.toLowerCase() === 'connect' ? (
                                <div>Answered: {selectedStudent.answer.choice} </div>
                            ) : (
                                <div>
                                    {selectedStudent.attachment.length !== 0 ? (
                                        <>
                                            Submission:
                                            {selectedStudent.attachment.map((dataPage) => (
                                                <div key={dataPage._id}>{dataPage.type.startsWith('image') ? <ImagePreview imageUrl={dataPage.url} /> : <LinkPreview Url={dataPage.url} />}</div>
                                            ))}
                                        </>
                                    ) : (
                                        <p>No attachment submitted</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

StudentWork.propTypes = {
    classType: PropTypes.string.isRequired,
    taskID: PropTypes.string.isRequired,
    pageData: PropTypes.object.isRequired,
};
export default StudentWork;
