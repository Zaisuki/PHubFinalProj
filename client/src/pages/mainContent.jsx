import { Route, Routes } from 'react-router-dom';

import SideBar from '../components/sidebar';
import Dashboard from './dashboard';
import Profile from './profile';

const MainContent = () => {
    return (
        <>
            <SideBar />
            <main>
                <Routes className='sidebar-container'>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </main>
        </>
    );
};

export default MainContent;
