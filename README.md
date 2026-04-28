# Next.js Dashboard

A dashboard application built with the Next.js App Router course structure and extended with authentication, invoice management, customer views, and a custom signup flow.

This project uses:

- Next.js App Router
- NextAuth v5 credentials authentication
- PostgreSQL
- Tailwind CSS
- Server Actions

## Extra Touch

In addition to the curriculum flow, this project includes a custom signup page with auto-login after successful account creation.

## Features

- Landing page with login and signup entry points
- Credentials-based authentication with protected dashboard routes
- Signup form that creates a user and signs them in immediately
- Dashboard overview with revenue, invoice, and customer metrics
- Invoice listing, search, pagination, creation, editing, and deletion
- Customer listing with invoice summaries
- Seed endpoint for creating demo tables and data

## Routes

- `/` landing page
- `/login` login page
- `/signup` signup page
- `/dashboard` protected dashboard
- `/dashboard/invoices` invoices management
- `/dashboard/customers` customers table
- `/api/seed` seeds the database
- `/api/query` sample query endpoint used during the course

## Environment Variables

Create a `.env.local` file in the project root:

```env
POSTGRES_URL=your_postgres_connection_string
AUTH_SECRET=your_auth_secret
AUTH_URL=http://localhost:3000
```

### Variables Explained

- `POSTGRES_URL`: PostgreSQL connection string used by data fetching, auth, signup, and seed routes
- `AUTH_SECRET`: secret used by NextAuth to sign and encrypt session data
- `AUTH_URL`: base URL of the app in local development or production

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Add your environment variables in `.env.local`.

3. Start the development server:

```bash
pnpm dev
```

4. Seed the database by visiting:

```text
http://localhost:3000/api/seed
```

5. Open the app:

```text
http://localhost:3000
```

## Demo Login

After seeding, you can log in with:

- Email: `user@nextmail.com`
- Password: `123456`

You can also create a new account from `/signup`, and the app will log you in automatically after registration.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Notes

- Dashboard routes are protected through NextAuth route guarding.
- The app expects a PostgreSQL database that supports the seeded schema.
- Passwords are hashed with `bcrypt` before being stored.

## Curriculum Context

This project started from the Next.js App Router course starter and was customized beyond the base curriculum by adding signup with auto-login.

## Deployed to Vercel
https://financial-dashboard-ten-kappa.vercel.app
