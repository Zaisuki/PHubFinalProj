import { Route, Routes } from 'react-router-dom';

import AdminLayout from '../layout/adminLayout';
import HomeAdmin from '../pages/admin/homeAdmin';
import { StudentForm } from '../pages/admin/studentForm';
import { ProfessorForm } from '../pages/admin/professorForm.jsx';
import { AdminForm } from '../pages/admin/adminForm';

export default function ProfessorRoutes() {
    return (
        <Routes>
            <Route path='' element={<AdminLayout />}>
                <Route index element={<HomeAdmin />} />
                <Route path='create-student' element={<StudentForm />} />
                <Route path='create-professor' element={<ProfessorForm />} />
                <Route path='create-admin' element={<AdminForm />} />
            </Route>
        </Routes>
    );
}
