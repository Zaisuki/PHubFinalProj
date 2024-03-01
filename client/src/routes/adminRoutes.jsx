import { Route, Routes } from "react-router-dom";

import AdminLayout from "../layout/adminLayout";
import HomeAdmin from "../pages/admin/homeAdmin";
import StudentForm from "../pages/admin/studentForm";
import ProfessorForm from "../pages/admin/professorForm";
import AdminForm from "../pages/admin/adminForm";
import EnrollStudentClass from "../pages/admin/enrollStudentClass";
import CreateSubject from "../pages/admin/createSubject";
import CreateClass from "../pages/admin/createClass";
import EvaluationOutput from "../pages/admin/evaluation_output";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="" element={<AdminLayout />}>
        <Route index element={<HomeAdmin />} />
        <Route path="create-student" element={<StudentForm />} />
        <Route path="create-professor" element={<ProfessorForm />} />
        <Route path="create-admin" element={<AdminForm />} />
        <Route path="create-subject" element={<CreateSubject />} />
        <Route path="create-class" element={<CreateClass />} />
        <Route path="enroll-student-class" element={<EnrollStudentClass />} />
        <Route path="evaluation-output" element={<EvaluationOutput />} />
      </Route>
    </Routes>
  );
}
