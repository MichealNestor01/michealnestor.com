# michealnestor.com

A modern, responsive portfolio website showcasing my work, experience, and skills as a software engineer.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **Responsive Design**: Optimized for all device sizes
- **Interactive Sections**:
  - Hero section with animated background
  - About section
  - Work experience timeline
  - Education history
  - Featured projects with detail pages
  - Skills showcase
  - Contact information
- **Project Showcase**: Detailed project pages with demos and GitHub links
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Type-Safe**: Built with TypeScript for better code quality

## 🛠️ Tech Stack

### Core

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives (Collapsible, Slot, Tooltip)
- **FontAwesome** - Icon library

### State Management

- **Redux Toolkit** - State management
- **React Redux** - React bindings

### Additional Libraries

- **date-fns** - Date formatting
- **next-themes** - Theme management
- **class-variance-authority** - Component variants
- **clsx** & **tailwind-merge** - Conditional styling utilities

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/michealnestor01/michealnestor.com.git
cd michealnestor.com
```

2. Install dependencies:

```bash
npm install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:8080` (or the next available port).

## 🏗️ Build

Build for production:

```bash
npm run build
```

Build for development:

```bash
npm run build:dev
```

Preview the production build:

```bash
npm run preview
```

## 🧹 Linting

Run ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
michealnestor.com/
├── public/                 # Static assets
│   ├── images/            # Portfolio images
│   └── projects/          # Project demos
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Section components
│   ├── data/             # JSON data files
│   │   ├── personal.json
│   │   ├── experience.json
│   │   ├── education.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── redux/            # Redux store and slices
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/data/personal.json`:

- Name, title, location
- Email and social media links
- About section text

### Experience & Education

Edit the JSON files in `src/data/`:

- `experience.json` - Work experience entries
- `education.json` - Education history
- `projects.json` - Project showcase
- `skills.json` - Skills and technologies

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `src/index.css` for global styles
- Component-specific styles use Tailwind classes

## 👤 Author

**Micheal Nestor**

- Software Engineer @ Bank of America
- Location: London, UK
- Email: michealnestor@outlook.com
- LinkedIn: [linkedin.com/in/michealnestor](https://linkedin.com/in/michealnestor)
- GitHub: [@michealnestor01](https://github.com/michealnestor01)
