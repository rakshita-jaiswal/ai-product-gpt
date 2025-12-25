import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function PRDDisplay({ prdContent, onStartOver }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prdContent);
    alert('PRD copied to clipboard!');
  };

  const downloadMarkdown = () => {
    const blob = new Blob([prdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-requirements-document.md';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Your AI-Generated PRD
          </h2>
          <button
            onClick={onStartOver}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Start Over
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="prose prose-indigo max-w-none">
            <ReactMarkdown>{prdContent}</ReactMarkdown>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={copyToClipboard}
            className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            📋 Copy to Clipboard
          </button>
          <button
            onClick={downloadMarkdown}
            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            ⬇️ Download Markdown
          </button>
        </div>
      </div>
    </div>
  );
}