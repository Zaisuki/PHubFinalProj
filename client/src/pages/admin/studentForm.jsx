import '../../assets/scss/admin-scss/student-form.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createAccount } from '../../services/admin';

function StudentForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        course: '',
        section: '',
        birthday: '',
        enrolled: true,
        username: '',
        personalEmail: '',
        schoolEmail: '',
        password: '',
        personalNumber: '',
        schoolNumber: '',
        userType: 'student',
        studentID: '',
        address: '',
        schoolYear: '',
        levelOfEducation: 'Junior High School',
        year: '',
        summerClass: '',
    });

    // Update form data when input changes
    const handleInputChange = (event) => {
        let { name, value } = event.target;
        if (name === 'summerClass') {
            value = value === 'Yes';
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        for (const key in formData) {
            if (key !== 'middleName' && key !== 'schoolNumber' && key !== 'enrolled') {
                if (Object.hasOwnProperty.call(formData, key)) {
                    if (typeof value === 'string' && formData[key].trim() === '') {
                        console.log(`${key} cannot be empty.`);
                        return;
                    }
                }
            }
        }
        let result = await createAccount(formData);
        if (result.message === 'User saved to the database') {
            setFormData({
                firstName: '',
                lastName: '',
                middleName: '',
                course: '',
                section: '',
                birthday: '',
                enrolled: true,
                username: '',
                personalEmail: '',
                schoolEmail: '',
                password: '',
                personalNumber: '',
                schoolNumber: '',
                userType: 'student',
                studentID: '',
                address: '',
                schoolYear: '',
                levelOfEducation: 'Junior High School',
                year: '',
                summerClass: '',
            });
            console.log('success');
        }
    };

    return (
        <div className='student-form'>
            <Container>
                {/* STUDENT NAME */}
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control name='lastName' value={formData.lastName} onChange={handleInputChange} placeholder='Last name' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control name='firstName' value={formData.firstName} onChange={handleInputChange} placeholder='First name' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Middle name</Form.Label>
                                    <Form.Control name='middleName' value={formData.middleName} onChange={handleInputChange} placeholder='Middle name' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Student ID</Form.Label>
                                    <Form.Control name='studentID' value={formData.studentID} onChange={handleInputChange} placeholder='Student ID/Number' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                        <Form>
                            <Row>
                                <Col sm={4}>
                                    <Form.Label>Learning Level</Form.Label>
                                    <Form.Select name='levelOfEducation' value={formData.levelOfEducation} onChange={handleInputChange} defaultValue='First year'>
                                        <option>Junior High School</option>
                                        <option>Senior High School</option>
                                        <option>College</option>
                                    </Form.Select>
                                </Col>
                                <Col sm={4}>
                                    <Form.Label>School Year</Form.Label>
                                    <Form.Select name='schoolYear' value={formData.schoolYear} onChange={handleInputChange} defaultValue='School Year'>
                                        <option>School Year</option>
                                        <option>2122</option>
                                        <option>2223</option>
                                        <option>2324</option>
                                        <option>2425</option>
                                    </Form.Select>
                                </Col>
                                <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Year Level</Form.Label>
                                    <Form.Select name='year' value={formData.year} onChange={handleInputChange} defaultValue='First year'>
                                        {formData.levelOfEducation === 'Junior High School' ? (
                                            <>
                                                <option>Grade 7</option>
                                                <option>Grade 8</option>
                                                <option>Grade 9</option>
                                                <option>Grade 10</option>
                                            </>
                                        ) : formData.levelOfEducation === 'Senior High School' ? (
                                            <>
                                                <option>Grade 11</option>
                                                <option>Grade 12</option>
                                            </>
                                        ) : (
                                            <>
                                                <option>First year</option>
                                                <option>Second year</option>
                                                <option>Third year</option>
                                                <option>Fourth year</option>
                                                <option>Fifth year</option>
                                            </>
                                        )}
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                            </Row>
                                
                        </Form>
                        </Col>
                        </Row>
                <Row>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Enrolling for summer class?</Form.Label>
                                    <div>
                                        <Form.Check inline type='radio' label='Yes' name='summerClass' value='Yes' checked={formData.summerClass} onChange={handleInputChange} />
                                        <Form.Check inline type='radio' label='No' name='summerClass' value='No' checked={!formData.summerClass} onChange={handleInputChange} />
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Course/Strand</Form.Label>
                                    <Form.Select name='course' disabled={formData.levelOfEducation === 'Junior High School'} value={formData.course} onChange={handleInputChange} defaultValue='Course/Strand'>
                                        <option disabled>Course/Strand</option>
                                        {formData.levelOfEducation === 'Senior High School' ? (
                                            <>
                                                <option>STEM</option>
                                                <option>ABM</option>
                                                <option>HUMSS</option>
                                                <option>GAS</option>
                                                <option>TVL-PROGRAMMING</option>
                                                <option>TVL-COOKERY</option>
                                            </>
                                        ) : (
                                            <>
                                                <option>Bachelor of Science in Information Technology</option>
                                                <option>Bachelor of Science in Accountancy</option>
                                                <option>Bachelor of Science in Criminology</option>
                                                <option>Bachelor of Science in Hospitality Management</option>
                                                <option>Bachelor of Science in Tourism</option>
                                                <option>Bachelor of Science in Nursing</option>
                                                <option>Bachelor of Science in Pharmacy</option>
                                                <option>Bachelor of Science in Civil Engineering</option>
                                                <option>Bachelor of Science in Mechanical Engineering</option>
                                            </>
                                        )}
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Section</Form.Label>
                                    <Form.Control name='section' value={formData.section} onChange={handleInputChange} placeholder='Section' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

                {/* Student School Email, Personal Email, and Password*/}
                <Row>
                    <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Personal Email</Form.Label>
                                    <Form.Control name='personalEmail' value={formData.personalEmail} onChange={handleInputChange} type='email' placeholder='Personal Email' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>School Email</Form.Label>
                                    <Form.Control name='schoolEmail' value={formData.schoolEmail} onChange={handleInputChange} type='email' placeholder='School Email' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' value={formData.password} onChange={handleInputChange} type='password' placeholder='Password' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

                {/* STUDENT Username and Date of Birth*/}
                <Row>
                    <Col sm={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control name='username' value={formData.username} onChange={handleInputChange} placeholder='Username' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Group controlId='formDate'>
                                <Form.Control name='birthday' value={formData.birthday} onChange={handleInputChange} type='date' placeholder='Date' />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                {/* STUDENT School and Personal Number */}
                <Row>
                    <Col sm={4}>
                        <Form>
                            <Form.Group controlId='formPersonalNumber'>
                                <Form.Label>Person Number</Form.Label>
                                <Form.Control name='personalNumber' value={formData.personalNumber} onChange={handleInputChange} type='text' inputMode='numeric' pattern='[0-9]*' placeholder='Personal Number' />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <Form.Group controlId='formSchoolNumber'>
                                <Form.Label>School Number</Form.Label>
                                <Form.Control name='schoolNumber' value={formData.schoolNumber} onChange={handleInputChange} type='text' inputMode='numeric' pattern='[0-9]*' placeholder='School Number' />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                {/* Current Address */}
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Current Address</Form.Label>
                                    <Form.Control name='address' value={formData.address} onChange={handleInputChange} placeholder='House/Lot Number, Barangay, City/Municipal Name, Province, Postal Code' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            <div  className='student-button'>
            <button type='submit' onClick={handleSubmit}>
                Create Student Account
            </button>
            </div>
            </Container>
        </div>
    );
}

export default StudentForm;
