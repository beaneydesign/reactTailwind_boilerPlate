# React TypeScript Tailwind Boilerplate

A modern React boilerplate with TypeScript, Tailwind CSS, and CRACO configuration for easy project setup and development.

## Features

- **React 18** - Latest version of React
- **TypeScript** - Type safety for your JavaScript code
- **Tailwind CSS** - Utility-first CSS framework
- **CRACO** - Create React App Configuration Override for custom configurations
- **Path Aliases** - Import components with `@/` prefix
- **React Router** - For client-side routing
- **Custom Components** - Reusable components like Button
- **Responsive Design** - Mobile-first approach with Tailwind

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd react-typescript-tailwind-boilerplate
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── public/                 # Static files
│   ├── index.html          # Main HTML file
│   └── manifest.json       # Web app manifest
├── src/                    # Source code
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable components
│   │   └── Button.tsx      # Example Button component
│   ├── pages/              # Page components
│   │   └── Home.tsx        # Home page
│   ├── styles/             # CSS files
│   │   ├── index.css       # Main CSS with Tailwind imports
│   │   └── App.css         # App-specific styles
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point
│   └── reportWebVitals.ts  # Web vitals reporting
├── craco.config.js         # CRACO configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

- `npm start` - Starts the development server
- `npm build` - Builds the app for production
- `npm test` - Runs tests
- `npm eject` - Ejects from Create React App (avoid this if possible)

## Customization

### Tailwind CSS

Customize your design system in `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF784D',
        // Add your custom colors here
      },
      // Add custom font families, spacing, etc.
    },
  },
  plugins: [
    // Add Tailwind plugins here
  ],
}
```

### Path Aliases

The project is configured with path aliases for cleaner imports:

```tsx
// Instead of
import Button from '../../../components/Button';

// You can use
import Button from '@/components/Button';
```

## License

[MIT](LICENSE)
