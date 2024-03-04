import { Route, Routes } from 'react-router-dom';

import FeedProf from '../pages/professor/feed';
import Profile from '../pages/profile';
import Inbox from '../pages/inbox';
import Notification from '../pages/notification';
import CourseProf from '../pages/professor/course-prof.jsx';
import ProfessorLayout from '../layout/professorLayout';
import TaskProf from '../pages/professor/task';
import CourseNew from '../pages/professor/course-new';
import WorkPage from '../pages/professor/workpage';
import Statistics from '../pages/professor/statistics';
3;
export default function ProfessorRoutes() {
    return (
        <Routes>
            <Route path='' element={<ProfessorLayout />}>
                <Route index element={<FeedProf />} />
                <Route path='profile' element={<Profile />} />
                <Route path='notification' element={<Notification />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='course-prof' element={<CourseProf />} />
                <Route path='course-new/:id' element={<CourseNew />} />
                <Route path='task' element={<TaskProf />} />
                <Route path='work-page/:classType/:taskID' element={<WorkPage />} />
                <Route path='statistics' element={<Statistics />} />
            </Route>
        </Routes>
    );
}
