import ProgressBar from 'react-bootstrap/ProgressBar';
import ProfileIcon from '../assets/img/mygirl.jpg';

const SummaryTask = () => {
    return (
        <div className='summary-task'>
            

            <div className='progress-bar'>
                <h1>Completed Task</h1>
                <ProgressBar className='test' variant='success' now={70} />
                <h2>Coach</h2>
                <ProgressBar className='test' variant='success' now={40} />
                <h2>Connect</h2>
                <ProgressBar className='test' variant='success' now={20} />
                <h2>Check</h2>
                <ProgressBar className='test' variant='success' now={60} />
                <h2>Missing</h2>
                <ProgressBar className='test' variant='danger' now={10} />
            </div>
        </div>
    );
};

export default SummaryTask;
