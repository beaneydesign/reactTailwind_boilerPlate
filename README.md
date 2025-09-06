# React TypeScript Tailwind + shadcn/ui Boilerplate

A modern, production-ready React boilerplate with TypeScript, Tailwind CSS, shadcn/ui components, and CRACO configuration for rapid development.

## 🚀 Features

- **React 18** - Latest version with concurrent features
- **TypeScript** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first CSS framework with dark mode
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **CRACO** - Create React App Configuration Override
- **Path Aliases** - Clean imports with `@/` prefix
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Framer Motion** - Animation library

## 📦 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone or download this template**
```bash
git clone <your-repo-url>
cd react-tailwind-boilerplate
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser at [http://localhost:3000](http://localhost:3000)**

## 🏗️ Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   └── ui/             # shadcn/ui components
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # cn() function for class merging
│   ├── pages/              # Page components
│   ├── styles/             # CSS files
│   │   └── globals.css     # Global styles + Tailwind + shadcn
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Helper functions
│   └── app/                # App configuration
├── components.json         # shadcn/ui configuration
├── craco.config.js         # CRACO configuration
├── tailwind.config.js      # Tailwind + shadcn config
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Using shadcn/ui Components

This boilerplate comes pre-configured with shadcn/ui. Add components as needed:

### Adding Components

```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog

# Or add multiple at once
npx shadcn@latest add button card dialog input
```

### Using Components

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎨 Theming & Customization

### CSS Variables (Recommended)

Colors are defined using CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary: 222.2 84% 4.9%;    /* Custom primary color */
  --secondary: 210 40% 96%;      /* Custom secondary color */
  /* ... other variables */
}
```

### Dark Mode

Toggle dark mode by adding/removing the `dark` class on the `<html>` element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark')
```

### Custom Colors

You can add custom colors while keeping shadcn compatibility:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // shadcn colors (keep these)
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        // ... existing shadcn colors

        // Your custom colors (optional)
        brand: "#your-color",
      }
    }
  }
}
```

## 🛠️ Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run lint       # Run ESLint (if configured)
```

## 📁 Path Aliases

Import components cleanly using the `@/` alias:

```tsx
// ✅ Clean imports
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ❌ Instead of relative paths
import { Button } from "../../../components/ui/button"
```

## 🎯 Development Tips

### Component Patterns

1. **Use the `cn()` utility for conditional classes:**
```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-classes", isActive && "active-classes")} />
```

2. **Follow shadcn naming conventions:**
```tsx
// Component files: kebab-case
components/ui/data-table.tsx

// Component names: PascalCase
export function DataTable() {}
```

3. **Leverage TypeScript:**
```tsx
interface MyComponentProps {
  title: string
  optional?: boolean
}

export function MyComponent({ title, optional = false }: MyComponentProps) {
  return <div>{title}</div>
}
```

### State Management

Zustand is included for state management:

```tsx
import { create } from 'zustand'

interface AppState {
  count: number
  increment: () => void
}

const useAppStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

## 🚀 Production Build

```bash
npm run build
```

The build folder contains optimized files ready for deployment to any static hosting service.

## 🔧 Configuration Files

- **`components.json`** - shadcn/ui configuration
- **`craco.config.js`** - Webpack and PostCSS overrides
- **`tailwind.config.js`** - Tailwind + shadcn theme configuration
- **`tsconfig.json`** - TypeScript compiler options

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [CRACO](https://github.com/gsoft-inc/craco)


**Happy coding!** 🎉