import '../../assets/scss/admin-scss/subject-form.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createSubject } from '../../services/admin';

function CreateSubject() {
    const [formData, setFormData] = useState({
        subjectCode: '',
        subjectDescription: '',
    });
    const handleInputChange = (event) => {
        let { name, value } = event.target;

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
        let result = await createSubject(formData);
        if (result.message === 'Subject saved to the database') {
            setFormData({
                subjectCode: '',
                subjectDescription: '',
            });
            console.log('success');
        }
    };
    return (
        <div className='subject-form'>
            <Row>
                <Col>
                    <Form.Label>Subject Code</Form.Label>
                    <Form.Control name='subjectCode' value={formData.subjectCode} onChange={handleInputChange} placeholder='Subject Code' />
                </Col>
            </Row>
            <Row className='sub-des'>
                <Col>
                    <Form.Label>Subject Description</Form.Label>
                    <Form.Control name='subjectDescription' value={formData.subjectDescription} onChange={handleInputChange} placeholder='Subject Description' />
                </Col>
            </Row>
            <button type='submit' onClick={handleSubmit}>
                Create Subject
            </button>
        </div>
    );
}
export default CreateSubject;
