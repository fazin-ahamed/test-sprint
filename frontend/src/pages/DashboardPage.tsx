import React from 'react'

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Sprint90</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome back!</span>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                Profile
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Progress Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📊</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Overall Progress
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">65%</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Streak */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🔥</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Study Streak
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">7 days</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Concepts Completed */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✅</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Concepts Completed
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">42/150</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Recommendations */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Completed "Quadratic Equations" - 95%</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Started "Chemical Bonding" concept</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Practiced 15 questions in Physics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  AI Recommendations
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="text-sm font-medium text-blue-800">
                      Focus on Organic Chemistry
                    </div>
                    <div className="text-xs text-blue-600 mt-1">
                      Based on your recent performance, you're doing great in Physics!
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="text-sm font-medium text-green-800">
                      Review Integrals
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      This topic appears frequently in JEE Advanced
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-sm">
                    Study Concepts
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded text-sm">
                    Practice Questions
                  </button>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded text-sm">
                    View Analytics
                  </button>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded text-sm">
                    Study Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage