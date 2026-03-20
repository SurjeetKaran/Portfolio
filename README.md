# 🚀 Surjeet Karan — Developer Portfolio + AI Chatbot

A modern developer portfolio built with **React**, **TypeScript**, and **Vite**, featuring beautiful animations, responsive layouts, and **AI-powered chatbot**. The chatbot uses **Groq LLaMA 3.3 70B** for intelligent responses about skills, projects, and services.

---

### 🌐 Live Site

📱 **Portfolio:** https://surjeetkarans-portfolio.vercel.app  
🤖 **AI Backend:** https://portfolio-ai-backend-dqw5.onrender.com (⚠️ Temporarily Down)

---

### ⚠️ Maintenance Notice

The AI chatbot feature is **temporarily disabled** for backend maintenance. The n8n workflow will be restored once the server is back online. All portfolio sections (Hero, About, Skills, Projects, Services, Contact) are fully functional.

---

### ✨ Key Features

* ⚠️ **AI Chatbot** - Currently under maintenance (temporarily disabled)
* ✅ **Animated Sections** - Glassmorphic UI with Framer Motion
* ✅ **Responsive Design** - Mobile-first, works on all devices
* ✅ **Dark Theme** - Professional dark mode throughout
* ✅ **Production Ready** - Full error handling & security

---

### 🛠️ Tech Stack

**Frontend:**
* ⚛️ **React** 18 (with TypeScript)
* ⚡ **Vite** for fast HMR & bundling
* 🎨 **Tailwind CSS** for styling
* 🎞️ **Framer Motion** for smooth animations
* 🌐 **Lucide Icons** for iconography
* 🔧 **ESLint** for code quality

**Backend:**
* 🔗 **n8n** - Workflow automation (Docker on Render)
* 🤖 **Groq API** - LLaMA 3.3 70B AI model
* 📡 **Webhooks** - Real-time request processing

**Deployment:**
* 🌍 **Vercel** - Frontend (CDN + serverless)
* 🐳 **Render** - Backend n8n (containerized)
* 📦 **PostgreSQL** - n8n database

---

### 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── ChatBot.tsx          # 🤖 AI Chatbot UI
│   │   ├── Hero.tsx             # Landing section
│   │   ├── About.tsx            # About section
│   │   ├── Skills.tsx           # Skills showcase
│   │   ├── Projects.tsx         # Portfolio projects
│   │   ├── Services.tsx         # Services offered
│   │   ├── Contact.tsx          # Contact section
│   │   └── [Other components]
│   ├── App.tsx                  # Main app
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── public/                       # Static assets
├── .env.local                    # Dev environment (Render backend)
├── .env.production               # Prod environment (Render backend)
├── n8n-workflow.json             # 🔗 n8n workflow (Groq integration)
├── Dockerfile                    # n8n Docker config
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

### 🤖 AI Chatbot Architecture

```
User Chat Input (Vercel)
    ↓
POST /webhook/chat (to Render)
    ↓
n8n Webhook + Edit Fields (inject portfolio context)
    ↓
Groq API: llama-3.3-70b-versatile
    ↓
Extract & Return JSON Response
    ↓
Display in Chat Bubble ✨
```

**Key Features:**
- ✅ Real AI responses (not hardcoded)
- ✅ Context-aware answers about skills/projects
- ✅ Timeout protection (30 seconds)
- ✅ Error handling with user messages
- ✅ Loading animation while waiting
- ✅ Mobile responsive

---

### 📱 Getting Started

#### Local Development

```bash
# Clone repository
git clone https://github.com/SurjeetKaran/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs on: http://localhost:5173

#### AI Chatbot (Currently Disabled)

The AI chatbot feature is temporarily disabled while n8n server undergoes maintenance. Once restored, the chatbot will be available on the live portfolio at https://surjeetkarans-portfolio.vercel.app

**Get Groq API Key:** https://console.groq.com (for future setup)

---

### ✅ Features

* 🤖 **AI Chatbot** - Real-time responses via Groq
* ✨ **Animated Sections** - Smooth transitions & effects
* 🎨 **Glassmorphic Design** - Modern dark theme
* 📱 **Fully Responsive** - Works on all devices
* ⚡ **Fast Performance** - Vite + CDN optimized
* 🔐 **Secure** - API keys protected, error handling
* ♿ **Accessible** - ARIA labels & keyboard navigation

---

### 🚀 Build & Deployment

#### Build for Production

```bash
# Build frontend
npm run build

