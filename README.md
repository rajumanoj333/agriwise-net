# AgriSync AI Dashboard

**URL**: https://lovable.dev/projects/f4253d7c-5ea3-42fb-8cd1-3511ad0bc747

## Project Overview

AgriSync AI Dashboard is a web application designed to help users monitor and manage farm-related data and gain insights from a network of specialized AI agents.

*   **AI Agent Network:** This section displays various AI agents that analyze data and provide recommendations concerning farm operations, weather patterns, market conditions, and sustainability practices.
*   **Farm Insights:** This area presents a collection of widgets including local weather information, tailored crop recommendations, sustainability metrics, and other relevant farm data points.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f4253d7c-5ea3-42fb-8cd1-3511ad0bc747) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Lucide React (for icons)

## Project Structure

Here's a brief overview of the important directories:

- `public/`: Static assets like images and icons.
- `src/`: Main source code.
  - `components/`: Custom React components used throughout the application (e.g., `AgentCard`, `Dashboard`).
  - `components/ui/`: UI elements provided by the shadcn-ui library.
  - `hooks/`: Custom React hooks (if any, this is a common directory).
  - `lib/`: Utility functions and shared logic (e.g., `utils.ts`).
  - `pages/`: While this project is primarily a single-page dashboard, this directory would hold different pages if the application grows. For now, it might be less relevant or contain the main layout.
  - `App.tsx`: The main application component, sets up routing.
  - `main.tsx`: The entry point of the application.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f4253d7c-5ea3-42fb-8cd1-3511ad0bc747) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
