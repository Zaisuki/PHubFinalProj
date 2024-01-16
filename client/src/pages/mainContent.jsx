import { Route, Routes } from 'react-router-dom';

import SideBar from '../components/sidebar';
import Dashboard from './dashboard';
import Profile from './profile';
import Task from './task';
import Inbox from './inbox';
import Notification from './notification';
import Calendar from './calendar';

const MainContent = () => {
    return (
        <>
            <SideBar />
            <main>
                <Routes className='sidebar-container'>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/task' element={<Task />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/calendar' element={<Calendar />} />
                </Routes>
            </main>
        </>
    );
};

export default MainContent;
