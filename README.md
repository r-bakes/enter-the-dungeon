# Enter the Dungeon

## Summary & Screenshots
Enter the Dungeon is a deck builder rogue-lite with idle skill leveling to encourage meta progression. Developed for exploring modern front-end stacks and Web Accessibility Initiative (WAI) standards, it's inspired by games such as Runescape, Slay the Spire, and Cookie Clicker.

In just three weeks, I progressed from extremely limited frontend knowledge making basic square divs to a polished game with features like:

### Features

#### Leveling Up Idle Skills
Idle skills for gathering and production that level up over time are a key mechanic.
![Leveling Overview](./docs/readme/overview.png)

#### Inventory and Equipment
Manage your inventory, arrange character loadouts, and collect equipment.
![Inventory Management](./docs/readme/inventory.png)

## FAQ
Answers to common questions about the project's technology choices and design approach.

- **Q: Why use Typescript and make your own engine over C# / Unity?**
  
  A: To learn modern frontend development; gaming was a secondary goal.

- **Q: How did you manage a sleek look with minimal design experience?**
  
  A: The [Shadcn/ui](https://ui.shadcn.com) library and learning from [RefactoringUI](https://www.refactoringui.com) a book by the Tailwind creator were instrumental.

## Tech Stack
A rundown of the technologies used for game features, UX/UI design, and deployment.

- **Game Engine:** Typescript & [Next.js/React](https://nextjs.org)
- **UI Design:** [Tailwind CSS](https://tailwindcss.com), [Lucide Icons](https://lucide.dev/icons/), [Shadcn/ui](https://ui.shadcn.com) 
- **Packaging & Backend:** [Electron](https://www.electronjs.org), [Firebase](https://firebase.google.com)

### Code Style
Adherence to consistent code style using Prettier for formatting.

## Getting Started
Set up and run the development server for this Next.js project.

```bash
# Choose the package manager you prefer and run the relevant command:
npm run dev
yarn dev
pnpm dev
bun dev
