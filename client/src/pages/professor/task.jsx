import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/prof-scss/task.scss';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { BiTask } from 'react-icons/bi';
import { FaPlus, FaTimes } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { getCheck, getClass, getCoach, getConnect, postCheck, postCoach, postConnect } from '../../services/professor';

function TaskProf() {
    const navigate = useNavigate();
    const [showWindow, setShowWindow] = useState(false);
    const [classes, setClasses] = useState([]);
    const [check, setCheck] = useState([]);
    const [connect, setConnect] = useState([]);
    const [coach, setCoach] = useState([]);
    const [taskSelection, setTaskSelection] = useState('');

    const [classID, setClassID] = useState('');
    const [classValue, setClassValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const descriptionTextAreaRef = useRef(null);
    const [dueDate, setDueDate] = useState('');
    const [attachment, setAttachement] = useState({});
    const [choice, setChoice] = useState([]);
    const [selectedOption, setSelectedOption] = useState('Quiz');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleSubmit = async (task) => {
        const formData = new FormData();
        formData.append('classID', classID);
        formData.append('postTitle', titleValue);
        formData.append('postDescription', descriptionValue);
        formData.append('dueDate', dueDate);
        formData.append('typeOfCheck', selectedOption);
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
            setShowWindow(false);
        }
    };

    const handlePlusClick = (task) => {
        setShowWindow(true);
        setTaskSelection(task);
    };

    const handleCloseClick = () => {
        setShowWindow(false);
    };

    const handleInputChange = (index, event) => {
        const { value } = event.target;
        const newChoices = [...choice];
        newChoices[index] = value;
        setChoice(newChoices);
    };

    const handleAddOption = () => {
        setChoice([...choice, '']);
    };

    const updateForm = () => {
        setTitleValue('');
        setDescriptionValue('');
        setDueDate('');
        setAttachement({});
        setChoice([]);
        setSelectedOption('');
    };

    useEffect(() => {
        if (descriptionTextAreaRef.current) {
            descriptionTextAreaRef.current.style.height = 'auto';
            descriptionTextAreaRef.current.style.height = descriptionTextAreaRef.current.scrollHeight + 'px';
        }
    }, [descriptionValue]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const classResponse = await getClass();
                setClasses(classResponse.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='home-page'>
            <div className='cfluid'>
                <Nav className='nav-b'>
                    Select Subject and Block
                    <DropdownButton className='dbuttontwo' variant='light' id='dropdown-basic-button' title={classValue || 'Select Subject and Block'}>
                        {classes.map((classObj) => (
                            <Dropdown.Item
                                key={classObj._id}
                                onClick={async () => {
                                    setClassID(classObj._id);
                                    setClassValue(`${classObj.subject.subjectCode}: ${classObj.block}`);
                                    const checkResponse = await getCheck(classObj._id);
                                    setCheck(checkResponse.message);
                                    const connectResponse = await getConnect(classObj._id);
                                    setConnect(connectResponse.message);
                                    const coachResponse = await getCoach(classObj._id);
                                    setCoach(coachResponse.message);
                                }}
                            >
                                {classObj.subject.subjectCode}: {classObj.block}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Nav>
            </div>
            {classValue ? (
                <div className='dropdown-task'>
                    <div className='tcontainer'>
                        <div className='texts'>
                            <h1 className='taskN'>TASK</h1>
                            <h1 className='taskNo'>NAME</h1>
                            <h1 className='assigned'>ASSIGNED</h1>
                            <h1 className='dueD'>DUE</h1>
                        </div>

                        {showWindow && (
                            <div className='floating-window'>
                                <button className='close-button' onClick={handleCloseClick}>
                                    <FaTimes className='eks' />
                                </button>

                                <Card className='plus-task'>
                                    <div className='header-plus-task'>
                                        <h1 className='post'>Post a {taskSelection || 'task'}</h1>
                                    </div>

                                    {taskSelection === 'Check' ? (
                                        <InputGroup className='plus-title-check'>
                                            <h1 className='task-name'>Task Name</h1>
                                            <div className='task-name-container'>
                                                <Form.Control className='task-name-input' placeholder='Write here...' aria-label='Write here...' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                                            </div>
                                            <div className='h2-text-one'>
                                                <h2 className='description'>Description</h2>
                                                <textarea className='input-placeholder-one p-2 bg-neutral-700 active active:outline-none focus:outline-none' value={descriptionValue} placeholder='Write here...' onChange={(e) => setDescriptionValue(e.target.value)} rows='1' ref={descriptionTextAreaRef} />
                                            </div>
                                            <div className='due-check'>
                                                <h1 className='check-due-date-etch'>Due date</h1>
                                                <DateTimePicker
                                                    onChange={(date) => {
                                                        setDueDate(date);
                                                    }}
                                                    value={dueDate}
                                                />
                                            </div>
                                            <div>
                                                <legend>Please select the type of task:</legend>
                                                <div>
                                                    <input type='radio' name='type of check' value='Quiz' checked={selectedOption === 'Quiz'} onChange={handleOptionChange} />
                                                    <label htmlFor='contactChoice1'>Quiz</label>

                                                    <input type='radio' name='type of check' value='Exam' checked={selectedOption === 'Exam'} onChange={handleOptionChange} />
                                                    <label htmlFor='contactChoice2'>Exam</label>

                                                    <input type='radio' name='type of check' value='Performance Task' checked={selectedOption === 'Performance Task'} onChange={handleOptionChange} />
                                                    <label htmlFor='contactChoice3'>Performance Task</label>

                                                    <input type='radio' name='type of check' value='Activity' checked={selectedOption === 'Activity'} onChange={handleOptionChange} />
                                                    <label htmlFor='contactChoice3'>Activity</label>
                                                </div>
                                                <div>
                                                    <button type='submit'>Submit</button>
                                                </div>
                                            </div>
                                            <div className='attachment-check'>
                                                <h1 className='check-upload-etch'>Upload attachment</h1>
                                                <input
                                                    className='input-check'
                                                    value={attachment === '' ? attachment : attachment.center}
                                                    type='file'
                                                    accept='image/jpeg, image/png, image/jpg, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf'
                                                    onChange={(event) => {
                                                        setAttachement(event.target.files);
                                                        console.log(event.target.files);
                                                    }}
                                                    multiple
                                                />
                                            </div>
                                        </InputGroup>
                                    ) : taskSelection === 'Connect' ? (
                                        <InputGroup className='plus-title'>
                                            <div className='task-name-container-connect'>
                                                <h1 className='task-name'>Task Name</h1>
                                                <Form.Control className='task-name-input' placeholder='Write here...' aria-label='Task Title' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                                            </div>
                                            <div className='h2-text-one'>
                                                <h2 className='description'>Description</h2>
                                                <textarea className='input-placeholder-one p-2 bg-neutral-700 active active:outline-none focus:outline-none' value={descriptionValue} placeholder='Write here...' onChange={(e) => setDescriptionValue(e.target.value)} rows='1' ref={descriptionTextAreaRef} />
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
                                                <h1 className='choiceS'>Choices</h1>
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
                                            <div className='task-name-container-coach'>
                                                <h1 className='task-name'>Task Name</h1>
                                                <Form.Control className='task-name-input' placeholder='Write here...' aria-label='Task Title' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                                            </div>
                                            <div className='h2-text-one'>
                                                <h2 className='description'>Description</h2>
                                                <textarea className='input-placeholder-one p-2 bg-neutral-700 active active:outline-none focus:outline-none' value={descriptionValue} placeholder='Write here...' onChange={(e) => setDescriptionValue(e.target.value)} rows='1' ref={descriptionTextAreaRef} />
                                            </div>
                                            <div className='attachment'>
                                                <h1 className='upload'>Upload attachment</h1>
                                                <input type='file' accept='image/jpeg, image/png, image/jpg, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf' onChange={(event) => setAttachement(event.target.files)} multiple />
                                            </div>
                                        </InputGroup>
                                    )}

                                    <Button className='post-ass-button' onClick={() => handleSubmit(taskSelection)} variant='light'>
                                        Post
                                    </Button>
                                </Card>
                            </div>
                        )}

                        <div className='task-container'>
                            <div className='division'>
                                <h1 className='task-text'>
                                    <FaPlus className='plus' onClick={() => handlePlusClick('Connect')} />
                                    <BiTask />
                                    Connect
                                </h1>
                                {connect ? (
                                    connect.map((task) => (
                                        <div className='info' key={task._id} onClick={() => navigate(`/work-page/connect/${task._id}`)}>
                                            <h2 className='task-title'>
                                                <IoIosCheckmarkCircleOutline /> {''}
                                                {task.postTitle}
                                            </h2>
                                            <h2 className='block'>{task.postDescription}</h2>
                                            <h2 className='due'>{task.dueDate || 'No Due date'}</h2>
                                        </div>
                                    ))
                                ) : (
                                    <p className='no-task'>No Connect tasks</p>
                                )}
                            </div>
                        </div>
                        <Card className='task-container'>
                            <div className='division'>
                                <h1 className='task-text'>
                                    <FaPlus className='plus' onClick={() => handlePlusClick('Coach')} />
                                    <BiTask />
                                    Coach
                                </h1>

                                {coach ? (
                                    coach.map((task) => (
                                        <div className='info' key={task._id} onClick={() => navigate(`/work-page/coach/${task._id}`)}>
                                            <h2 className='task-title'>
                                                <IoIosCheckmarkCircleOutline />
                                                {task.postTitle}
                                            </h2>
                                            <h2 className='block'>{task.postDescription}</h2>
                                        </div>
                                    ))
                                ) : (
                                    <p className='no-task'>No Coach tasks</p>
                                )}
                            </div>
                        </Card>
                        <Card className='task-container'>
                            <div className='division'>
                                <h1 className='task-text'>
                                    <FaPlus className='plus' onClick={() => handlePlusClick('Check')} />
                                    <BiTask />
                                    Check
                                </h1>
                                {check ? (
                                    check.map((task, index) => (
                                        <div className={`info ${index > 0 ? 'gray-background' : ''}`} key={task._id} onClick={() => navigate(`/work-page/check/${task._id}`)}>
                                            <h2 className='task-title'>
                                                <IoIosCheckmarkCircleOutline /> {''}
                                                {task.postTitle}
                                            </h2>
                                            <h2 className='block'>{task.postDescription}</h2>
                                            <h2 className='due'>{task.dueDate || 'No Due date'}</h2>
                                        </div>
                                    ))
                                ) : (
                                    <p className='no-task'>No Check tasks</p>
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default TaskProf;
