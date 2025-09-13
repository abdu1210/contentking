# Overview

This is a React-based headless CMS landing page called "Content King" built with modern web technologies. The application serves as a marketing site for a content management system that emphasizes speed, flexibility, and developer experience. It features a hero section, feature highlights, statistics display, and comprehensive footer with social links.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern React features
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for consistent theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and customization
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Routing**: React Router DOM for client-side navigation with catch-all 404 handling

## Design System
- **Color Scheme**: HSL-based color system with CSS custom properties for light/dark theme support
- **Component Variants**: Class Variance Authority (CVA) for systematic component styling
- **Animations**: Custom CSS transitions and keyframe animations with easing functions
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Typography**: Consistent font scaling and spacing using Tailwind's design tokens

## Component Architecture
- **Layout Components**: Modular header, hero, features, stats, and footer sections
- **UI Components**: Comprehensive set of reusable components (buttons, cards, forms, etc.)
- **Custom Components**: Specialized components like AnimatedCounter for dynamic number displays
- **Accessibility**: ARIA-compliant components with proper semantic HTML structure

## Development Tools
- **Linting**: ESLint with TypeScript rules and React-specific configurations
- **Type Safety**: Strict TypeScript configuration with path mapping for clean imports
- **Development Server**: Vite dev server with hot module replacement and CORS configuration
- **Build Process**: Optimized production builds with code splitting and asset optimization

## Performance Optimizations
- **Lazy Loading**: Component-level code splitting for reduced initial bundle size
- **Animation Performance**: CSS transforms and GPU-accelerated animations
- **Asset Optimization**: Vite's built-in optimization for images, CSS, and JavaScript
- **Bundle Analysis**: Development-time component tagging for debugging and analysis

# External Dependencies

## Core Framework Dependencies
- **React & React DOM**: Frontend framework and rendering
- **Vite**: Build tool and development server
- **TypeScript**: Type system and compilation

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI component primitives for accessibility
- **Lucide React**: Icon library with consistent design
- **Class Variance Authority**: Component variant management
- **clsx**: Conditional CSS class utilities

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management and validation

## Routing and Navigation
- **React Router DOM**: Client-side routing solution

## Development and Build Tools
- **ESLint**: Code linting and quality enforcement
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: CSS vendor prefix automation

## Enhanced User Experience
- **Next Themes**: Theme switching capabilities
- **React Day Picker**: Date selection components
- **Sonner**: Toast notification system
- **Embla Carousel**: Touch-friendly carousel components

## Specialized Libraries
- **Date-fns**: Date manipulation and formatting
- **Input OTP**: One-time password input components
- **CMDK**: Command palette interface
- **React Resizable Panels**: Layout management components