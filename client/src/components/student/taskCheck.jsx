import Accordion from 'react-bootstrap/Accordion';
import StudentTask from './studentTask';
import { useEffect, useState } from 'react';
import { getCheck } from '../../services/student';

const TaskCheck = () => {
    const taskType = 'check';
    const [noDueDate, setNoDueDate] = useState([]);
    const [thisWeek, setThisWeek] = useState([]);
    const [nextWeek, setNextWeek] = useState([]);
    const [later, setLater] = useState([]);
    const [missing, setMissing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCheck();
                setNoDueDate(response.noDueDate);
                setThisWeek(response.thisWeek);
                setNextWeek(response.nextWeek);
                setLater(response.later);
                setMissing(response.missing);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Accordion defaultActiveKey='0' className='main-holder'>
            <Accordion.Item eventKey='0' className='1st'>
                <Accordion.Header>No Due Date</Accordion.Header>
                <Accordion.Body>
                    {noDueDate.length > 0 ? (
                        noDueDate.map((task) => (
                            <StudentTask taskType={taskType} data={task} key={task._id} />
                        ))
                    ) : (
                        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'500', color:'gray' }}>No check tasks posted</p>
                    )}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' className='1st'>
                <Accordion.Header>This Week</Accordion.Header>
                <Accordion.Body>
                    {thisWeek.length > 0 ? (
                        thisWeek.map((task) => (
                            <StudentTask taskType={taskType} data={task} key={task._id} />
                        ))
                    ) : (
                        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'500', color:'gray' }}>No check tasks posted</p>
                    )}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2' className='2nd'>
                <Accordion.Header>Next Week</Accordion.Header>
                <Accordion.Body>
                    {nextWeek.length > 0 ? (
                        nextWeek.map((task) => (
                            <StudentTask taskType={taskType} data={task} key={task._id} />
                        ))
                    ) : (
                        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'500', color:'gray' }}>No check tasks posted</p>
                    )}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3' className='3rd'>
                <Accordion.Header>Later</Accordion.Header>
                <Accordion.Body>
                    {later.length > 0 ? (
                        later.map((task) => (
                            <StudentTask taskType={taskType} data={task} key={task._id} />
                        ))
                    ) : (
                        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'500', color:'gray' }}>No check tasks posted</p>
                    )}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4' className='3rd'>
                <Accordion.Header>Missing</Accordion.Header>
                <Accordion.Body>
                    {missing.length > 0 ? (
                        missing.map((task) => (
                            <StudentTask taskType={taskType} data={task} key={task._id} />
                        ))
                    ) : (
                        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'500', color:'gray' }}>No check tasks posted</p>
                    )}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default TaskCheck;
