🚀 PixoraAI – AI Photo Editor (Full-Stack React Project)

Next.js • React • Tailwind CSS • Shadcn UI • Fabric.js • ImageKit • Convex

PixoraAI is a full-stack AI photo editing SaaS application.
It allows users to upload, edit, enhance, and transform images using Fabric.js canvas tools, AI-powered features, and a realtime Convex backend for data management.

#### ✨ Features

# 🔹 Core AI Editing

- AI image enhancement

- AI background removal

- AI filters & transformations

- AI retouch and correction

#### 🎨 Fabric.js Canvas Tools

- Drag, scale, rotate, crop

- Draw on images

- Add shapes, text, stickers

- Undo/redo functionality

- Layer management

#### 🗄️ Realtime Backend (Convex)

- PixoraAI uses Convex as a backend layer for:

- Storing user editing history

- Managing projects & saved edits

- Realtime syncing of data

- Running server functions for AI processing

- Secure auth-based actions

- Typed document database without writing REST or GraphQL

- Convex provides:

- Zero backend setup

- Realtime queries

- Database + backend functions in one place

- Type-safe API calls in React

- Perfect sync between frontend and backend

# Example Convex query:

export const getProjects = query(async ({ db, auth }) => {
const user = auth.getUserIdentity();
return await db
.query("projects")
.withIndex("by_user", q => q.eq("userId", user.subject))
.collect();
});

#### 🖼️ Image Upload & Storage

- ImageKit for optimized image uploads

- Fast global CDN

- On-the-fly URL transformations

- Convex stores project metadata linked to ImageKit URLs

#### 🛠️ App Features

- Fully responsive UI

- Modern design with Shadcn UI

- Built with Next.js App Router

- Optional React Compiler integration

- SaaS-ready folder structure

- Realtime data sync via Convex React Hooks

#### ⚙️ Tech Stack

# Frontend

- Next.js 16

- React 19

- Tailwind CSS

- Shadcn UI

- Fabric.js

- Lucide React

- Backend / Database

- Convex (primary backend)

- Realtime database

- Mutations & queries

- AI actions (server code)

- Auth (Convex Auth)

- Next.js API Routes (optional for external services)

- Storage & AI

- ImageKit SDK

- AI services for image enhancement & generation

- Utilities

- @radix-ui/react-slot

- clsx, cva, tailwind-merge

#### 📁 Project Structure

root/
│── public/
│── convex/ → Convex backend (functions, schema, auth)
│── src/
│ ├── app/ → Next.js App Router
│ ├── components/ → UI Components (Shadcn + custom)
│ ├── hooks/ → custom hooks (e.g., useCanvas, useConvexQuery)
│ ├── lib/ → helpers, utils
│ ├── services/ → ImageKit, AI API services
│ ├── styles/ → global styles + Tailwind config
│── convex.json → Convex project configuration
│── package.json
│── README.md
