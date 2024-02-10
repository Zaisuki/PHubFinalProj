import '../../assets/scss/dashboard.scss';
import Card from 'react-bootstrap/Card';

function Dashboard() {
    return (
        <Card.Body className='stat-card'>
            <Card className='stat-one'>
                <h1>This Week</h1>
                <h2 className='num-one'>1</h2>
                <h2 className='num-two'>1</h2>
                <h2 className='num-three'>1</h2>
                <h2 className='num-four'>1</h2>

                <h3 className='text-one'>Check</h3>
                <h3 className='text-two'>Connect</h3>
                <h3 className='text-three'>Coach</h3>
                <h3 className='text-four'>Missing</h3>
            </Card>

            <Card className='stat-two'>
                <h1>ITE 143</h1>
                <h2>QUIZZES</h2>
            </Card>
        </Card.Body>
    );
}

export default Dashboard;
