import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Interview from "../pages/Interview";
import Result from "../pages/Result";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Overview from "../components/dashboard/Overview";
import Resume from "../pages/Resume";
import Chat from "../pages/Chat";
import History from "../pages/History";
import Layout from "../components/layout/Layout";
import InterviewDetail from "../pages/InterviewDetail";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

        </Route>


        {/* Protected Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="interview" element={<Interview />} />
          <Route path="result" element={<Result />} />
          <Route path="chat" element={<Chat />} />
          <Route path="history" element={<History />} />
          <Route path="resume" element={<Resume />} />
          <Route path="history/:id" element={<InterviewDetail/>}/>
          
        </Route>


        {/* 404 */}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;