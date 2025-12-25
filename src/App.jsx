import { useState } from 'react';
import LandingPage from './components/LandingPage';
import PRDGenerator from './components/PRDGenerator';
import PRDDisplay from './components/PRDDisplay';
import { GeminiService } from './services/geminiService';
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
      const service = new GeminiService(apiKey);
      const prd = await service.generatePRD(productVision, targetAudience);
      setPrdContent(prd);
      setStage('display');
    } catch (error) {
      console.error('Full error:', error);
      let errorMessage = 'Error generating PRD: ' + error.message;
      
      if (error.message.includes('404') || error.message.includes('not found')) {
        errorMessage += '\n\nThe API key may be invalid or the model is not available. Please:\n1. Get a new API key from https://makersuite.google.com/app/apikey\n2. Make sure the API key has Gemini API access enabled\n3. Try again with your new API key';
      }
      
      alert(errorMessage);
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
