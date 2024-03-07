import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { useEffect, useState } from 'react';
import { getCoach } from '../../services/student';

const TaskCoach = () => {
    const taskType = 'coach';
    const navigate = useNavigate();
    const [coachTask, setCoachTask] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCoach();
                setCoachTask(response.coachTask);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <Accordion defaultActiveKey='0' className='main-holder'>
            {coachTask.map((data) => (
                <Card className='card-within' key={data._id}>
                    <button onClick={() => navigate(`/task-new/coach/${data._id}`)} type='button' data-mdb-ripple-init>
                        <Card.Body>
                            <h4 className='task-type'>
                                {taskType.toUpperCase()}: <span className='task-title'>{data.postTitle}</span>
                            </h4>
                            <h5 className='date-posted'>{formatDate(data.createdAt)}</h5>
                            <h5 className='subject-code'>{data.class.subject.subjectCode}</h5>
                        </Card.Body>
                    </button>
                </Card>
            ))}
        </Accordion>
    );
};

export default TaskCoach;
