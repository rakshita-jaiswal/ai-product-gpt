import { GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiService {
  constructor(apiKey) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
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

    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}