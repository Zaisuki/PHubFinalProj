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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCheck();
                setNoDueDate(response.noDueDate);
                setThisWeek(response.thisWeek);
                setNextWeek(response.nextWeek);
                setLater(response.later);
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
                    {noDueDate.map((task) => (
                        <StudentTask taskType={taskType} data={task} key={task._id} />
                    ))}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' className='1st'>
                <Accordion.Header>This Week</Accordion.Header>
                <Accordion.Body>
                    {thisWeek.map((task) => (
                        <StudentTask taskType={taskType} data={task} key={task._id} />
                    ))}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2' className='2nd'>
                <Accordion.Header>Next Week</Accordion.Header>
                <Accordion.Body>
                    {nextWeek.map((task) => (
                        <StudentTask taskType={taskType} data={task} key={task._id} />
                    ))}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3' className='3rd'>
                <Accordion.Header>Later</Accordion.Header>
                <Accordion.Body>
                    {later.map((task) => (
                        <StudentTask taskType={taskType} data={task} key={task._id} />
                    ))}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};
export default TaskCheck;
