import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import { 
  HomePage, 
  LoginPage, 
  SignupPage, 
  DashboardLanding, 
  CourseContentPage, 
  CalassroomsPage, 
  FollowUpPage, 
  AssessmentPage, 
  AssessmentSubmissionsPage, 
  PassExamsPage, 
  StudentsLandingPage, 
  StudentFollowUpPage, 
  StudentCourseContentPage, 
  LiveSessionPage, 
  CreateSessionPage, 
  JoinLiveSessionPage, 
  StudentAssessmentPage, 
  StudentAssessmentSubmissionsPage, 
  PassexamContentPage, SchoolHomePage,  
  SchoolInfoPage, 
  AssignmentPage, 
  AssignmentSubmissionPage, 
  StudentAssignmentPage,
  StudentAssignmentSubmissionPage,
  SchoolSpecialityPage,
  SchoolTeachersPage,
  SchoolStudentsPage,
  SchoolTimetablePage,
  SchoolAnouncementPage,
  SchoolReportsPage,
  SchoolStatisticsPage,
  SchoolPayFeesPage,
  StudentsAnnouncementsPage,
  StudentsFeesPaymentPage,
  StudentsReportsPage,
  StudentsTimeTablePage,
  SchoolFeesPaymentsPage,
  StudentSchooolBanksPage,
  SchoolStudentResultsPage,
  SchoolResultTypesPage,
  StudentSchooolResultsPage
} from './pages';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from './components/form/Protected';
import { useTranslation } from 'react-i18next';
import AcademicYearContext from './contexts/AcademicYearContext';
import { getAcademicYear } from './utils/storage';

function App() {
  const { t, i18n } = useTranslation();
  let [lang, setLang] = useState<any>(null);

  const handleTrans = () => {
    i18n.changeLanguage(lang);
  };

  const handleLangInit = () => {
    let lng = localStorage.getItem('locale');
    console.log("locale", lng);
    if(lng == null) {
      localStorage.setItem('locale', 'fr')
      setLang('fr');
    }else {
      setLang(lng);
    }
  }

  const changeLang = () => {
    if(lang != null) {
      localStorage.setItem('locale', lang)
      handleTrans();
    }
  } 

  // let academicYear = getAcademicYear();

  const [activeAcademyYear, setActiveAcademyYear] = useState<any>(null);

  
  useEffect(() => {
    handleLangInit();
  },[])

  useEffect(() => {
    changeLang()
  }, [lang]);
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
    <AcademicYearContext.Provider value={{activeAcademyYear, setActiveAcademyYear}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={(<HomePage />)} />
            <Route path="/login" element={(<LoginPage />)} />
            <Route path="/register" element={(<SignupPage />)} />
            <Route path="/dashboard" element={(<Protected > <DashboardLanding  /> </Protected>)} />
            <Route path="/class-rooms" element={(<Protected > <CalassroomsPage  /> </Protected>)} />
            <Route path="/course-contents" element={(<Protected > <CourseContentPage  /> </Protected>)} />
            <Route path="/follow-up" element={(<Protected > <FollowUpPage  /> </Protected>)} />
            <Route path="/assessments" element={(<Protected > <AssessmentPage  /> </Protected>)} />
            <Route path="/assessment-submissions" element={(<Protected > <AssessmentSubmissionsPage  /> </Protected>)} />
            <Route path="/assignments" element={(<Protected > <AssignmentPage  /> </Protected>)} />
            <Route path="/assignment-submissions" element={(<Protected > <AssignmentSubmissionPage  /> </Protected>)} />
            <Route path="/pass-exams" element={(<Protected > <PassExamsPage  /> </Protected>)} />

            <Route path="/live-session" element={(<Protected > <CreateSessionPage  /> </Protected>)} />

            <Route path="/live-session/:roomID" element={(<Protected > <LiveSessionPage  /> </Protected>)} />


            <Route path="/students/home" element={(<Protected > <StudentsLandingPage /> </Protected>)} />
            <Route path="/students/time-table" element={(<Protected > <StudentsTimeTablePage /> </Protected>)} />
            <Route path="/students/report" element={(<Protected > <StudentsReportsPage /> </Protected>)} />
            <Route path="/students/fees-payment" element={(<Protected > <StudentsFeesPaymentPage /> </Protected>)} />
            <Route path="/students/announcements" element={(<Protected > <StudentsAnnouncementsPage /> </Protected>)} />
            <Route  path="/students/course-contents" element={(<Protected> <StudentCourseContentPage /> </Protected>)} />
            <Route  path="/students/followups" element={(<Protected> <StudentFollowUpPage /> </Protected>)} />
            <Route  path="/students/assessments" element={(<Protected> <StudentAssessmentPage /> </Protected>)} />
            <Route  path="/students/assessment-submissions" element={(<Protected> <StudentAssessmentSubmissionsPage /> </Protected>)} />
            <Route  path="/students/passexams" element={(<Protected> <PassexamContentPage /> </Protected>)} />
            <Route  path="/students/live-session" element={(<Protected> <JoinLiveSessionPage /> </Protected>)} />
            <Route  path="/students/assignments" element={(<Protected> <StudentAssignmentPage /> </Protected>)} />
            <Route  path="/students/assignment-submissions" element={(<Protected> <StudentAssignmentSubmissionPage /> </Protected>)} />
            <Route  path="/students/school-banks" element={(<Protected> <StudentSchooolBanksPage /> </Protected>)} />
            <Route  path="/students/results" element={(<Protected> <StudentSchooolResultsPage /> </Protected>)} />


            <Route  path="/school/home" element={(<Protected> <SchoolHomePage /> </Protected>)} />
            <Route  path="/school/info" element={(<Protected> <SchoolInfoPage /> </Protected>)} />
            <Route  path="/school/speciality" element={(<Protected> <SchoolSpecialityPage /> </Protected>)} />
            <Route  path="/school/teachers" element={(<Protected> <SchoolTeachersPage /> </Protected>)} />
            <Route  path="/school/students" element={(<Protected> <SchoolStudentsPage /> </Protected>)} />
            <Route  path="/school/time-table" element={(<Protected> <SchoolTimetablePage /> </Protected>)} />
            <Route  path="/school/anouncement" element={(<Protected> <SchoolAnouncementPage /> </Protected>)} />
            <Route  path="/school/reports" element={(<Protected> <SchoolReportsPage /> </Protected>)} />
            <Route  path="/school/statistics" element={(<Protected> <SchoolStatisticsPage /> </Protected>)} />
            <Route  path="/school/fees" element={(<Protected> <SchoolPayFeesPage /> </Protected>)} />
            <Route  path="/school/fees-payments" element={(<Protected> <SchoolFeesPaymentsPage /> </Protected>)} />
            <Route  path="/school/students-results" element={(<Protected> <SchoolStudentResultsPage /> </Protected>)} />
            <Route  path="/school/result-types" element={(<Protected> <SchoolResultTypesPage /> </Protected>)} />

        </Routes>
      </BrowserRouter>
      </AcademicYearContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;

