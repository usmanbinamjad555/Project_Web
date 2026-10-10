# Kickstarter Crowdfunding API

A Kickstarter-style crowdfunding REST API built with Express 5 and MongoDB (Mongoose). It supports user registration and login, project CRUD, and pledges that update a project's raised amount. Route groups for visitors, creators and investors are scaffolded as placeholders for future work.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_9-47A248?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/license-ISC-blue)

## Features

- **Auth**: register and log in users with roles `creator`, `backer` (default) or `admin`. Passwords are hashed with bcrypt and never returned in responses.
- **Projects**: create, list, fetch by ID, update and delete crowdfunding projects (title, description, goal amount, category, creator name, deadline).
- **Pledges**: create a pledge against a project (its `raisedAmount` is increased by the pledge amount) and list all pledges with the project populated.
- **Route scaffolding**: visitor, creator and investor route groups exist as placeholders that return text responses.

## Tech stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js (CommonJS) |
| Web framework | Express 5 |
| Database | MongoDB via Mongoose 9 |
| Security | bcryptjs (password hashing) |
| Other | cors, dotenv, nodemon (dev) |

## Project structure

```
.
├── server.js              # Loads env, connects to MongoDB, starts the server
├── app.js                 # Express app, middleware and route mounting
├── config/db.js           # Mongoose connection (MONGO_URI)
├── models/                # User, Project, Pledge schemas
├── controllers/           # auth, project and pledge handlers
├── routes/
│   ├── authRoutes.js      # /api/auth
│   ├── projectRoutes.js   # /api/projects
│   ├── pledgeRoutes.js    # /api/pledges
│   ├── visitorRoutes.js   # placeholder routes
│   ├── creatorRoutes.js   # placeholder routes (/creator/...)
│   └── investorRoutes.js  # placeholder routes (/investor/...)
└── .env.example
```

## API endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/` | Health check (JSON) |
| POST | `/api/auth/register` | Register a user (`name`, `email`, `password`, optional `role`) |
| POST | `/api/auth/login` | Log in with `email` and `password` |
| POST | `/api/projects` | Create a project |
| GET | `/api/projects` | List projects |
| GET | `/api/projects/:id` | Get a project |
| PUT | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |
| POST | `/api/pledges` | Create a pledge (`backerName`, `amount`, `projectId`) |
| GET | `/api/pledges` | List pledges |

Placeholder routes (text responses only): `/browse`, `/browse/trending`, `/topics`, `/topics/:topic`, `/campaign/:campaignId`, `/search-projects`, `/support`, `/creator/...` and `/investor/...` (see the files in `routes/`).

## Getting started

### Prerequisites

- Node.js 18 or newer and npm
- A MongoDB instance (local or MongoDB Atlas)

### Environment variables

Copy `.env.example` to `.env` and fill in your values:

| Variable | Required | Description |
| --- | --- | --- |
| `MONGO_URI` | Yes | MongoDB connection string |
| `PORT` | No | Port to listen on (defaults to `5000`) |

### Run

```bash
npm install
cp .env.example .env   # then edit .env
npm run dev            # development, with nodemon
# or
npm start              # node server.js
```

The API is then available at `http://localhost:5000` (or your `PORT`).

## Roadmap and known limitations

- Login does not issue a session or token yet, and no routes are protected; any client can create, update or delete projects.
- The visitor, creator and investor route groups are placeholders with no logic.
- Request bodies are not validated beyond the Mongoose schemas (for example, pledge amounts are not checked to be positive).
- There are no automated tests.
- Users registered before password hashing was added have plaintext passwords stored and must re-register (or have their password reset) to log in.

---

Author: Muhammad Usman — [LinkedIn](https://www.linkedin.com/in/muhammad-usman-the-dev) · [Portfolio](https://muhammad-usman-engineer.vercel.app)
