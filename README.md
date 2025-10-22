# Movie Closet

A modern, feature-rich movie and TV series discovery application built with Next.js 16, React 19, and TypeScript. Browse, search, and explore detailed information about your favorite movies and TV shows with a beautiful dark-themed interface.

## Features

- **Browse Movies & Series** - Explore curated collections of popular movies and trending TV series
- **Advanced Search** - Real-time search functionality with type filtering (movies/series)
- **Detailed Information** - View comprehensive details including:
  - Plot summaries, cast, and crew
  - IMDb ratings and multiple rating sources
  - Awards, runtime, and release information
  - Genre tags and production details
- **Responsive Design** - Optimized for mobile, tablet, and desktop viewing
- **Server-Side Rendering** - Fast initial page loads with Next.js App Router
- **Beautiful UI** - Dark theme with gradient effects, smooth animations, and interactive hover states

## Tech Stack

**Framework & Language:**
- [Next.js 16.0.0](https://nextjs.org/) - React framework with App Router
- [React 19.2.0](https://react.dev/) - UI library
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Type safety

**Styling & Animation:**
- [Tailwind CSS 3.4.1](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion 12.23.24](https://www.framer.com/motion/) - Animation library
- [Heroicons 2.2.0](https://heroicons.com/) - SVG icon library

**API:**
- [OMDB API](http://www.omdbapi.com/) - Movie and TV show data

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OMDB API key (get yours free at [omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd movie-closet
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
```

You can reference `.env.example` for the required variables.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
movie-closet/
├── app/                   # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── movies/            # Movies section
│   │   └── [movie-id]/    # Dynamic movie detail pages
│   └── series/            # TV series section
│       └── [series-id]/   # Dynamic series detail pages
├── components/            # Reusable React components
│   ├── Banner.tsx         # Featured content banner
│   ├── Header.tsx         # Navigation header
│   ├── Sections.tsx       # Content grid layouts
│   ├── LinkCard.tsx       # Individual show cards
│   ├── SearchInput.tsx    # Search bar component
│   └── DetailBox/         # Show detail components
├── lib/
│   ├── api/
│   │   └── omdb.ts       # OMDB API integration
│   └── utils/
│       └── url.ts        # URL utilities
├── hooks/
│   └── useHandleSearch.ts # Search functionality hook
├── types/
│   └── index.ts          # TypeScript type definitions
├── constants/            # Type and configuration constants
└── public/              # Static assets
```

## Available Scripts

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build production bundle
npm start        # Start production server
npm run lint     # Run ESLint code linting
```

## Key Features Implementation

### Search Functionality
- Real-time client-side search with debouncing
- Type filtering (movies, series, or all)
- Keyboard navigation support (Enter to search)
- Loading and error states

### Detail Pages
- Server-side rendered for optimal SEO
- Dynamic routing with URL slugs
- Comprehensive movie/series information
- Multiple rating sources display
- Responsive image optimization

### API Integration
- Next.js caching with 1-hour revalidation
- Error handling and fallbacks
- Type-safe API responses
- Pagination support

## Customization

### Theme Colors
Modify `tailwind.config.ts` to customize the color scheme:
- Background gradients
- Primary, secondary, and tertiary accent colors
- Text colors and shadows

### Content Sections
Edit the home page sections in `app/page.tsx` to feature different movies or series.

## Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your `NEXT_PUBLIC_OMDB_API_KEY` environment variable
4. Deploy

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed instructions.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_OMDB_API_KEY` | Your OMDB API key for fetching movie data | Yes |

## Acknowledgments

- Movie and TV show data provided by [OMDB API](http://www.omdbapi.com/)
- Built with [Next.js](https://nextjs.org/)
- Icons by [Heroicons](https://heroicons.com/)
