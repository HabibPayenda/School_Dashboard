import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBord from "./pages/dashBord/DashBord";
import Classes from "./pages/classes/Classes";
import Reports from "./pages/reports/Reports";
import Logout from "./pages/logout/Logout";
import SideBar from "./components/sideBar/SideBar";
import ClassView from "./components/classView/ClassView";
import ClassesSharedLayout from "./pages/layouts/ClassesSharedLayout";
import TeacherInfo from "./pages/teacherInfo/TeacherInfo";
import DashBordSharedLayout from "./pages/layouts/DashBordSharedLayout";
import StudentInfo from "./pages/studentInfo/StudentInfo";
import { Provider } from "react-redux";
import store from "./store/store";
import TeachersSharedLayout from "./pages/layouts/TeachersSharedLayout";
import Teachers from "./pages/Teachers";
import StudentsSharedLayout from "./pages/layouts/StudentsSharedLayout";
import Students from "./pages/Students";
import DepartmentsSharedLayout from "./pages/layouts/DepartmentsSharedLayout";
import Departments from "./pages/Departments";
import ClassDetails from "./pages/Class";
import ClassAttendance from "./pages/ClassAttendance";
import DepartmentDetails from "./pages/DepartmentDetails";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <SideBar />

          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashBordSharedLayout />}>
                <Route index element={<DashBord />} />
                <Route path="teacherInfo" element={<TeacherInfo />} />
                <Route path="studentInfo" element={<StudentInfo />} />
              </Route>

              <Route path="/departments" element={<DepartmentsSharedLayout />}>
                <Route index element={<Departments />} />
                <Route path="view" element={<DepartmentDetails />} />
              </Route>

              <Route path="/teachers" element={<TeachersSharedLayout />}>
                <Route index element={<Teachers />} />
              </Route>

              <Route path="/students" element={<StudentsSharedLayout />}>
                <Route index element={<Students />} />
              </Route>

              <Route path="/classes" element={<ClassesSharedLayout />}>
                <Route index element={<Classes />} />
                <Route path="view" element={<ClassDetails />} />
                <Route path="attendance" element={<ClassAttendance />} />
              </Route>
              <Route path="/reports" element={<Reports />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
