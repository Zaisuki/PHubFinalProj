import '../../assets/scss/admin-scss/admin-form.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createAccount } from '../../services/admin';

function AdminForm() {
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
        userType: 'admin',
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
                userType: 'admin',
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
        <div className='admin-form'>
            <Container>
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
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Department</Form.Label>
                                    <Form.Select name='department' value={formData.department} onChange={handleInputChange} defaultValue='College of Information Technology Education'>
                                        <option>Registrar</option>
                                        <option>Cashier</option>
                                        <option>Dean of College of Information Technology Education</option>
                                        <option>Dean of College of Management and Accountancy</option>
                                        <option>Dean of College of Education and Liberal Arts</option>
                                        <option>Dean of College of Allied Health Sciences</option>
                                        <option>Dean of College of Arts and Sciences</option>
                                        <option>Dean of College of Criminal Justice Education</option>
                                        <option>Dean of College of Engineering and Architechture</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={2}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>School Year</Form.Label>
                                    <Form.Select name='schoolYear' value={formData.schoolYear} onChange={handleInputChange} defaultValue='School Year'>
                                        <option>School Year</option>
                                        <option>2122</option>
                                        <option>2223</option>
                                        <option>2324</option>
                                        <option>2425</option>
                                    </Form.Select>
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

                <Row>
                    <Col sm={4}>
                        <Form>
                            <Form.Group controlId='formPersonalNumber'>
                                <Form.Label>Personal Number:</Form.Label>
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
                Create Admin Account
            </button>
            </div>
            </Container>
        </div>
    );
}

export default AdminForm;
