# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Testing
No testing infrastructure is currently set up in this project.

## Architecture Overview

This is the **Hikma Digital Platform** - a web application for transforming SME businesses in Dubai through AI-human collaboration. The platform is UAE Charter-certified and combines AI agents with human coaches.

### Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: OpenAI API
- **State Management**: React Context API
- **Routing**: React Router v6
- **Forms**: React Hook Form
- **Animation**: Framer Motion

### Project Structure

```
src/
├── pages/          # Route-level components (20 files)
│   ├── Business pages (Homepage, Solutions, Transform, etc.)
│   ├── AI/Human features (AIAgents, HumanCoaches, Demo)
│   ├── Admin (LeadDashboard, DatabasePage)
│   └── Legal/Support pages
├── components/     # Reusable components
│   ├── AI features (AIChat, VoiceRecorder)
│   ├── Business tools (calculators)
│   ├── UAE-specific (Charter components)
│   └── ui/        # Base UI components
├── contexts/       # Global state (LanguageContext for i18n)
├── hooks/          # Custom React hooks
└── lib/           # External integrations
    ├── openai.ts   # AI chat functionality
    ├── supabase.ts # Database client
    └── utils.ts    # Utility functions
```

### Database Schema

The Supabase database includes 14 tables:
- **Core**: companies, users, ai_agents
- **Relationships**: company_users, conversations, messages
- **Business**: business_transformations, revenue_tracking
- **Compliance**: uae_charter_compliance
- **Collaboration**: human_ai_collaborations

All tables implement Row-Level Security (RLS) with company-based data isolation.

### Key Architectural Patterns

1. **Multi-language Support**: Arabic/English with RTL layout support via LanguageContext
2. **Feature-based Architecture**: Components organized by business functionality
3. **AI-Human Collaboration**: Unique dual-support model for business coaching
4. **UAE Market Focus**: Tailored for Dubai SMEs with cultural/compliance considerations
5. **Real-time Features**: Leverages Supabase real-time capabilities
6. **Security**: RLS at database level, role-based access (owner/admin/manager/member)

### Development Notes

- The project uses absolute imports configured in tsconfig.json
- Tailwind CSS is configured with custom theme extensions
- No environment variables are committed - ensure `.env` is properly configured
- The platform supports WhatsApp integration for communication
- Business domains covered: restaurant, retail, logistics, consulting, healthcare, real estate