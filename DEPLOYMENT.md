# 🚀 Deployment Guide for TMO AI Agent

## Quick Deploy Options (Choose One)

### Option 1: Vercel (Fastest - 2 minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial TMO AI Agent"
   git remote add origin https://github.com/YOUR_USERNAME/tmo-ai-agent.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Add Environment Variables:
     - `OPENAI_API_KEY` = your OpenAI key
     - `ANTHROPIC_API_KEY` = your Anthropic key (optional)
   - Click Deploy

3. **Done!** Your agent is live at `https://your-project.vercel.app`

---

### Option 2: Railway (Easy Backend + Frontend)

1. **Push to GitHub** (same as above)

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - New Project → Deploy from GitHub repo
   - Add variables in Railway dashboard
   - Railway auto-detects Next.js and deploys

3. **Custom Domain**
   - In Railway dashboard → Settings → Domains
   - Add your custom domain

---

### Option 3: Render (Free Tier Available)

1. **Push to GitHub**

2. **Create Web Service**
   - Go to [render.com](https://render.com)
   - New → Web Service
   - Connect GitHub repo
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Add environment variables

3. **Deploy**
   - Render auto-deploys on git push

---

### Option 4: Docker (Any Cloud Provider)

```bash
# Build image
docker build -t tmo-ai-agent .

# Run locally
docker run -p 3000:3000 --env-file .env.local tmo-ai-agent

# Deploy to AWS/GCP/Azure
# Push to container registry and deploy
```

---

### Option 5: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sites → Add new site → Import from Git
4. Build settings auto-detected for Next.js
5. Add environment variables in Site Settings

---

## 🔑 Getting API Keys

### OpenAI (Required)
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up / Log in
3. API Keys → Create new secret key
4. Copy key to your `.env.local` and deployment platform

### Anthropic (Optional but recommended)
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Get API key for Claude 3 Opus
3. Add to environment variables

---

## 📋 Pre-Deployment Checklist

- [ ] Code pushed to GitHub (public or private)
- [ ] `.env.local` created with API keys (not committed)
- [ ] `package.json` dependencies installed
- [ ] Build succeeds locally: `npm run build`
- [ ] Environment variables configured on hosting platform
- [ ] Custom domain configured (optional)
- [ ] Analytics/monitoring added (optional)

---

## 🌐 Custom Domain Setup

### Vercel
1. Dashboard → Project → Settings → Domains
2. Add domain and follow DNS instructions
3. Auto SSL certificate provided

### Cloudflare (Recommended for extra features)
1. Add site to Cloudflare
2. Update nameservers
3. Add CNAME record pointing to your deployment
4. Enable proxy for CDN + DDoS protection

---

## 🔒 Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Enable HTTPS** - All platforms provide this by default
3. **Add rate limiting** - Use platform features or middleware
4. **Monitor usage** - Set up billing alerts for API costs
5. **Add authentication** - For production use (Clerk, Auth0, etc.)

---

## 📊 Monitoring & Analytics

- **Vercel Analytics**: Built-in, enable in dashboard
- **LogRocket**: Session replay and error tracking
- **Sentry**: Error monitoring
- **LangSmith**: For tracing agent runs (if using LangChain)

---

## 💰 Cost Estimates

| Component | Free Tier | Paid (Moderate Use) |
|-----------|-----------|---------------------|
| Vercel Hosting | 100GB bandwidth | $20/month |
| OpenAI API | $5 credit | $20-100/month |
| Anthropic API | $5 credit | $20-100/month |
| Domain | - | $10-15/year |

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (need 18+)
- Run `npm install` again
- Check for TypeScript errors: `npx tsc --noEmit`

### API Errors
- Verify API keys are set correctly
- Check API key has credits/billing
- Review rate limits

### Runtime Errors
- Check Vercel/Railway logs
- Verify environment variables loaded
- Test API routes directly with curl

---

## 🎉 Success!

Once deployed, share your URL with early adopters:
- Post on Twitter/X, LinkedIn, Product Hunt
- Share in AI/ML communities (Reddit r/LocalLLaMA, Discord)
- Add to AI agent directories
- Create a demo video

**Your TMO AI Agent is now live!** 🚀
