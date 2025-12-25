export class ChatGPTService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
    this.gptId = 'g-694d6e96f49c8191bfbaa43f80eeb041'; // Your custom GPT ID
  }

  async generatePRD(productVision, targetAudience) {
    const prompt = `Create a comprehensive Product Requirements Document (PRD) based on the following:

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
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are PRD AI, an expert Product Manager who creates detailed, actionable Product Requirements Documents.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 3000
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from API');
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error('ChatGPT API Error:', error);
      throw error;
    }
  }
}