# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
npm run dev        # Start development server on localhost:3000
npm run build      # Build for production
npm start          # Start production server
```

### Code Quality
```bash
npm run lint       # Run Biome linter (checks code quality)
npm run format     # Format code with Biome
```

**Note:** This project uses **Biome** for linting and formatting, NOT ESLint or Prettier. All code quality commands use Biome.

## Environment Setup

Most features work without any environment variables.

- `GITHUB_TOKEN` - GitHub personal access token (optional, for repo metadata)
## Architecture Overview

### Tech Stack
- **Next.js 16** with App Router
- **TypeScript** with strict mode
- **Tailwind CSS v4** for styling
- **Biome** for linting and formatting
- **React Compiler** enabled in next.config.ts
- **next-themes** for dark/light mode
- **lucide-react** for icons
### Project Structure
```
app/
  api/
    chat/          # Rule-based chatbot API
    contact/       # Contact form submission API
    github/[repo]/ # GitHub repo metadata proxy
  layout.tsx       # Root layout with theme provider
  page.tsx         # Home page
components/        # React components for sections
lib/
  supabase.ts      # Shared TypeScript types (contact messages, chat logs)
data/
  projects.json    # Static project data
```

### Key Architectural Patterns

#### Rule-Based Chatbot System
The chatbot in `app/api/chat/route.ts` is **NOT AI-powered**. It's a rule-based system using keyword matching:
- Profile data (education, skills, achievements, certifications) is hardcoded in `profileData` object
- Projects are imported from `data/projects.json`
- `generateResponse()` function matches keywords and returns canned responses
- Chat logs are currently not persisted to a backend service
**To modify chatbot:**
1. Update `profileData` object for personal information changes
2. Add new keyword conditions in `generateResponse()` function
3. Modify `data/projects.json` for project changes

#### GitHub Integration
`app/api/github/[repo]/route.ts` acts as a proxy to GitHub API:
- Fetches repo metadata (stars, last commit, forks, language)
- Uses optional `GITHUB_TOKEN` for rate limiting
- Caches responses for 1 hour
- Projects component fetches this data client-side for display

#### Data Flow
1. **Projects**: Static JSON → API route imports → Components fetch
2. **Chat**: User message → Rule-based matching → Response rendered in browser (no backend persistence)
3. **Contact**: Form submission → `mailto:` link → User's email application opens with prefilled content
4. **GitHub Stats**: Component → API proxy → GitHub API → Display
#### Component Architecture
- All UI sections are separate components (Hero, About, Projects, Skills, Achievements, Footer)
- `ChatWidget.tsx` is a self-contained floating chat interface
- `ThemeProvider.tsx` wraps app for dark/light mode using next-themes
- Components use `'use client'` directive when needed for interactivity

### Data Types
The following TypeScript interfaces in `lib/supabase.ts` document the expected data shapes:
- `ContactMessage`: name, email, message, created_at
- `ChatLog`: user_message, assistant_response, created_at
### Path Aliases
TypeScript is configured with `@/*` pointing to project root for imports.
