import React from 'react';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AIProductGPT
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Create your AI-Powered PRD
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          With simple prompts, AIProductGPT instantly crafts detailed AI-powered 
          Product Requirements Documents (PRD) and mocks so that your team can 
          hit the ground running.
        </p>
        <button
          onClick={onGetStarted}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}