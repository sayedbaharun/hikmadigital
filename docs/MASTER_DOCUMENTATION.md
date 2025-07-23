# Hikma Digital Platform - Master Documentation

## Project Overview

**Hikma Digital** is the world's first UAE Charter-certified, human-AI collaborative business coaching platform serving Dubai's SMEs with measurable transformation.

### Live URLs
- **Production**: https://hikma-digital-61421343b-sayedbaharunprojects.vercel.app
- **Repository**: Hikma Digital/Website/Hikma Digital

### Key Features
- 🤖 AI-powered business coaching with human collaboration
- 🇦🇪 UAE Charter certified platform
- 📊 Real-time business transformation metrics
- 🌐 Bilingual support (Arabic/English with RTL)
- 💼 Industry-specific solutions for Dubai SMEs

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Context API
- **Routing**: React Router v6
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend & Infrastructure
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: OpenAI API
- **Deployment**: Vercel
- **Analytics**: Google Analytics (G-DL2WF0RSS0)

## Design System

### Colors
```css
/* Primary Colors */
--primary: #1F25BF (Dubai Blue)
--primary-50 to 950: Blue scale

/* Accent Colors */
--accent: #E9C46A (Dubai Gold)
--accent-50 to 950: Gold scale

/* UAE Colors */
--uae-red: #ef4444
--uae-green: #22c55e
--uae-black: #000000

/* Neutral Colors */
--neutral: Gray scale (50-950)
```

### Typography
- **Font Families**: 
  - English: Inter (300-700)
  - Arabic: Noto Sans Arabic (300-700)
- **Scale**: 
  - h1: text-3xl
  - h2: text-2xl
  - h3: text-xl
  - body: text-base
  - small: text-sm

### Components
- Glass morphism cards with white/80 background
- Primary buttons with gradient backgrounds
- Consistent spacing and rounded corners
- RTL support for all components

## Project Structure

```
src/
├── pages/              # Route components (20 pages)
│   ├── Homepage.tsx
│   ├── Demo.tsx
│   ├── AIAgents.tsx
│   ├── Pricing.tsx
│   ├── Assessment.tsx
│   ├── Team.tsx
│   ├── Charter.tsx
│   ├── Transform.tsx
│   ├── Solutions.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── DatabasePage.tsx
│   ├── LeadDashboard.tsx
│   ├── Licensing.tsx
│   ├── Partnerships.tsx
│   ├── Legal.tsx
│   ├── TermsAndConditions.tsx
│   ├── PrivacyPolicy.tsx
│   ├── SuccessStoriesPage.tsx
│   └── HumanCoaches.tsx
├── components/         # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactFormModal.tsx
│   ├── CookieConsent.tsx
│   ├── AIChat.tsx
│   ├── VoiceRecorder.tsx
│   ├── LanguageToggle.tsx
│   ├── TestimonialSlider.tsx
│   ├── SolutionCards.tsx
│   ├── ClientLogos.tsx
│   ├── FullViewportHero.tsx
│   ├── MobileApp.tsx
│   ├── AgentMarketplace.tsx
│   ├── ROICalculator.tsx
│   ├── AdvancedCalculator.tsx
│   ├── MetricsSection.tsx
│   ├── TransformationSection.tsx
│   └── ui/            # Base UI components
├── contexts/          # React contexts
│   └── LanguageContext.tsx
├── hooks/             # Custom hooks
│   ├── useContent.ts
│   └── useContactForm.ts
├── lib/               # External integrations
│   ├── openai.ts
│   ├── supabase.ts
│   └── utils.ts
├── content/           # Content management
│   ├── types.ts
│   └── pages/        # Page-specific content
└── styles/
    └── globals.css    # Global styles

Key Files:
- App.tsx            # Main app with routing
- main.tsx           # Entry point
- index.css          # Tailwind imports
- vite.config.ts     # Build configuration
- vercel.json        # Deployment config
- CLAUDE.md          # AI assistant instructions
```

## Database Schema

### Core Tables
- **companies**: Company profiles
- **users**: User accounts with role-based access
- **ai_agents**: AI agent configurations

### Relationships
- **company_users**: Many-to-many user-company relationships
- **conversations**: Chat/conversation tracking
- **messages**: Individual messages

### Business Tables
- **business_transformations**: Transformation tracking
- **revenue_tracking**: Financial metrics
- **uae_charter_compliance**: Compliance tracking
- **human_ai_collaborations**: Collaboration metrics

### Marketing Tables
- **leads**: Lead generation and tracking
- **assessments**: AI readiness assessments

## Key Features Implementation

### 1. AI Chat System
- OpenAI GPT-4 integration
- Bilingual support (Arabic/English)
- Context-aware responses
- Industry-specific knowledge

### 2. Assessment Tool
- Multi-step form with progress tracking
- AI readiness scoring algorithm
- Personalized recommendations
- Lead capture integration

### 3. ROI Calculators
- Basic ROI calculator
- Advanced business transformation calculator
- Real-time calculations
- Visual metric displays

### 4. Multi-language Support
- React Context for language state
- RTL layout support
- Content type system for translations
- Persistent language preference

### 5. Lead Management
- Dashboard for viewing leads
- Filtering and sorting
- Export functionality
- Follow-up tracking

## Performance Optimizations

### Current Implementation
1. **Code Splitting**: All routes lazy loaded
2. **Bundle Optimization**: 
   - Vendor chunk: 161KB
   - UI chunk: 821KB  
   - Page chunks: 3-38KB each
3. **Resource Hints**:
   - Preconnect to fonts/analytics
   - Font preloading
   - DNS prefetch

### Performance Metrics
- FCP: ~0.8s
- LCP: ~1.8s
- TTI: ~2.2s
- TBT: ~200ms

## Content Management

### Content Structure
```typescript
interface PageContent {
  hero: HeroContent;
  features?: FeatureContent[];
  solutions?: SolutionContent;
  testimonials?: TestimonialContent[];
  cta?: CTAContent;
  // ... other sections
}
```

### Translation Pattern
```typescript
{
  en: "English content",
  ar: "محتوى عربي"
}
```

## Deployment & CI/CD

### Vercel Configuration
- Auto-deploy on push
- Production URL: https://hikma-digital.vercel.app
- Build command: `npm run build`
- Output directory: `dist`

### Environment Variables
- `VITE_OPENAI_API_KEY`: OpenAI API key
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key

## Security & Compliance

### UAE Charter Compliance
- All 12 principles implemented
- Continuous monitoring
- Transparency reporting
- Annual reviews

### Data Protection
- Local data residency
- GDPR compliance
- Secure API endpoints
- Role-based access control

## Scripts & Commands

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Deployment
vercel --prod        # Deploy to production
```

## Browser Support
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Known Issues & Limitations
1. Framer Motion bundle size (821KB) - consider optimization
2. No offline support - could add service worker
3. Images not optimized - consider WebP conversion

## Future Enhancements
1. Progressive Web App (PWA) support
2. Service worker for offline functionality
3. Image optimization pipeline
4. A/B testing framework
5. Enhanced analytics integration

## Support & Contact
- Technical issues: Report at project repository
- Business inquiries: info@hikmadigital.com
- Legal: legal@hikmadigital.com

---
*Last Updated: January 2025*
*Version: 1.0.0*