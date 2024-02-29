import { Route, Routes } from 'react-router-dom';

import StudentLayout from '../layout/studentLayout';

import Feed from '../pages/student/feed';
import Profile from '../pages/profile';
import Task from '../pages/student/task';
import Inbox from '../pages/inbox';
import Notification from '../pages/notification';
import Calendar from '../pages/calendar';
import Course from '../pages/course';
import Evaluation from '../pages/student/evaluation';
import CourseNew from '../pages/student/course-new';
import TaskNew from '../pages/student/taskNew';
import Statistics from '../pages/student/statistics';

export default function StudentRoutes() {
    return (
        <Routes>
            <Route path='/' element={<StudentLayout />}>
                <Route index element={<Feed />} />
                <Route path='profile' element={<Profile />} />
                <Route path='task' element={<Task />} />
                <Route path='notification' element={<Notification />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='course' element={<Course />} />
                <Route path='evaluation' element={<Evaluation />} />
                <Route path='course-new/:id' element={<CourseNew />} />
                <Route path='task-new/:classType/:taskID' element={<TaskNew />} />
                <Route path='statistics' element={<Statistics />} />
            </Route>
        </Routes>
    );
}
