import { Route, Routes } from 'react-router-dom';

import DashboardProf from '../pages/professor/dashboard';
import Profile from '../pages/profile';
import Inbox from '../pages/inbox';
import Notification from '../pages/notification';
import Calendar from '../pages/calendar';
import CourseProf from '../pages/professor/course';
import ProfessorLayout from '../layout/professorLayout';
import Task from '../pages/student/task';

export default function ProfessorRoutes() {
    return (
        <Routes className='sidebar-container'>
            <Route path='professor' element={<ProfessorLayout />}>
                <Route index element={<DashboardProf />} />
                <Route path='profile' element={<Profile />} />
                <Route path='notification' element={<Notification />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='course' element={<CourseProf />} />
                <Route path='task' element={<Task />} />
            </Route>
        </Routes>
    );
}
