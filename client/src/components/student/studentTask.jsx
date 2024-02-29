import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

import PropTypes from 'prop-types';
const StudentTask = ({ taskType, data }) => {
    const navigate = useNavigate();
    return (
        <Card className='card-within'>
            <button onClick={() => navigate(`/task-new/${taskType}/${data._id}`)} type='button' data-mdb-ripple-init>
                <Card.Body>
                    <h4 className='task-type'>
                        {taskType.toUpperCase()}: <span className='task-title'>{data.postTitle}</span>
                    </h4>
                    <h5 className='date-posted'>{formatDate(data.createdAt)}</h5>
                    {taskType.toLowerCase() !== 'coach' && <h5 className='date-due'>{data.dueDate ? formatDate(data.dueDate) : 'No Due Date'}</h5>}
                </Card.Body>
            </button>
        </Card>
    );
};

StudentTask.propTypes = {
    taskType: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};
export default StudentTask;
