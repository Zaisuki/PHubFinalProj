import { useEffect, useState } from 'react';
import '../../assets/scss/prof-scss/task.scss';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { BiTask } from 'react-icons/bi';
import { FaPlus, FaTimes } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { getClass, postCheck, postCoach, postConnect } from '../../services/professor';

function TaskProf() {
    const [showWindow, setShowWindow] = useState(false);
    const [classes, setClasses] = useState([]);
    const [taskSelection, setTaskSelection] = useState('');

    const [classID, setClassID] = useState('');
    const [classValue, setClassValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [attachment, setAttachement] = useState('');
    const [choice, setChoice] = useState([]);

    const handleSubmit = async (task) => {
        const formData = new FormData();
        formData.append('classID', classID);
        formData.append('postTitle', titleValue);
        formData.append('postDescription', descriptionValue);
        formData.append('dueDate', dueDate);
        let choicesStringify = JSON.stringify(choice);
        formData.append('choices', choicesStringify);
        for (const file of attachment) {
            formData.append('file', file);
        }
        let result;
        if (task === 'Check') {
            result = await postCheck(formData);
        } else if (task === 'Connect') {
            result = await postConnect(formData);
        } else {
            result = await postCoach(formData);
        }
        if (result.message === 'Check posted' || result.message === 'Connect posted' || result.message === 'Coach posted') {
            updateForm();
        }
    };
    const handlePlusClick = () => {
        setShowWindow(true);
    };

    const handleCloseClick = () => {
        setShowWindow(false);
    };

    const handleInputChange = (index, event) => {
        const { value } = event.target;
        const newChoices = [...choice];
        newChoices[index] = value;
        console.log(newChoices);
        setChoice(newChoices);
    };

    const handleAddOption = () => {
        setChoice([...choice, '']);
    };
    const updateForm = () => {
        setTitleValue('');
        setDescriptionValue('');
        setDueDate('');
        setAttachement('');
        setChoice([]);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getClass();
                setClasses(response.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='dropdown-task'>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand href='#home'>Task</Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar-dark-example' />
                    <Navbar.Collapse id='navbar-dark-example'>
                        <Nav>
                            <DropdownButton variant='light' id='dropdown-basic-button' title={classValue || 'Section selection'}>
                                {classes.map((classObj) => (
                                    <Dropdown.Item
                                        key={classObj._id}
                                        onClick={() => {
                                            setClassID(classObj._id);
                                            setClassValue(`${classObj.subject.subjectCode}: ${classObj.block}`);
                                        }}
                                    >
                                        {classObj.subject.subjectCode}: {classObj.block}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='tcontainer'>
                <h1 className='taskN'>TASK NAME</h1>
                <h1 className='assigned'>ASSIGNED</h1>
                <h1 className='dueD'>DUE</h1>
                <FaPlus className='plus' onClick={handlePlusClick} />

                {showWindow && (
                    <div className='floating-window'>
                        <button className='close-button' onClick={handleCloseClick}>
                            <FaTimes className='eks' />
                        </button>

                        <Card className='plus-task'>
                            <div className='header-plus-task'>
                                <h1 className='post'>Post a {taskSelection || 'task'}</h1>
                                <DropdownButton variant='light' className='header-task-selection' title={taskSelection || 'Type of Task'}>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setTaskSelection('Check');
                                            updateForm();
                                        }}
                                    >
                                        Check
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setTaskSelection('Connect');
                                            updateForm();
                                        }}
                                    >
                                        Connect
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => {
                                            setTaskSelection('Coach');
                                            updateForm();
                                        }}
                                    >
                                        Coach
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>
                            {taskSelection === 'Check' ? (
                                <InputGroup className='plus-title'>
                                    <div className='task-name-container'>
                                        <h1 className='task-name'>Task Name</h1>
                                        <Form.Control className='task-name-input' placeholder='Task Title' aria-label='Task Title' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                                    </div>
                                    <div className='h2-text-one'>
                                        <h2 className='description'>Description</h2>
                                        <textarea className='input-placeholder-one p-2 bg-neutral-700 active active:outline-none focus:outline-none' value={descriptionValue} placeholder='Write here...' onChange={(e) => setDescriptionValue(e.target.value)} rows='1' />
                                    </div>

                                    <div className='due'>
                                        <h1 className='dueN'>Due date</h1>
                                        <DateTimePicker
                                            onChange={(date) => {
                                                setDueDate(date);
                                            }}
                                            value={dueDate}
                                        />
                                    </div>
                                    <div className='attachment'>
                                        <h1 className='dueN'>Upload attachment</h1>
                                        <input value={attachment.center} type='file' accept='image/jpeg, image/png, image/jpg, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf' onChange={(event) => setAttachement(event.target.files)} multiple />
                                    </div>
                                </InputGroup>
                            ) : taskSelection === 'Connect' ? (
                                <InputGroup className='plus-title'>
                                    <div className='task-name-container'>
                                        <h1 className='task-name'>Task Name</h1>
                                        <Form.Control className='task-name-input' placeholder='Task Title' aria-label='Task Title' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                                    </div>
                                    <div className='h2-text-one'>
                                        <h2 className='description'>Description</h2>
                                        <textarea className='input-placeholder-one p-2 bg-neutral-700 active active:outline-none focus:outline-none' value={descriptionValue} placeholder='Write here...' onChange={(e) => setDescriptionValue(e.target.value)} rows='1' />
                                    </div>

                                    <div className='due'>
                                        <h1 className='dueN'>Due date</h1>
                                        <DateTimePicker
                                            onChange={(date) => {
                                                setDueDate(date);
                                            }}
                                            value={dueDate}
                                        />
                                    </div>
                                    <div className='choices'>
                                        <h1 className='dueN'>Choices</h1>
                                        {choice.map((option, index) => (
                                            <div key={index}>
                                                <input type='text' name='value' value={option.value} onChange={(e) => handleInputChange(index, e)} placeholder='Option Value' />
                                            </div>
                                        ))}
                                        <button type='button' onClick={handleAddOption}>
                                            Add Option
                                        </button>
                                    </div>
                                </InputGroup>
                            ) : (
                                <InputGroup className='plus-title'>
                                    <div className='task-name-container'>
                                        <h1 className='task-name'>Task Name</h1>
                                        <Form.Control className='task-name-input' placeholder='Task Title' aria-label='Task Title' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                                    </div>
                                    <div className='h2-text-one'>
                                        <h2 className='description'>Description</h2>
                                        <textarea className='input-placeholder-one p-2 bg-neutral-700 active active:outline-none focus:outline-none' value={descriptionValue} placeholder='Write here...' onChange={(e) => setDescriptionValue(e.target.value)} rows='1' />
                                    </div>
                                    <div className='attachment'>
                                        <h1 className='dueN'>Upload attachment</h1>
                                        <input value={attachment.center} type='file' accept='image/jpeg, image/png, image/jpg, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf' onChange={(event) => setAttachement(event.target.files)} multiple />
                                    </div>
                                </InputGroup>
                            )}

                            <Button className='post-ass-button' onClick={() => handleSubmit(taskSelection)} variant='light'>
                                Post
                            </Button>
                        </Card>
                    </div>
                )}

                <div className='connect'>
                    <h1 className='connect-text'>
                        <BiTask />
                        Connect
                    </h1>

                    <div className='info'>
                        <h2 className='connect-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>

                    <div className='info-one'>
                        <h2 className='connect-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>

                    <div className='info-two'>
                        <h2 className='connect-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>
                </div>

                <Card className='check'>
                    <h1 className='check-text'>
                        <BiTask />
                        Check
                    </h1>

                    <div className='info'>
                        <h2 className='check-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>

                    <div className='info-one'>
                        <h2 className='check-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>

                    <div className='info-two'>
                        <h2 className='check-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>
                </Card>

                <Card className='coach'>
                    <h1 className='coach-text'>
                        <BiTask />
                        Coach
                    </h1>

                    <div className='info'>
                        <h2 className='check-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>

                    <div className='info-one'>
                        <h2 className='check-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>

                    <div className='info-two'>
                        <h2 className='check-title'>Basic shit</h2>
                        <h2 className='block'>BSIT2-03</h2>
                        <h2 className='due'>today</h2>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default TaskProf;
