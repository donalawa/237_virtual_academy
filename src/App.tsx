import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import { HomePage, LoginPage, SignupPage, DashboardLanding, CourseContentPage, CalassroomsPage, AssignmentPage, AssessmentPage, AssessmentSubmissionsPage, PassExamsPage } from './pages';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from './components/form/Protected';


function App() {

  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={(<HomePage />)} />
            <Route path="/login" element={(<LoginPage />)} />
            <Route path="/register" element={(<SignupPage />)} />
            <Route path="/dashboard" element={(<Protected > <DashboardLanding  /> </Protected>)} />
            <Route path="/class-rooms" element={(<Protected > <CalassroomsPage  /> </Protected>)} />
            <Route path="/course-contents" element={(<Protected > <CourseContentPage  /> </Protected>)} />
            <Route path="/assignments" element={(<Protected > <AssignmentPage  /> </Protected>)} />
            <Route path="/assessments" element={(<Protected > <AssessmentPage  /> </Protected>)} />
            <Route path="/assessment-submissions" element={(<Protected > <AssessmentSubmissionsPage  /> </Protected>)} />
            <Route path="/pass-exams" element={(<Protected > <PassExamsPage  /> </Protected>)} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

