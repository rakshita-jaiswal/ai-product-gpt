import { useState } from 'react';
import LandingPage from './components/LandingPage';
import PRDGenerator from './components/PRDGenerator';
import './App.css';

function App() {
  const [stage, setStage] = useState('landing');
  const customGPTUrl = 'https://chatgpt.com/g/g-694d6e96f49c8191bfbaa43f80eeb041-prd-ai';

  const handleGetStarted = () => {
    setStage('generate');
  };

  const handleGenerate = (productVision, targetAudience) => {
    // Construct the URL with the user's input as a query
    const prompt = `Create a comprehensive PRD for:\n\nProduct Vision: ${productVision}\nTarget Audience: ${targetAudience}`;
    const encodedPrompt = encodeURIComponent(prompt);
    
    // Open the custom GPT with the prompt
    window.open(`${customGPTUrl}?q=${encodedPrompt}`, '_blank');
  };

  return (
    <>
      {stage === 'landing' && <LandingPage onGetStarted={handleGetStarted} />}
      {stage === 'generate' && (
        <PRDGenerator onGenerate={handleGenerate} isLoading={false} />
      )}
    </>
  );
}

export default App;
