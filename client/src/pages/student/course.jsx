import Card from 'react-bootstrap/Card';
import '../../assets/scss/course.scss';
import { useNavigate } from 'react-router-dom';

function Course() {
    const navigate = useNavigate();
    return (
        <div className='course-main-container'>
            <div className='course-container'>
                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>ITE 400 Title </Card.Title>
                        <Card.Text>Stephen Bautista</Card.Text>
                        <button onClick={()=> navigate ("/student/course-new")} type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>
                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>SSP 006</Card.Title>
                        <Card.Text>Personal Growth</Card.Text>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>

                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>SCE 002</Card.Title>
                        <Card.Text>Science</Card.Text>
                        <button type="button"
                        class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>

                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>ENG213</Card.Title>
                        <Card.Text>Global Workplace</Card.Text>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>

                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>ITE 143</Card.Title>
                        <Card.Text>Love Bombing</Card.Text>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>

                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>GEN 002</Card.Title>
                        <Card.Text>Life and Society</Card.Text>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>

                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>HIS 010</Card.Title>
                        <Card.Text>Star Wars</Card.Text>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>

                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>ITE 393</Card.Title>
                        <Card.Text>Arts and Science</Card.Text>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>

                <Card border='success' className='course-card'>
                    <Card.Header>UP-FA1-BSIT2-03</Card.Header>
                    <Card.Body>
                        <Card.Title>GEN 069</Card.Title>
                        <Card.Text>Hunger Games</Card.Text>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-init>View</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Course;
