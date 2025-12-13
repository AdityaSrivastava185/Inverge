# Inverge 🚀

> **Hackathon Submission — Captain Code Award Track and Stormbreaker Deployment Award**
> *Best Open-Source Engineering using CodeRabbit*

Inverge is a platform that lists multiple developer events. Users can view event details and register via email.Inverge is a **production-ready, open-source event listing platform** built with modern web technologies and **strong OSS engineering practices**. This project focuses on **clean pull requests, clear documentation, scalable architecture, and AI-assisted code reviews using CodeRabbit**

---

## Why Inverge?

There are plenty of platforms like **Luma**, **Meetup**, and **Eventbrite**, but they’re general-purpose and not built specifically for developers. Inverge exists to solve a real, practical problem: **fragmentation and discoverability** in developer communities.

1. **Developer-Focused:** Inverge lists **only tech and developer-centric events**, so users aren’t wasting time on irrelevant events.  
2. **Simplified Event Management:** Communities can **create and manage events easily** without complex dashboards or setups.  
3. **Centralized Discovery:** Many innovative developer communities build their own platforms and events. Users often **miss these opportunities** because they don’t know these communities exist. Inverge **aggregates these events in one place**, making it easy for developers to discover and join relevant events.  
4. **Email-Driven Registration:** Users can register **directly via email**, avoiding the friction of creating accounts on multiple platforms.  
5. **Community Growth:** Communities get **more visibility and reach**, connecting with developers who otherwise wouldn’t find their events.  
6. **Open Source & Extensible:** Fully **open-source**, allowing contributors to improve features, add integrations, or customize it for their own communities.

> In short: Inverge is **lightweight, developer-focused, and community-friendly**, solving fragmentation in event discovery while providing communities the reach they need and users the events they want.


## 🏆 Why This Project Fits the Captain Code Award

This project was intentionally engineered to demonstrate **real-world open-source discipline**, not just features.

* ✅ **AI-powered PR reviews using CodeRabbit**
* ✅ Clean, modular, and scalable codebase
* ✅ Strong documentation-first approach
* ✅ Consistent commit & PR conventions
* ✅ Production-grade setup (Vercel-ready)
* ✅ Clear contribution workflow for external contributors

This is not a demo app. This is an **OSS-ready product**.

---

## 🔥 Core Features

* 🏠 **Home Page** — Dynamic list of upcoming and featured events
* 📄 **Event Details Page** — Full event info with registration support
* 🔁 **API Routes** — Create, read, update, delete (CRUD) events
* ☁️ **Cloudinary Integration** — Secure image upload & optimization
* ⚡ **Next.js 16 Caching** — Faster loads using the latest caching model
* 🧱 **Reusable Architecture** — Clean separation of concerns

---

## 🧠 Tech Stack

| Technology        | Purpose                              |
| ----------------- | ------------------------------------ |
| **Next.js (v16)** | Full-stack React framework           |
| **TypeScript**    | Type-safe, scalable development      |
| **MongoDB**       | NoSQL database for event storage     |
| **Mongoose**      | ODM for schema & validation          |
| **Cloudinary**    | Media upload & optimization          |
| **Tailwind CSS**  | Utility-first styling system         |
| **CodeRabbit**    | AI-powered PR reviews & code quality |
| **Warp**          | Modern terminal for dev productivity |

---

## 🧩 CodeRabbit in Action

CodeRabbit plays a **central role** in this repository:

* 🤖 Automated PR reviews
* 🧹 Enforces clean code & best practices
* 📏 Detects architectural issues early
* 📝 Suggests improvements directly in PRs
* 🔁 Encourages smaller, reviewable commits

Every pull request is reviewed with **CodeRabbit before merge** — simulating a real OSS workflow.

---

## 🗂️ Project Structure

```bash
.
├── app/                # Next.js App Router (routes, layouts, pages, API handlers)
├── components/         # Reusable UI & feature components
├── database/           # MongoDB connection & database helpers
├── lib/                # Shared utilities,actions,constants
├── public/             # Static assets
├── .env                # Environment variables (gitignored)
├── .gitignore
├── components.json     # shadcn/ui configuration
├── eslint.config.mjs   # ESLint configuration
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md

```

The architecture is intentionally **flat, readable, and contributor-friendly**.

---

## 🤝 Open Source Workflow

This repository follows strict OSS practices:

* 📌 Conventional commits
* 🔀 Feature-based pull requests
* 🧪 Manual & AI-assisted review process
* 📄 Clear PR templates
* 🚦 No direct pushes to `main`

### PR Rules

1. Small, focused PRs only
2. One feature or fix per PR
3. CodeRabbit review required
4. Clear PR description & screenshots (if UI)

---

## 🚀 Quick Start

### Prerequisites

Ensure you have:

* Git
* Node.js (>=18)
* npm

### Clone the Repository

```bash
git clone https://github.com/your-username/Inverge.git
cd inverge
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=

NEXT_PUBLIC_BASE_URL=http://localhost:3000/

CLOUDINARY_URL=
```

> ⚠️ Never commit `.env` files to the repository.

---

### Run Locally

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📦 Deployment

* ✅ Vercel-ready
* ✅ Environment-based configuration
* ✅ Optimized builds using Next.js caching

This project is designed for **zero-friction production deployment**.

---

## 📚 Documentation Philosophy

This repository prioritizes **clarity over cleverness**:

* Self-explanatory folder structure
* Minimal abstraction
* Clear naming conventions
* Comments only where necessary

If a new contributor can’t understand the code in 10 minutes — it’s considered a bug.

---

## 🏁 Final Note

This project was built to **prove open-source maturity**, not just functionality.

If you are evaluating **clean engineering, OSS workflows, and AI-assisted development using CodeRabbit** — this repository was designed exactly for that purpose.

> *Ship clean. Review harder. Scale responsibly.* 🚀
