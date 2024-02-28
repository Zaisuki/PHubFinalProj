import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentWorkPage from '../../components/professor/studentWorkPage';
const StudentWork = () => {
    const [checkboxes, setCheckboxes] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showFloatingWindow, setShowFloatingWindow] = useState(false);
    // FOR CHECKBOX
    // Function to handle checkbox click in the body
    const handleStudentNameClick = (studentName) => {
        setSelectedStudent(studentName);
    };
    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setCheckboxes(updatedCheckboxes);
    };

    // Function to handle student name click

    // Function to handle checkbox click in the header
    const handleSelectAll = () => {
        const updatedCheckboxes = new Array(checkboxes.length).fill(!selectAll);
        setCheckboxes(updatedCheckboxes);
    };

    // Function to toggle the floating window
    const toggleFloatingWindow = () => {
        setShowFloatingWindow(!showFloatingWindow);
    };

    // Determine if all checkboxes are checked
    const selectAll = checkboxes.every((checkbox) => checkbox);

    return (
        <div className='overall-container'>
            {/* Contents of left part of student-work container */}
            <div className='left-container'>
                <div className='upper-left-container'>
                    <div className='sub-upper-left-container'>
                        <h2 className='activity-title'>Module 14: Check for Understanding</h2>
                        <div className='sub-content'>
                            <Container className='stats'>
                                <Row className='numbers'>
                                    <Col className='turned-in-total' sm={1}>
                                        10
                                    </Col>
                                    <Col className='assigned-total' sm={1}>
                                        22
                                    </Col>
                                    <Col className='returned-total' sm={1}>
                                        7
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
                        <Button type='submit'>Return</Button>
                    </div>
                </div>
                <div className='student-table-container'>
                    <div className='container-1'>
                        <div className='content-1'>
                            {/* Table contents for "Turned In" */}
                            <Table className='table-1' border hover>
                                {/* When clicked, all turned in student will automatically selected for easy returning of works*/}
                                <thead>
                                    <tr>
                                        <th>Turned In</th>
                                    </tr>
                                </thead>
                                {/* Contents of "Turned In" */}
                                <tbody>
                                    <StudentWorkPage name='Liezel Untalan Gabica' studentScore='_' highestPossibleScore='100' checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} handleStudentNameClick={handleStudentNameClick} />
                                </tbody>
                            </Table>

                            <Table className='table-3' border hover>
                                <thead>
                                    <tr>
                                        <th>
                                            <Form.Check aria-label='option 1' checked={selectAll} onChange={handleSelectAll} />
                                        </th>
                                        <th>Graded</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <StudentWorkPage name='Liezel Untalan Gabica' studentScore='_' highestPossibleScore='100' checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} handleStudentNameClick={handleStudentNameClick} />
                                </tbody>
                            </Table>
                            <Table className='table-2' border hover>
                                <thead>
                                    <tr>
                                        <th>
                                            <Form.Check aria-label='option 1' checked={selectAll} onChange={handleSelectAll} />
                                        </th>
                                        <th>Assigned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <StudentWorkPage name='Liezel Untalan Gabica' studentScore='_' highestPossibleScore='100' checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} handleStudentNameClick={handleStudentNameClick} />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                {/* Contents of right part of student-work container */}
            </div>
            <div className='right-container'>
                {selectedStudent && (
                    <div className='right-sub-content'>
                        <h2 className='studentN'>{selectedStudent}</h2>
                        <div className='attached-file'>
                            <h6>Turned in</h6>
                            <Button className='floating-button' variant='primary' onClick={toggleFloatingWindow}>
                                (See history)
                            </Button>
                            {showFloatingWindow && (
                                <div className='floating-window'>
                                    <div className='history'>
                                        <p>Turned in</p>
                                        <p>9:00pm</p>
                                        <p>Today</p>
                                    </div>
                                </div>
                            )}
                            <img src='../../assets/img/notification.png' alt='Attachment' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentWork;
