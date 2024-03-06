import { Route, Routes } from 'react-router-dom';

import StudentLayout from '../layout/studentLayout';

import Feed from '../pages/student/feed';
import Profile from '../pages/profile';
import Task from '../pages/student/task';
import Inbox from '../pages/inbox';
import Notification from '../pages/notification';
import CourseStudent from '../pages/student/course-student.jsx';
import CourseNew from '../pages/student/course-new';
import TaskNew from '../pages/student/taskNew';

export default function StudentRoutes() {
    return (
        <Routes>
            <Route path='/' element={<StudentLayout />}>
                <Route index element={<Feed />} />
                <Route path='profile' element={<Profile />} />
                <Route path='task' element={<Task />} />
                <Route path='notification' element={<Notification />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='course-student' element={<CourseStudent />} />
                <Route path='course-new/:id' element={<CourseNew />} />
                <Route path='task-new/:classType/:taskID' element={<TaskNew />} />
            </Route>
        </Routes>
    );
}
