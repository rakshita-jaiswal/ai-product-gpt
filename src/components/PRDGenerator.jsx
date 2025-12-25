import React, { useState, useEffect } from 'react';

export default function PRDGenerator({ onGenerate, isLoading }) {
  const [productVision, setProductVision] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [showOptional, setShowOptional] = useState(false);
  const [problemStatement, setProblemStatement] = useState('');
  const [keyGoals, setKeyGoals] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullVision = `${productVision}${problemStatement ? `\n\nProblem Statement: ${problemStatement}` : ''}${keyGoals ? `\n\nKey Goals: ${keyGoals}` : ''}`;
    onGenerate(fullVision, targetAudience);
  };

  const charCount = productVision.length;
  const maxChars = 500;

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-dark-secondary to-bg-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 min-h-screen p-4 md:p-8 flex items-center justify-center">
        <div className={`w-full max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
              Generate Your PRD
            </h2>
            <p className="text-text-secondary text-lg">
              Fill in the details below and we'll create a comprehensive PRD for you
            </p>
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-primary/10 border-l-4 border-primary rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-white font-medium mb-1">How it works</p>
                <p className="text-text-secondary text-sm">
                  Enter your product details below and click "Generate PRD". This will open our custom ChatGPT assistant in a new tab with your information pre-filled.
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="bg-bg-dark-secondary/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10">
            <div className="space-y-6">
              {/* Product Vision Field */}
              <div className="relative">
                <label className="block text-white font-medium mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Product Vision
                </label>
                <textarea
                  value={productVision}
                  onChange={(e) => setProductVision(e.target.value)}
                  onFocus={() => setFocusedField('vision')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-bg-dark/50 border-2 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'vision' 
                      ? 'border-primary shadow-lg shadow-primary/20 scale-[1.01]' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                  placeholder="Describe your product vision in detail..."
                  rows="5"
                  required
                  maxLength={maxChars}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-text-secondary text-sm">Be specific about what you want to build</span>
                  <span className={`text-sm ${charCount > maxChars * 0.9 ? 'text-accent' : 'text-text-secondary'}`}>
                    {charCount}/{maxChars}
                  </span>
                </div>
              </div>

              {/* Target Audience Field */}
              <div className="relative">
                <label className="block text-white font-medium mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Target Audience
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  onFocus={() => setFocusedField('audience')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-bg-dark/50 border-2 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none transition-all duration-300 ${
                    focusedField === 'audience' 
                      ? 'border-secondary shadow-lg shadow-secondary/20 scale-[1.01]' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                  placeholder="e.g., Product managers, developers, startups..."
                  required
                />
              </div>

              {/* Optional Fields Toggle */}
              <button
                type="button"
                onClick={() => setShowOptional(!showOptional)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                <svg className={`w-5 h-5 transition-transform duration-300 ${showOptional ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {showOptional ? 'Hide' : 'Add'} more details (optional)
              </button>

              {/* Optional Fields */}
              {showOptional && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="relative">
                    <label className="block text-white font-medium mb-2">Problem Statement</label>
                    <textarea
                      value={problemStatement}
                      onChange={(e) => setProblemStatement(e.target.value)}
                      className="w-full px-4 py-3 bg-bg-dark/50 border-2 border-white/10 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all duration-300 resize-none"
                      placeholder="What problem does this solve?"
                      rows="3"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-white font-medium mb-2">Key Goals</label>
                    <textarea
                      value={keyGoals}
                      onChange={(e) => setKeyGoals(e.target.value)}
                      className="w-full px-4 py-3 bg-bg-dark/50 border-2 border-white/10 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all duration-300 resize-none"
                      placeholder="What are the main objectives?"
                      rows="3"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold rounded-xl shadow-lg shadow-primary/50 hover:shadow-2xl hover:shadow-primary/60 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 overflow-hidden"
              >
                {isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Opening ChatGPT...
                    </>
                  ) : (
                    <>
                      Generate PRD with ChatGPT
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-text-secondary text-sm">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Powered by GPT-4 • No API keys required</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}