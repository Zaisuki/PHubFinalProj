import { Tab, Nav } from 'react-bootstrap';
import '../../assets/scss/task.scss';
import TaskCoach from '../../components/student/taskCoach';
import TaskConnect from '../../components/student/taskConnect';
import TaskCheck from '../../components/student/taskCheck';

function Task() {
    return (
        <Tab.Container id='student-tabs' defaultActiveKey='coach'>
            <Nav justify variant='tabs' className='student-nav-tab'>
                <Nav.Item>
                    <Nav.Link eventKey='coach' style={{ color: 'black' }}>
                        Coach
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='connect' style={{ color: 'black' }}>
                        Connect
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='check' style={{ color: 'black' }}>
                        Check
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey='coach'>
                    <TaskCoach />
                </Tab.Pane>

                {/* CONNECT TAB */}
                <Tab.Pane eventKey='connect'>
                    <TaskConnect />
                </Tab.Pane>

                {/* CHECK TAB */}
                <Tab.Pane eventKey='check'>
                    <TaskCheck />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    );
}

export default Task;
