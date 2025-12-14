# Contributing to Inverge 🤝

Thank you for your interest in contributing to **Inverge**.

This project is built with a **production-first, open-source mindset**. Contributions are welcome, but they are expected to follow clear engineering standards, clean workflows, and strong review discipline.

If you are new to open source — read carefully. If you are experienced — this will feel familiar.

---

## 🧭 Project Philosophy

* **Clarity over cleverness**
* **Small PRs over big rewrites**
* **Readable code over abstractions**
* **OSS discipline over hackathon shortcuts**

Every contribution should make the project easier to understand, maintain, or extend.

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have:

* Node.js (>= 18)
* npm
* Git

### Setup

```bash
git clone https://github.com/<your-username>/inverge.git
cd inverge
npm install
```

Create a `.env` file based on the example provided in the README.

---

## 🌱 How to Contribute

### 1. Fork the Repository

Create your own fork of the project on GitHub.

### 2. Create a Feature Branch

```bash
git checkout -b feat/short-descriptive-name
```

Examples:

* `feat/event-registration`
* `fix/date-parsing-bug`
* `chore/update-eslint-config`

---

### 3. Make Focused Changes

* One feature or fix per PR
* Avoid unrelated refactors
* Keep changes minimal and intentional

If the change is large, open an issue first.

---

### 4. Commit Convention

We follow **Conventional Commits**:

```bash
feat: add event image upload
fix: resolve invalid date format
chore: improve lint configuration
docs: update setup instructions
```

Bad commits will block the PR.

---

### 5. Open a Pull Request

Before opening a PR, ensure:

* The app runs locally
* No linting errors
* No secrets committed

PR requirements:

* Clear title and description
* Link related issues (if any)
* Screenshots for UI changes

---

## 🤖 CodeRabbit Review (Mandatory)

This repository uses **CodeRabbit** for AI-powered pull request reviews.

### What CodeRabbit Checks

* Code quality and readability
* Architectural boundaries
* Edge cases and potential bugs
* Best practices for Next.js and TypeScript

⚠️ **PRs will not be merged without addressing CodeRabbit feedback.**

This is intentional and non-negotiable.

---

## 🗂️ Folder Ownership & Boundaries

Respect the project structure:

* `app/` — routing, layouts, server actions, API handlers
* `components/` — reusable UI components only
* `database/` — MongoDB connection and schemas
* `lib/` — shared utilities and helpers

Breaking boundaries = PR changes requested.

---

## 🧪 Testing & Quality

* Test flows manually before submitting
* Ensure TypeScript errors are resolved
* Avoid introducing unused code

Quality > quantity.

---

## 🔐 Security & Secrets

* **Never commit `.env` files**
* Never expose API keys or secrets
* Report security issues privately (see `SECURITY.md`)

PRs leaking secrets will be closed immediately.

---

## 🧠 Maintainer Expectations

Maintainers may:

* Request changes
* Suggest simplifications
* Ask for smaller PRs

This is not rejection — it is quality control.

If your change improves the project, it will be merged.

---

## 🙌 Final Notes

By contributing, you agree to follow:

* This contributing guide
* The Code of Conduct
* CodeRabbit review requirements

Thank you for helping make **Inverge** a clean, maintainable, and scalable open-source project 🚀
