# ByteSpace

A modern course discovery and learning-platform interface built with Next.js, React, and TypeScript. ByteSpace helps learners browse curated courses, filter by category, search by topic or creator, and explore paths for professional growth.

## Live Demo

[View ByteSpace live](https://bytespace-one.vercel.app)

## Preview

ByteSpace presents a responsive, visual-first experience for both learners and course creators, including a course catalog, learning-path discovery, creator-focused sections, testimonials, and dedicated sign-in and sign-up screens.

## Features

- Browse a curated course catalog across creative, business, and technology categories.
- Filter courses by category and search by course title, topic, or creator.
- View course cards with pricing, rating, level, instructor, and learner information.
- Explore learning paths such as Design, Development, Marketing, Photography, and IT & Software.
- Discover creator-focused content and course-management benefits.
- Use responsive desktop and mobile navigation.
- Access polished sign-in and sign-up user interfaces with client-side form validation.
- Browse community testimonials and a newsletter interface.

## Built With

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) 16 | App Router framework and optimized image delivery |
| [React](https://react.dev/) 19 | Interactive user interface |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe application code |
| [Lucide React](https://lucide.dev/) | Interface icons |
| CSS | Responsive layout and visual styling |

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm

### Installation

~~~bash
git clone <your-repository-url>
cd bytespace-new
npm install
~~~

### Run Locally

~~~bash
npm run dev
~~~

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

~~~bash
npm run lint
npm run build
npm run start
~~~

## Available Scripts

| Command | Description |
| --- | --- |
| npm run dev | Starts the development server |
| npm run build | Creates an optimized production build |
| npm run start | Starts the production server |
| npm run lint | Runs ESLint checks |

## Project Structure

~~~text
bytespace-new/
|-- app/
|   |-- page.tsx                 # Home page composition
|   |-- layout.tsx               # Root layout and metadata
|   |-- globals.css              # Global styles
|   |-- signin/                  # Sign-in page and form
|   \-- signup/                  # Sign-up page and form
|-- public/
|   \-- images/                  # Brand and course visual assets
|-- src/
|   |-- components/
|   |   |-- layout/              # Header, footer, newsletter
|   |   |-- sections/            # Home-page sections and catalog controls
|   |   \-- ui/                  # Shared visual components
|   |-- lib/
|   |   \-- course-data.ts       # Course and category data
|   \-- types/
|       \-- course.ts            # Course types
|-- package.json
\-- README.md
~~~

## Application Pages

| Route | Description |
| --- | --- |
| / | Landing page with search, course catalog, learning paths, creator content, and testimonials |
| /signin | Sign-in interface |
| /signup | Account-creation interface |

## Current Scope

ByteSpace is currently a frontend implementation. Course data is local and the sign-in, sign-up, social login, newsletter, and course basket interfaces are not connected to backend services yet.

## Customization

- Update course titles and categories in src/lib/course-data.ts.
- Add or replace visual assets in public/images/.
- Update site metadata in app/layout.tsx.
- Extend the sign-in and sign-up form submit handlers when an authentication service is added.

## Deployment

Deploy the application to a platform that supports Next.js, such as [Vercel](https://vercel.com/new). Connect the repository, keep the default build command (npm run build), and the platform will handle the production deployment.

## License

This project is intended for educational, portfolio, and demonstration purposes.
