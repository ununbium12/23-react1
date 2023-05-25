import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js 파일을 화면에 띄우는 링크를 따오는 곳이다.
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library'; // Library.jsx 파일의 화면의 링크
import Clock from './chapter_04/Clock'; // Clock.jsx 파일의 화면의 링크
import CommentList from './chapter_05/CommentList'; // CommentList.jsx 파일의 화면의 링크
import NotificationList from './chapter_06/NotificationList'; // NotificationList.jsx 파일의 화면의 링크
import Accommodate from './chapter_07/Accommodate'; // Accommodate.jsx 파일의 화면의 링크
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <DarkOrLight />
      {/* <ProfileCard /> */}
      {/* <Calculator /> */}
      {/* <SignUp /> */}
      {/* <AttendanceBook /> */}
      {/* <LandingPage /> */}
      {/* <ConfirmButton /> */}
      {/* <Accommodate />
      <NotificationList />
      <CommentList />
      <Clock />
      <Library /> */}
      {/* <App /> */}
    </React.StrictMode>
  );
}, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
