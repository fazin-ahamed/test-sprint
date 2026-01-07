import React from 'react'

const AdminAnalytics: React.FC = () => {
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
              <span className="text-gray-700">Analytics Dashboard</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <a href="/admin" className="text-blue-100 hover:bg-blue-700 px-3 py-4 text-sm font-medium">
              Dashboard
            </a>
            <a href="/admin/questions" className="text-blue-100 hover:bg-blue-700 px-3 py-4 text-sm font-medium">
              Questions
            </a>
            <a href="/admin/analytics" className="bg-blue-900 text-white px-3 py-4 text-sm font-medium">
              Analytics
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Time Period Selector */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Analytics Period
              </h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">
                  Last 7 Days
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300">
                  Last 30 Days
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300">
                  Last 90 Days
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300">
                  Custom Range
                </button>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📈</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Daily Active Users
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">1,234</dd>
                      <dd className="text-sm text-green-600">+12% from last week</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">⏱️</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Avg. Study Time
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">47 min</dd>
                      <dd className="text-sm text-green-600">+8% from last week</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🎯</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Completion Rate
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">78%</dd>
                      <dd className="text-sm text-red-600">-3% from last week</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📊</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Questions Solved
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">15,432</dd>
                      <dd className="text-sm text-green-600">+23% from last week</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* User Growth Chart */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  User Growth (Last 30 Days)
                </h3>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-500">📈 User Growth Chart Placeholder</p>
                </div>
              </div>
            </div>

            {/* Subject Popularity */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Subject Popularity
                </h3>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-500">📊 Subject Chart Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Performing Concepts */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Top Performing Concepts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Quadratic Equations</span>
                    <span className="text-sm font-medium text-green-600">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Newton's Laws</span>
                    <span className="text-sm font-medium text-green-600">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Organic Chemistry</span>
                    <span className="text-sm font-medium text-yellow-600">76%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cell Division</span>
                    <span className="text-sm font-medium text-yellow-600">73%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Engagement */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  User Engagement
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Daily Active</span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Weekly Active</span>
                    <span className="text-sm font-medium">84%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Monthly Active</span>
                    <span className="text-sm font-medium">93%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Retention Rate</span>
                    <span className="text-sm font-medium text-green-600">87%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Performance */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  System Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">API Response Time</span>
                    <span className="text-sm font-medium text-green-600">142ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Database Queries</span>
                    <span className="text-sm font-medium">1.2K/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Error Rate</span>
                    <span className="text-sm font-medium text-green-600">0.02%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Uptime</span>
                    <span className="text-sm font-medium text-green-600">99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminAnalytics