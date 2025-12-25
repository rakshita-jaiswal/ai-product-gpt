export class GeminiService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
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

    try {
      const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid response format from API');
      }

      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw error;
    }
  }
}