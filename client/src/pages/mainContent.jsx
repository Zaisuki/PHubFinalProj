import { Route, Routes } from "react-router-dom";

import SideBar from "../components/sidebar";
import Dashboard from "./student/dashboard";
import Profile from "./student/profile";
import Task from "./task";
import Inbox from "./student/inbox";
import Notification from "./student/notification";
import Calendar from "./student/calendar";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Course from "./student/course";
import Evaluation from "./student/evaluation";

import DashboardProf from "./professor/dashboard";
import ProfileProf from "./professor/profile";
import InboxProf from "./professor/inbox";
import NotificationProf from "./professor/notification";
import CalendarProf from "./professor/calendar";
import CourseProf from "./professor/course";

const MainContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleOpenSideBar = () => {
    setIsClicked(true);
  };

  const handleCloseSideBar = () => {
    setIsClicked(false);
  };
  return (
    <>
      <SideBar
        isClicked={isClicked}
        onClick={handleCloseSideBar}
        onHover={handleMouseOver}
        onUnhover={handleMouseOut}
      />
      <main
        className={`${isHovered ? !isSmallScreen && "sidebar-main-open" : ""}`}
      >
        <Header onClick={handleOpenSideBar} />
        <Routes className="sidebar-container">
          {/* TODO */}
          {/* Student */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/task" element={<Task />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/course" element={<Course />} />
          <Route path="/evaluation" element={<Evaluation />} />
          {/* Professor */}
          
          <Route path="/professor/" element={<DashboardProf />} />
          <Route path="/professor/profile" element={<ProfileProf />} />
          <Route path="/professor/notification" element={<NotificationProf />} />
          <Route path="/professor/inbox" element={<InboxProf />} />
          <Route path="/professor/calendar" element={<CalendarProf />} />
          <Route path="/professor/course" element={<CourseProf />} />
        </Routes>
      </main>
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

// Admin View
// Evaluations output
// register students and prof
// delete students and prof
// on and off of server for maintenance
