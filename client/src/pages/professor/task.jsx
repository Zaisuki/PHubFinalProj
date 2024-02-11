import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import '../../assets/scss/task.scss';

export default function TaskProf() {
    return (
        <Tabs id='justify-tab' className='mb-3' justify>
            <Tab className='coach-tab' eventKey='coach' title='Coach'>
                <div className='coach-content'>
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>ITE 400</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>ITE 300</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Tab>
            <Tab className='connect-tab' eventKey='connect' title='Connect'>
                Tab content for Connect 
            </Tab>
            <Tab className='check-tab' eventKey='check' title='Check'>
                Tab content for Check
            </Tab>
            <Tab className='missing-tab' eventKey='missing' title='Missing'>
                Tab content for Missing
            </Tab>
        </Tabs>
    );
}
