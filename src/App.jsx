import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Redirect to the custom GPT immediately
    window.location.href = 'https://chatgpt.com/g/g-694d6e96f49c8191bfbaa43f80eeb041-prd-ai';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-dark-secondary to-bg-dark flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-2xl shadow-primary/50 mx-auto animate-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">PRD.ai</h1>
        <p className="text-text-secondary">Redirecting to PRD AI Assistant...</p>
      </div>
    </div>
  );
}

export default App;
