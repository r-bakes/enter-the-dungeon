# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Basic Commands
- `npm run dev` - Start development server with Turbopack for fast rebuilds
- `npm run build` - Build production version with static export
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Deployment Commands
- `make run` - Start dev server with Chrome debugging enabled
- `make build` - Install dependencies and build for production
- `make deploy` - Full deployment pipeline (build + deploy to AWS S3)

## Architecture Overview

This is a TypeScript/React/Next.js game called "Enter the Dungeon" - a deck builder rogue-lite with idle skill leveling mechanics inspired by Runescape, Slay the Spire, and Cookie Clicker.

### Core Engine Architecture
The application uses a context-based engine system with multiple providers:
- `CharacterEngineProvider` - Character state, stats, and modifiers
- `ModifierEngineProvider` - Temporary and permanent character modifiers  
- `WorkingEngineProvider` - Idle skill progression and task management
- `MenuEngineProvider` - UI navigation and menu state management
- Additional engines for combat cards, encounters, expeditions, and animations

All engines are composed in `app/layout.tsx` to provide global state management.

### Directory Structure
- `engines/` - React context providers for game state management
- `features/` - Feature-specific components split into `town/` and `expeditions/`
- `data/` - Game data definitions (items, skills, encounters, etc.)
- `types/` - TypeScript type definitions
- `components/ui/` - Reusable UI components using Shadcn/ui and Radix
- `lib/` - Utility functions and helpers

### Key Technologies
- **UI Framework**: Next.js 15 with React 19, Tailwind CSS, Shadcn/ui components
- **State Management**: React Context API with multiple engine providers
- **Styling**: Tailwind CSS with custom animations and Radix UI primitives
- **Icons**: Lucide React icons
- **Animations**: Framer Motion for smooth transitions
- **Code Quality**: Prettier with Tailwind plugin, ESLint, TypeScript strict mode

### Development Notes
- Uses absolute imports with `@/` prefix mapping to repository root
- Follows strict TypeScript configuration with isolated modules
- Static export configuration for deployment to AWS S3
- Uses Prettier for consistent code formatting with Tailwind class sorting