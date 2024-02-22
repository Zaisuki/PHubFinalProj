import Card from 'react-bootstrap/Card';
import '../../assets/scss/feed.scss';
import feedImg from '../../assets/img/feed.png';

function Feed() {
    return (
        <Card className='feed-student'>
            <Card className='feed-student-body'>
                <img className='feed-img' src={feedImg} alt='feed' />
                <h1></h1>

                <Card className='feed-content'>
                    <Card className='fc-greetings'>
                        <h1 className='f-greetings'>aaa</h1>
                    </Card>

                    <Card className='fc-subject'>
                        <h1 className='f-subject'>aaa</h1>
                    </Card>
                    <Card className='fc-name'>
                        <h1 className='f-name'>aaa</h1>
                    </Card>
                    <p className='date-time'>1/1/24</p>
                </Card>
            </Card>
        </Card>
    );
}

export default Feed;
