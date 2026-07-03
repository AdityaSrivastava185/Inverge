# Inverge

## Overview

Inverge is a developer-focused event discovery and booking platform built with Next.js. It helps users find hackathons, meetups, conferences, and other GitTogether-style community events in one place, review event details, and register either through an external event website or a lightweight email booking flow.

The app also lets organizers create public event listings with structured metadata, agenda items, tags, and cover images. Event data is stored in MongoDB through Mongoose models, while uploaded event images are handled through Cloudinary.

## Goals

1. Help developers discover relevant technical events from a centralized event feed.
2. Provide detailed event pages with descriptions, dates, times, locations, formats, agendas, organizers, tags, and registration options.
3. Let organizers create event listings through a public event creation form.
4. Support event cover image uploads through Cloudinary.
5. Persist events and bookings in MongoDB using typed Mongoose models.
6. Let users register for events through an external website link or an email-based booking form.
7. Keep the codebase clear, open-source friendly, and easy for contributors to understand.

## Core User Flow

1. User visits the homepage.
2. User browses featured events.
3. User opens an event details page.
4. User reviews event metadata, agenda, tags, organizer information, and registration options.
5. User either registers through an external website link or books a spot with an email address.
6. Event organizers can create events through the create-event form.
7. New events are stored in the database and shown in the event feed.

## Features

### Authentication and Projects

- Authentication and project management are not currently implemented.
- The current application is centered on public event creation, public event discovery, event details, and email-based booking.
- Event ownership, protected dashboards, and role-based organizer workflows are outside the current implementation.

### Event Listing and Discovery

- Public homepage event feed for browsing available developer events.
- Featured event cards showing event image, title, location, date, and time.
- Event cards link to slug-based event detail pages.
- Event data is fetched through API routes and rendered in the Next.js App Router.

### Event Details and Registration

- Event details pages display the full event record, including overview, schedule, location, mode, audience, agenda, organizer, and tags.
- Registration adapts to the event record: events with a website show an external registration link, while events without one show an email booking form.
- Missing or invalid event slugs resolve to the not-found flow.

### Event Creation and Image Upload

- Organizers can create new event listings through the create-event page.
- The form accepts event content, structured agenda and tag inputs, mode, audience, venue, organizer details, optional website, and a required event image.
- Event images are uploaded to Cloudinary before the event record is saved.
- Event slugs are generated from event titles for readable event URLs.

### Data Persistence and API Routes

- MongoDB and Mongoose store event and booking data.
- The event model validates required fields, mode values, agenda items, tags, website URLs, and slug uniqueness.
- The booking model stores event email registrations and enforces one booking per event per email through a unique compound index.
- API routes support event creation, event listing, and slug-based event retrieval.

## Scope

### In Scope

- Public event browsing
- Featured event feed
- Event details pages
- Public event creation form
- Cloudinary image upload for event covers
- MongoDB persistence for events and bookings
- Mongoose schemas, validation, and indexes
- Email-based event booking
- External registration links for events with websites
- Next.js API routes for event listing, creation, and slug lookup
- Responsive web UI for the core event discovery and registration flow

### Out Of Scope

- AI-generated system design workflows
- Real-time collaborative diagram editing
- Architecture diagramming integrations
- Generated technical specification workflows
- Billing and subscription systems
- Complex authentication, project management, and role-based permissions
- Organizer dashboards and private event management
- Native mobile applications

## Success Criteria

1. A user can visit the homepage and browse listed developer events.
2. A user can open an event details page by selecting an event card.
3. Event details pages show the correct event information, agenda, tags, organizer, and registration option.
4. An organizer can create an event with metadata, agenda items, tags, and a cover image.
5. Uploaded event images are stored through Cloudinary and saved with the event record.
6. A user can book an event with an email address when no external registration website is provided.
7. Event and booking data persists correctly in MongoDB.
