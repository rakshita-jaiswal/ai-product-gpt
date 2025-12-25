import React, { useState } from 'react';

export default function PRDGenerator({ onGenerate, isLoading }) {
  const [productVision, setProductVision] = useState('');
  const [targetAudience, setTargetAudience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(productVision, targetAudience);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Generate Your PRD
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>How it works:</strong> Enter your product details below and click "Generate PRD". 
              This will open our custom ChatGPT assistant in a new tab with your information pre-filled.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Vision
            </label>
            <textarea
              value={productVision}
              onChange={(e) => setProductVision(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
              placeholder="Describe your product vision..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Audience
            </label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Who is this product for?"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Opening ChatGPT...' : 'Generate PRD with ChatGPT →'}
          </button>
        </form>
      </div>
    </div>
  );
}