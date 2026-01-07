import React from 'react'

const OnboardingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Sprint90
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Your personalized AI-driven exam preparation platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">
                AI-powered recommendations tailored to your learning style and progress
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-green-600 text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600">
                Complete JEE and CBSE syllabus with interactive concepts and practice
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-purple-600 text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Detailed analytics and insights to optimize your study strategy
              </p>
            </div>
          </div>
          
          <div className="space-x-4">
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block"
            >
              Get Started
            </a>
            <a
              href="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg inline-block"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage