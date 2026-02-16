# Vignesh Sakthivel - Futuristic Portfolio

A high-performance, dark-themed portfolio website built with React + Vite + Tailwind CSS (v4). 
Inspired by Google's minimal design philosophy and futuristic energy aesthetics (Neon Green).

## 🚀 Features

- **Route-Aware 3D Environments**: Unique, immersive 3D scenes for each page (Starfield, Floating Tech, Atomic Cloud, Helix, Globe) using React Three Fiber
- **3D Interactive Cards**: Mouse-tracking 3D tilt effect on project cards for a video game-like experience
- **Advanced Animations**: Staggered entrance animations, spring physics, and dynamic glow effects
- **Immersive Hero Section**: Anti-gravity animations with multiple floating orbs
- **Glassmorphism UI**: Premium frosted glass effects on navigation and cards
- **Full Responsiveness**: Mobile-first design with a custom animated hamburger menu
- **Page Transitions**: Smooth exit and enter animations for seamless navigation
- **Modular Components**: Clean architecture with reusable UI components
- **Modern Tech Stack**: Leveraging React 19, Vite, Tailwind v4, and Three.js
- **Custom Neon Logo**: Unique SVG favicon with glowing neon green "V" design

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM v7

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Vigneshsakthivel07/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Layout/       # Navbar, Footer
│   └── UI/           # Reusable UI elements (Orb, Buttons)
├── pages/            # Page components (Home, Projects, About, Skills, Contact)
├── styles/           # Global styles and Tailwind configuration
├── App.jsx           # Main application component with routing
└── main.jsx          # Entry point
```

## 🎨 Theme Configuration

The theme is controlled via CSS variables in `src/styles/index.css`:

```css
:root {
  --neon-green: #39FF14;
  --deep-black: #050505;
  --glass-bg: rgba(15, 15, 15, 0.6);
  /* ... */
}
```

---
Built with ❤️ by Vignesh Sakthivel
