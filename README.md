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

3. (Optional) Create a `.env` file for your API key:
```bash
cp .env.example .env
# Edit .env and add your Gemini API key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

1. Click "Get Started" on the landing page
2. Enter your Gemini API key (get a free one at [Google AI Studio](https://makersuite.google.com/app/apikey))
3. Describe your product vision
4. Specify your target audience
5. Click "Generate PRD"
6. Review, copy, or download your PRD

### Getting Your API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key
5. Paste it into the application when prompted

**Note**: Your API key is only used in your browser session and is never stored or sent to any server other than Google's Gemini API.

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

## 🔒 Security & Privacy

### Current Implementation
- API keys are entered by users and stored only in browser memory during the session
- No API keys are committed to the repository
- All API calls are made directly from the browser to Google's Gemini API
- No data is stored on any intermediate servers

### For Production Use
⚠️ **Important**: For a production application, consider:
- Creating a backend API to handle Gemini calls
- Implementing user authentication
- Adding rate limiting to prevent abuse
- Using server-side environment variables
- Implementing proper API key management
- Adding usage monitoring and quotas

### Environment Variables (Optional)
You can optionally use environment variables for development:
1. Copy `.env.example` to `.env`
2. Add your API key: `VITE_GEMINI_API_KEY=your_key_here`
3. The `.env` file is already in `.gitignore` and won't be committed

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
