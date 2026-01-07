import React from 'react'

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Sprint90 Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Admin Panel</span>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <a href="/admin" className="bg-blue-900 text-white px-3 py-4 text-sm font-medium">
              Dashboard
            </a>
            <a href="/admin/questions" className="text-blue-100 hover:bg-blue-700 px-3 py-4 text-sm font-medium">
              Questions
            </a>
            <a href="/admin/analytics" className="text-blue-100 hover:bg-blue-700 px-3 py-4 text-sm font-medium">
              Analytics
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Total Users */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👥</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Users
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">2,847</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Students */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🎯</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Students
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">1,923</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Concepts */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📚</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Concepts
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">1,247</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions Created */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">❓</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Questions Created
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">8,432</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-sm">
                  Add User
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded text-sm">
                  Create Concept
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded text-sm">
                  Add Question
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded text-sm">
                  View Reports
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">New user registered: john.doe@email.com</span>
                  </div>
                  <span className="text-gray-400">2 min ago</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Concept "Integration by Parts" created</span>
                  </div>
                  <span className="text-gray-400">15 min ago</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">25 questions updated in Physics</span>
                  </div>
                  <span className="text-gray-400">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Weekly analytics report generated</span>
                  </div>
                  <span className="text-gray-400">3 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard