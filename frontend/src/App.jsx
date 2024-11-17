import { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/registerPage/RegisterPage';
import LoginPage from './components/loginPage/LoginPage';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import VideoListViewPage from './components/videoListPage/VideoListViewPage';
import VideoListCardViewPage from './components/videoListPage/VideoListCardViewPage';
import HomePage from './components/homePage/HomePage';
import EmptyPage from './components/MyChannel/EmptyPage';
import UploadingModelPopup from './components/MyChannel/uploads/UploadingModelPopup';
import UploadingVideomodelScrollPopup from './components/MyChannel/uploads/UploadingVideomodelScrollPopup';
import UploadingSuccessModelPopup from './components/MyChannel/uploads/UploadingSuccessModelPopup';

              // Router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layouts />,
//     children: [
//       {
//         path: "",
//         element: <HomePage />,
//       },
//       {
//         path: "/register",
//         element: <RegisterPage />,
//       },
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//       {
//         path: "/forgot-password",
//         element: <ForgotPassword />,
//       },
//       {
//         path: "/home",
//         element: <VideoListCardViewPage />,
//       },
//       {
//         path: "/home/history",
//         element: <VideoListViewPage />,
//       },
//       {
//         path: "/home/channel",
//         element: <EmptyPage />,
//       },
//       {
//         path: "/home/channel/upload",
//         element: <UploadingModelPopup />,
//         children: {
//           path: "/home/channel/upload/uploading",
//           element: <UploadingVideomodelScrollPopup />,
//         },
//       },
//         {
//         path: "/home/channel/upload/success",
//         element: <UploadingSuccessModelPopup />,
//       }
//     ]
//   }
  
// ])
function App() {

  const [data, setDate] = useState([]);

  // useEffect(() => {
  //   async  function fetchData() {
  //     const response = await fe('http://localhost:8000/api/v1/users')
  //   }
  // })
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/home' element={<VideoListCardViewPage />} />
      <Route path='/home/history' element={<VideoListViewPage />} />
      <Route path='/home/channel' element={<EmptyPage />} />
      <Route path='/home/channel/upload' element={<UploadingModelPopup />} />
      <Route path='/home/channel/upload/uploading' element={<UploadingVideomodelScrollPopup />} />
      <Route path='/home/channel/upload/success' element={<UploadingSuccessModelPopup />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App


