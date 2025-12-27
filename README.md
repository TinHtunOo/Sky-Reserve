# SkyReserve✈

#### Flight Ticket Booking Web Application

SkyReserve is a full-stack flight ticket booking platform that allows users to search and book flights, while administrators manage airlines, flights, and bookings through a secure admin dashboard.

## 🚀Features

#### Client Side

- Flight search (route, date, origin, destination)
- View available flights and pricing
- Book flight
- Booking history

#### Admin Side

- Secure admin authentication
- Add / update / delete flights
- View and manage bookings
- Dashboard overview

## 🛠️ Tech Stack

#### Frontend

- Next.js
- React
- Tailwind CSS
- JavaScript

#### Backend

- Next.js API Routes
- Prisma ORM

#### Database

- Neon (PostgreSQL)

#### Deployment

- Vercel

## ⚙️ Environment Variables

Create a .env.local file for development and set the same values in Vercel Environment Variables for production.

```
JWT_SECRET=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
```

## 🧪 Development Setup

```
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

Visit:
http://localhost:3000

## 🌐 Production Deployment (Vercel)

1. Push the project to GitHub
2. Import the repository into Vercel
3. Add environment variables in Project Settings
4. Deploy

## 📄 License

This project is for educational and portfolio purposes.
