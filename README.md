# AgentSpace Landing Page

A modern, beautiful landing page for AgentSpace - The Future of Insurance Sales Distribution.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 for optimal performance
- 🔒 Complete Terms & Conditions and Privacy Policy pages
- 📱 Mobile-friendly and accessible
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with header and footer
│   ├── page.tsx        # Home page with hero section
│   ├── terms/
│   │   └── page.tsx    # Terms & Conditions
│   ├── privacy/
│   │   └── page.tsx    # Privacy Policy
│   └── globals.css     # Global styles
├── public/             # Static assets
└── tailwind.config.ts  # Tailwind configuration
```

## Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## License

Copyright © 2025 AgentSpace Inc. All rights reserved.

