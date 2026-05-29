# TMO AI Agent 🤖

**TMO AI Agent** (Task Management & Orchestration) is a production-ready AI agentic system built with modern 2026 best practices. It features multi-agent orchestration, intelligent task planning, tool integration, and real-time streaming.

## 🌟 Features

- **Multi-Agent Orchestration** - Orchestrator, Planner, Executor, Reviewer, Researcher, and Analyst agents working together
- **Intelligent Task Planning** - Automatically breaks down complex tasks into manageable steps
- **Tool Integration** - Web search, calculations, code execution, and memory storage
- **Dual Model Support** - GPT-4o and Claude 3 Opus with intelligent routing
- **Real-time Streaming** - Live updates as the agent thinks and executes
- **Quality Review** - Built-in validation and scoring of results
- **Modern UI** - Beautiful, responsive interface with dark mode support

## 🏗️ Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Next.js 14    │────▶│   LangGraph      │────▶│   LLM APIs      │
│   (Frontend)    │     │   (Orchestration)│     │   (GPT-4/Claude)│
└─────────────────┘     └──────────────────┘     └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐     ┌──────────────────┐
│   Vercel AI SDK │     │   Tools          │
│   (Streaming)   │     │   (Search/Calc)  │
└─────────────────┘     └──────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- OpenAI API key (or Anthropic)
- npm or yarn

### Installation

1. **Clone and install:**
```bash
cd tmo-ai-agent
npm install
```

2. **Configure environment:**
```bash
cp .env.example .env.local
# Edit .env.local with your API keys
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables in dashboard
4. Deploy!

```bash
# Using Vercel CLI
vercel --prod
```

### Other Platforms

- **Railway**: `railway up`
- **Render**: Connect GitHub repo
- **AWS**: Use Docker container
- **Docker**:
```bash
docker build -t tmo-ai-agent .
docker run -p 3000:3000 --env-file .env.local tmo-ai-agent
```

## 🔧 Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes* | OpenAI API key for GPT-4o |
| `ANTHROPIC_API_KEY` | Yes* | Anthropic key for Claude 3 |
| `TAVILY_API_KEY` | No | Web search capability |
| `REDIS_URL` | No | Persistent memory storage |

*At least one LLM provider required

### Task Types

- `general` - General purpose tasks
- `research` - Information gathering and synthesis
- `analysis` - Data processing and insights
- `coding` - Code generation and execution
- `planning` - Strategic planning and roadmapping

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI SDK**: Vercel AI SDK
- **Agent Framework**: LangGraph
- **Models**: GPT-4o, Claude 3 Opus
- **Deployment**: Optimized for Vercel Edge Runtime

## 📡 API Usage

### Execute Task
```bash
curl -X POST https://your-domain.com/api/agent \
  -H "Content-Type: application/json" \
  -d '{
    "task": "Research latest AI frameworks",
    "taskType": "research",
    "stream": false
  }'
```

### Health Check
```bash
curl https://your-domain.com/api/health
```

## 🔒 Security

- API keys stored in environment variables
- Input validation and sanitization
- Rate limiting ready (add middleware)
- No client-side API key exposure

## 📈 Roadmap

- [ ] Persistent memory with vector database
- [ ] Multi-user support with auth
- [ ] Custom tool builder
- [ ] Agent marketplace
- [ ] Mobile app
- [ ] Voice interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Acknowledgments

- LangChain/LangGraph team for the agent framework
- Vercel for the AI SDK and deployment platform
- OpenAI and Anthropic for the LLM APIs

---

**Built with ❤️ for the AI agent community**

*Note: This is a demonstration implementation. For production use, add proper authentication, rate limiting, and monitoring.*
