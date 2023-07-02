import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import DashBord from "./pages/dashBord/DashBord";
import Classes from "./pages/classes/Classes";
import Reports from "./pages/reports/Reports";
import Logout from "./pages/logout/Logout";
import SideBar from "./components/sideBar/SideBar";
import ClassesSharedLayout from "./pages/layouts/ClassesSharedLayout";
import TeacherInfo from "./pages/teacherInfo/TeacherInfo";
import DashBordSharedLayout from "./pages/layouts/DashBordSharedLayout";
import StudentInfo from "./pages/studentInfo/StudentInfo";
import { useSelector } from "react-redux";
import TeachersSharedLayout from "./pages/layouts/TeachersSharedLayout";
import Teachers from "./pages/Teachers";
import StudentsSharedLayout from "./pages/layouts/StudentsSharedLayout";
import Students from "./pages/Students";
import DepartmentsSharedLayout from "./pages/layouts/DepartmentsSharedLayout";
import Departments from "./pages/Departments";
import ClassDetails from "./pages/Class";
import ClassAttendance from "./pages/ClassAttendance";
import DepartmentDetails from "./pages/DepartmentDetails";
import TeacherDetails from "./pages/TeacherDetails";
import StudentDetails from "./pages/StudentDetails";
import Home from "./pages/Home";
import HomeSharedLayout from "./pages/layouts/HomeSharedLayout";
import SchoolTeachers from "./pages/SchoolTeachers";
import SchoolStudents from "./pages/SchoolStudents";
import SchoolParents from "./pages/SchoolParents";
import AdminLogin from "./pages/AdminLogin";
import TeacherLogin from "./pages/TeacherLogin";
import StudentLogin from "./pages/StudentLogin";
import ParentsLogin from "./pages/ParentsLogin";
import { useEffect, useState } from "react";
import TeacherSidebar from "./components/TeacherSidebar";
import ClassAttendanceReport from "./pages/ClassAttendanceReport";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [app, setApp] = useState(null);
  const storeUser = useSelector((state) => state.login.user);
  const userType = JSON.parse(localStorage.getItem("userType"));
  const navigate = useNavigate();
  const startApp = () => {
    if (user?.name || storeUser?.password) {
      navigate("/", { replace: true });
      if (userType === "admin") {
        return (
          <>
            <SideBar />

            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<DashBordSharedLayout />}>
                  <Route index element={<DashBord />} />
                  <Route path="teacherInfo" element={<TeacherInfo />} />
                  <Route path="studentInfo" element={<StudentInfo />} />
                </Route>

                <Route
                  path="/departments"
                  element={<DepartmentsSharedLayout />}
                >
                  <Route index element={<Departments />} />
                  <Route path="view" element={<DepartmentDetails />} />
                </Route>

                <Route path="/teachers" element={<TeachersSharedLayout />}>
                  <Route index element={<Teachers />} />
                  <Route path="view" element={<TeacherDetails />} />
                </Route>

                <Route path="/students" element={<StudentsSharedLayout />}>
                  <Route index element={<Students />} />
                  <Route path="view" element={<StudentDetails />} />
                </Route>

                <Route path="/classes" element={<ClassesSharedLayout />}>
                  <Route index element={<Classes />} />
                  <Route path="view" element={<ClassDetails />} />
                  <Route path="attendance" element={<ClassAttendance />} />
                  <Route path="report" element={<ClassAttendanceReport />} />
                </Route>
                <Route path="/reports" element={<Reports />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </div>
          </>
        );
      } else if (userType === "teacher") {
        return (
          <>
            <TeacherSidebar />

            <div className="routes">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Navigate to="/dashboard" state={{ id: user?.id }} />
                  }
                />
                <Route path="/dashboard" element={<TeacherDetails />}></Route>
                <Route path="/classes/view" element={<ClassDetails />} />
                <Route path="/students/view" element={<StudentDetails />} />

                <Route
                  path="/classes/attendance"
                  element={<ClassAttendance />}
                />
              </Routes>
            </div>
          </>
        );
      } else if (userType === "student") {
        return (
          <>
            <TeacherSidebar />

            <div className="routes">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Navigate to="/dashboard" state={{ id: user?.id }} />
                  }
                />
                <Route path="/dashboard" element={<StudentDetails />}></Route>
              </Routes>
            </div>
          </>
        );
      } else if (userType === "parent") {
        return (
          <>
            <TeacherSidebar />

            <div className="routes">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Navigate to="/dashboard" state={{ id: user?.id }} />
                  }
                />
                <Route path="/dashboard" element={<StudentDetails />}></Route>
              </Routes>
            </div>
          </>
        );
      }
    } else {
      return (
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeSharedLayout />}>
            <Route index element={<Home />} />
            <Route path="teachers" element={<SchoolTeachers />} />
            <Route path="students" element={<SchoolStudents />} />
            <Route path="parents" element={<SchoolParents />} />
            <Route path="admin_login" element={<AdminLogin />} />
            <Route path="teacher_login" element={<TeacherLogin />} />
            <Route path="student_login" element={<StudentLogin />} />
            <Route path="parent_login" element={<ParentsLogin />} />
          </Route>
        </Routes>
      );
    }
  };
  useEffect(() => {
    const appCall = startApp();
    setApp(appCall);
  }, [storeUser]);
  return <div className="app">{app}</div>;
}

export default App;
