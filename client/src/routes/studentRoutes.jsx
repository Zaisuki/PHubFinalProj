import { Route, Routes } from "react-router-dom";

import StudentLayout from "../layout/studentLayout";

import Dashboard from "../pages/student/dashboard";
import Profile from "../pages/profile";
import Task from "../pages/student/task";
import Inbox from "../pages/inbox";
import Notification from "../pages/notification";
import Calendar from "../pages/calendar";
import Course from "../pages/student/course";
import Evaluation from "../pages/student/evaluation";
import CourseNew from "../pages/student/course-new";
import TaskNew from "../pages/student/taskNew";

export default function StudentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StudentLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="task" element={<Task />} />
        <Route path="notification" element={<Notification />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="course" element={<Course />} />
        <Route path="evaluation" element={<Evaluation />} />
        <Route path="course-new" element={<CourseNew />} />
        <Route path="task-new" element={<TaskNew />} />
      </Route>
    </Routes>
  );
}
