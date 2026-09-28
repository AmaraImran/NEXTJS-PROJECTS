# Scholarship Tracker

One sentence: what it does. Example: A web app to track scholarship applications, deadlines, and checklists in one place.



## Why I built it
2-3 sentences. Example: I was tracking my applications in Google Sheets and kept missing details, so I built a proper tracker.

## Features
- Add, view, and manage scholarships
- Track status (Researching, Applying, Submitted, Interview, Accepted, Rejected)
- Deadlines and links for each scholarship
- Checklist of tasks per scholarship

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prisma 6 + PostgreSQL (Neon)
- Deployed on Vercel

## Getting Started

1. Clone the repo
```bash
   git clone https://github.com/AmaraImran/NEXTJS-PROJECTS.git
   cd scholarship-tracker
```
2. Install dependencies
```bash
   npm install
```
3. Create a `.env` file
```
   DATABASE_URL="your-neon-connection-string"
```
4. Set up the database
```bash
   npx prisma migrate dev
```
5. Run the app
```bash
   npm run dev
```

## What I Learned
A few bullets: App Router, client vs server components, Prisma models and relations, API routes.

