import { Route, Routes } from 'react-router-dom';

import FeedProf from '../pages/professor/feed';
import Profile from '../pages/profile';
import Inbox from '../pages/inbox';
import Notification from '../pages/notification';
import Calendar from '../pages/calendar';
import CourseProf from '../pages/course';
import ProfessorLayout from '../layout/professorLayout';
import TaskProf from '../pages/professor/task';

export default function ProfessorRoutes() {
    return (
        <Routes>
            <Route path='' element={<ProfessorLayout />}>
                <Route index element={<FeedProf />} />
                <Route path='profile' element={<Profile />} />
                <Route path='notification' element={<Notification />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='course' element={<CourseProf />} />
                <Route path='task' element={<TaskProf />} />
            </Route>
        </Routes>
    );
}
