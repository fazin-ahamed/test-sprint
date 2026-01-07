import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import AdminQuestions from './pages/AdminQuestions'
import AdminAnalytics from './pages/AdminAnalytics'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/questions" element={<AdminQuestions />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App