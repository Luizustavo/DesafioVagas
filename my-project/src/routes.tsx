import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import QA from './pages/QA';
import PostJobs from './pages/PostJobs';
import UserManagement from './pages/UserManagement/Index';

function Routes() {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/qa" element={<QA/>} />
                <Route path="/jobs" element={<PostJobs/>} />
                <Route path="/users" element={<UserManagement/>} />
            </ReactRoutes>
            </Router>
    );
}

export default Routes;