# Output in dist/ folder
```

#### Frontend (Vercel)

1. Connect GitHub repo to Vercel
2. Set environment variable in Vercel dashboard:
   ```
   VITE_N8N_WEBHOOK_URL=https://portfolio-ai-backend-dqw5.onrender.com/webhook/chat
   ```
3. Deploy - Vercel auto-deploys on push

**Live:** https://surjeetkarans-portfolio.vercel.app

#### Backend (n8n on Render)

1. Deploy n8n Docker image to Render
2. Add environment variables:
   ```
   N8N_HOST=0.0.0.0
   N8N_PORT=5678
   N8N_PROTOCOL=https
   GROQ_API_KEY=<your_groq_api_key>
   N8N_ENCRYPTION_KEY=<random_32_char_key>
   WEBHOOK_URL=https://portfolio-ai-backend-dqw5.onrender.com
   ```
3. Connect PostgreSQL database
4. Import `n8n-workflow.json` workflow
5. Activate workflow

**Backend:** https://portfolio-ai-backend-dqw5.onrender.com

---

### 🔑 Environment Variables

**Frontend (.env.local for dev, .env.production for prod):**
```env
# Point to your n8n webhook
VITE_N8N_WEBHOOK_URL=https://portfolio-ai-backend-dqw5.onrender.com/webhook/chat
```

**Backend (n8n environment variables on Render):**
- `GROQ_API_KEY` - Get from https://console.groq.com
- `N8N_ENCRYPTION_KEY` - Strong random 32+ character key
- `N8N_HOST` - 0.0.0.0
- `N8N_PORT` - 5678
- `N8N_PROTOCOL` - https
- `DATABASE_URL` - Auto-set by Render PostgreSQL addon

---

---

### 🌐 Alternative Deployment Options

* **Frontend:** Netlify, GitHub Pages, AWS Amplify
* **Backend:** Railway, Fly.io, AWS EC2 (with Docker)
* **Database:** Supabase, Planetscale, AWS RDS

---

### 🧪 Available Scripts

```bash
npm run dev              # Start dev server (localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

---

### 🔧 Tech Details

**Chatbot Integration:**
- Frontend sends POST to `/webhook/chat` endpoint
- n8n workflow processes request with portfolio context
- Groq API generates response using LLaMA 3.3 70B
- Response returned as JSON: `{ "response": "text" }`
- JavaScript parses and displays in chat

**Response Format:**
```json
{
  "response": "AI-generated answer about skills/projects..."
}
```

**Error Handling:**
- Timeout: 30 seconds max
- Network errors: User-friendly message
- Missing env var: Throws error (prevents silent failure)
- API failures: Graceful error display

---

### 📚 Documentation

For detailed setup, troubleshooting, and architecture diagrams, see:
- `PROJECT_DETAILS.md` - Complete project overview
- `N8N_SETUP_GUIDE.md` - n8n deployment guide
- `DEPLOYMENT_CHECKLIST.md` - Step-by-step checklist

---

### 🧹 Code Quality

```bash
npm run lint
```

This project uses ESLint with React & TypeScript best practices

---

### � Chat with Me!

The AI chatbot is available on the live portfolio. Ask it about:
- 🚀 My projects and experience
- 💻 Technologies and skills
- 📧 How to contact me
- 🎯 Services I offer

---

### 📧 Direct Contact

* 📬 **Email:** [surjeetkaran777@gmail.com](mailto:surjeetkaran777@gmail.com)
* 💼 **LinkedIn:** [/in/surjeet-karan](https://www.linkedin.com/in/surjeet-karan)
* 💻 **GitHub:** [@SurjeetKaran](https://github.com/SurjeetKaran)

---

### 📝 License

This project is open for learning and inspiration.  
Please **do not plagiarize** the design or personal content.

Code is licensed under the [MIT License](./LICENSE).



