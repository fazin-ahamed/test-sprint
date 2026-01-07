import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Sprint90
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-Driven JEE & CBSE Exam Prep Platform
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a
            href="/onboarding"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage