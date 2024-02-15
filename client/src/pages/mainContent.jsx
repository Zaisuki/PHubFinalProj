import StudentRoutes from '../routes/studentRoutes';
import ProfessorRoutes from '../routes/professorRoutes';
import { cookies } from '../services/entry';

const MainContent = () => {
    const userType = cookies.get('userType');
    return (
        <>
            {/* TODO */}
            {/* Student */}
            {userType === 'E2jF8sG5dH9tY3kL4zX7pQ6wR1oV0mCqB6nI8bT7yU5iA3gD2fS4hJ9uMlKoP1e' ? <StudentRoutes /> : userType === 'r9LsT6kQ3jWfZ1pY4xN7hM2cV8gB5dI0eJ4uF2oD3iG5vX6mC1aS7tR9yU3lK8w' ? <ProfessorRoutes /> : 'admin'}
            {/* Professor */}
        </>
    );
};

export default MainContent;
// TODO: 6+ pages
// Coach for student and prof
// Check for student and prof
// Connect for student and prof
// All post sa per subjects
// Pag post ng prof
// Pag delete and register ng admins
// remove notification sa dashboard na

// Student and Prof View
// Coach (For Prof 2 tabs para sa mismong post and sa mga answers ng students)
// Check (For Prof 2 tabs para sa mismong post and sa mga answers ng students)
// Connect (For Prof 2 tabs para sa mismong post and sa mga answers ng students)

// Student view
// Profile
// Task
// Evaluation
// Notification
// Dashboard
// Subjects
// Inbox
// Calendar

// Prof view
// Profile
// Notification
// Dashboard
// Subjects
// Inbox
// Calendar
// Task (Scheduled post, posted, ready for checking)

// Admin View
// Evaluations output
// register students and prof
// delete students and prof
// on and off of server for maintenance

// NOT FOUND PAGE
