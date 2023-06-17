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

              <Route path="/classes" element={<ClassesSharedLayout />}>
                <Route index element={<Classes />} />
                <Route path="view" element={<ClassView />} />
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
