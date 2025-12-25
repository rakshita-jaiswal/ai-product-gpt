# AIProductGPT - Setup Guide

This guide will help you create the AIProductGPT application in your `rakshita-jaiswal/ai-product-gpt` repository.

## Quick Start

### 1. Create the Repository
```bash
# On GitHub, create a new repository: ai-product-gpt
# Then clone it locally:
git clone https://github.com/rakshita-jaiswal/ai-product-gpt.git
cd ai-product-gpt
```

### 2. Initialize React + Vite Project
```bash
npm create vite@latest . -- --template react
npm install
```

### 3. Install Dependencies
```bash
npm install openai react-markdown tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Configure Tailwind CSS

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Project Structure
```
ai-product-gpt/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── PRDGenerator.jsx
│   │   └── PRDDisplay.jsx
│   ├── services/
│   │   └── openaiService.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Core Files

### src/services/openaiService.js
```javascript
import OpenAI from 'openai';

export class OpenAIService {
  constructor(apiKey) {
    this.client = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true // Note: In production, use a backend
    });
  }

  async generatePRD(productVision, targetAudience) {
    const prompt = `You are an expert Product Manager. Create a comprehensive Product Requirements Document (PRD) based on the following:

Product Vision: ${productVision}
Target Audience: ${targetAudience}

Generate a detailed PRD with the following sections:
1. Executive Summary
2. Problem Statement
3. Proposed Solution
4. User Stories (at least 5)
5. Technical Requirements
6. Success Metrics & KPIs
7. Implementation Roadmap
8. Risks & Mitigation

Format the output in clean Markdown with proper headings and bullet points.`;

    const response = await this.client.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert Product Manager who creates detailed, actionable PRDs."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 3000
    });

    return response.choices[0].message.content;
  }
}
```

### src/components/LandingPage.jsx
```javascript
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
```

### src/components/PRDGenerator.jsx
```javascript
import React, { useState } from 'react';

export default function PRDGenerator({ onGenerate, isLoading }) {
  const [productVision, setProductVision] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(productVision, targetAudience, apiKey);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Generate Your PRD
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              OpenAI API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="sk-..."
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Your API key is only used for this session and never stored
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
            {isLoading ? 'Generating PRD...' : 'Generate PRD'}
          </button>
        </form>
      </div>
    </div>
  );
}
```

### src/components/PRDDisplay.jsx
```javascript
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
```

### src/App.jsx
```javascript
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import PRDGenerator from './components/PRDGenerator';
import PRDDisplay from './components/PRDDisplay';
import { OpenAIService } from './services/openaiService';
import './App.css';

function App() {
  const [stage, setStage] = useState('landing'); // landing, generate, display
  const [prdContent, setPrdContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setStage('generate');
  };

  const handleGenerate = async (productVision, targetAudience, apiKey) => {
    setIsLoading(true);
    try {
      const service = new OpenAIService(apiKey);
      const prd = await service.generatePRD(productVision, targetAudience);
      setPrdContent(prd);
      setStage('display');
    } catch (error) {
      alert('Error generating PRD: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartOver = () => {
    setStage('landing');
    setPrdContent('');
  };

  return (
    <>
      {stage === 'landing' && <LandingPage onGetStarted={handleGetStarted} />}
      {stage === 'generate' && (
        <PRDGenerator onGenerate={handleGenerate} isLoading={isLoading} />
      )}
      {stage === 'display' && (
        <PRDDisplay prdContent={prdContent} onStartOver={handleStartOver} />
      )}
    </>
  );
}

export default App;
```

## Deployment

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
{
  "homepage": "https://rakshita-jaiswal.github.io/ai-product-gpt",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Update vite.config.js:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/ai-product-gpt/'
})
```

Deploy:
```bash
npm run deploy
```

## Security Note
⚠️ The current implementation uses client-side API calls. For production:
1. Create a backend API to handle OpenAI calls
2. Never expose API keys in frontend code
3. Implement rate limiting and authentication

## Next Steps
1. Create the repository on GitHub
2. Copy these files into your project
3. Test locally with `npm run dev`
4. Deploy to GitHub Pages
5. Update your portfolio link to the deployed URL