# AIProductGPT 🚀

An AI-powered Product Requirements Document (PRD) generator that helps product teams create comprehensive PRDs instantly using Google's Gemini AI.

## 🌟 Features

- **AI-Powered Generation**: Leverages Google's Gemini AI to create detailed PRDs
- **Simple Interface**: Clean, intuitive UI built with React and Tailwind CSS
- **Instant Results**: Generate comprehensive PRDs in seconds
- **Export Options**: Copy to clipboard or download as Markdown
- **Free to Use**: Uses Google's free Gemini API

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Markdown**: react-markdown for rendering

## 📋 What's Included in Generated PRDs

Each generated PRD includes:
1. Executive Summary
2. Problem Statement
3. Proposed Solution
4. User Stories (5+)
5. Technical Requirements
6. Success Metrics & KPIs
7. Implementation Roadmap
8. Risks & Mitigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key (free at [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rakshita-jaiswal/ai-product-gpt.git
cd ai-product-gpt
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

1. Click "Get Started" on the landing page
2. Enter your Gemini API key (or use the pre-filled one)
3. Describe your product vision
4. Specify your target audience
5. Click "Generate PRD"
6. Review, copy, or download your PRD

## 📦 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

Your app will be available at: `https://rakshita-jaiswal.github.io/ai-product-gpt`

## 🔒 Security Note

⚠️ **Important**: The current implementation uses client-side API calls for simplicity. For production use:
- Create a backend API to handle Gemini calls
- Never expose API keys in frontend code
- Implement rate limiting and authentication
- Use environment variables for sensitive data

## 📁 Project Structure

```
ai-product-gpt/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── PRDGenerator.jsx
│   │   └── PRDDisplay.jsx
│   ├── services/
│   │   └── geminiService.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rakshita Jaiswal**
- GitHub: [@rakshita-jaiswal](https://github.com/rakshita-jaiswal)

## 🙏 Acknowledgments

- Google Gemini AI for the powerful language model
- React and Vite teams for the excellent development tools
- Tailwind CSS for the utility-first CSS framework

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Made with ❤️ by Rakshita Jaiswal
