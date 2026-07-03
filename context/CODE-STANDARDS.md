# Code Standards

## General

- Keep modules small and focused on the event discovery and booking domain.
- Fix root causes instead of adding workarounds around API, database, or form behavior.
- Do not mix unrelated concerns in one component, route handler, model, or server action.
- Keep public user flows simple: browse events, view event details, create events, and book/register for events.
- Prefer readable, contributor-friendly code over clever abstractions.

## TypeScript

- Use TypeScript for all app, component, API, model, and action code.
- Avoid `any`; use explicit interfaces, route parameter types, and model types.
- Use `interface` for object contracts such as event, booking, and component props.
- Validate and narrow external input from forms, API requests, route params, and environment variables before trusting it.
- Keep client component state typed and limited to UI concerns such as form input, previews, loading states, and submit messages.

## Next.js

- Use the App Router structure under `app/` for pages, layouts, and API route handlers.
- Default to React Server Components for read-only pages and data display.
- Add `"use client"` only when a component needs hooks, browser APIs, file previews, form submission state, or direct user interactivity.
- Keep API route handlers focused on request parsing, database connection, validation, and response creation.
- Use `notFound()` for missing event detail pages and return clear JSON responses from API routes.
- Keep environment-dependent URLs and secrets in environment variables such as `NEXT_PUBLIC_BASE_URL`, `MONGODB_URI`, and Cloudinary configuration.

## Styling

- Use Tailwind CSS utilities and project-level styles from `app/globals.css`.
- Prefer existing theme tokens such as `bg-background`, `text-foreground`, `text-light-100`, `text-light-200`, `bg-dark-100`, `bg-dark-200`, `border-dark-200`, and `bg-primary`.
- Reuse existing component selectors and utility classes such as `events`, `poster`, `datetime`, `pill`, `glass`, `card-shadow`, `flex-center`, `flex-col-gap-2`, and `flex-row-gap-2`.
- Keep the dark event-platform visual system consistent: dark backgrounds, light text, mint primary actions, rounded event cards, and readable spacing.
- Use responsive Tailwind modifiers already present in the project, such as `max-sm`, `sm`, `md`, and `lg`.
- Avoid introducing unrelated design systems or one-off color palettes unless updating the shared theme tokens.

## API Routes

- Connect to MongoDB with `connectDB()` before reading or mutating event and booking data.
- Parse and validate request input before creating database records.
- For multipart event creation, read `FormData`, require an image file, parse JSON string fields like `agenda` and `tags`, upload the image, then create the event record.
- Return consistent JSON response shapes with a human-readable `message` and relevant data or error details.
- Use appropriate HTTP status codes: `200` for successful reads, `201` for creates, `400` for invalid input, `404` for missing events, and `500` for server failures.
- Keep slug lookup routes sanitized and lowercase before querying.
- Avoid putting unrelated business logic or UI formatting inside API route handlers.

## Data and Storage

- Store event and booking data in MongoDB through Mongoose models in `database/`.
- Keep event records structured around title, slug, description, overview, image, venue, location, date, time, mode, audience, agenda, organizer, tags, and optional website.
- Store booking records with an event reference and normalized email address.
- Use schema validation for required fields, enum values, URL fields, arrays, and email addresses.
- Preserve indexes that support slug lookup, event filtering, booking lookup, and one booking per event per email.
- Store uploaded event images in Cloudinary and persist the returned secure image URL on the event record.
- Do not store raw uploaded image files or large binary content in MongoDB.

## File Organization

- `app/` — Next.js App Router pages, layouts, and API route handlers.
- `app/api/` — event API routes for listing, creation, and slug-based reads.
- `components/` — reusable UI and feature components for navigation, event cards, event lists, event details, booking, and visual effects.
- `database/` — Mongoose schemas and models for events and bookings.
- `lib/` — shared utilities, MongoDB connection logic, and server actions.
- `public/` — static icons, images, and readme assets.
- `context/` — project documentation and working context files.
- Name files after the responsibility they contain, such as `EventCard`, `EventsList`, `EventDetails`, `BookEvent`, and `event.model`.
