> 📚 **Navigation:** [PLANNING](PLANNING.md) | [TODO](TODO.md)

# Womenation Membership
> **Open in preview**  
`Shift + Command + V on Mac`  
`Shift + Control + V on Windows`

Womenation Membership is a fullstack membership platform where users can sign up, log in, and access a protected member portal with personal information, membership content, events, and offers.

## 📋 Table of Contents
- [Live Demo](#1)
- [Screenshots](#2)
- [About Project](#3)
- [Tech Stack](#4)
- [Features](#5)
- [Project Objectives](#6)
- [Accessibility](#7)
- [Architecture](#8)
  - [Folder Structure](#s1)
  - [Pages & Routes](#s2)
  - [Data Flow Overview](#s3)
  - [API Usage](#s4)
- [Run Locally](#9)
- [Roadmap](#10)
- [Author](#11)
- [License](#12)

<a id="1"></a>
## 🚀 Live Demo
- [Frontend](https://womenation-membership.netlify.app/)
- [Backend API](https://womenation-membership.onrender.com)

<a id="2"></a>
## 📷 Screenshots
*To be edited*

Add screenshots that show:
- Public membership page (`/om-medlemskap`)
- Login / signup flow
- Member portal pages (`/konto/*`)

<a id="3"></a>
## 🔎 About Project
The project was built to create a complete membership experience from public onboarding to protected account pages.

The platform includes:
- Public pages for membership information, login and signup
- Authentication with protected routes
- A member portal with personal data and content pages
- Backend integration with MongoDB and Mailchimp sync on signup

<a id="4"></a>
## 📦 Tech Stack
- **Frontend:** React 19 + Vite
- **Routing:** React Router
- **Styling:** styled-components
- **State Management:** Zustand
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Authentication:** Email/password login with bcrypt + bearer accessToken validation in `authenticateUser` middleware
- **External Service:** Mailchimp Marketing API
- **Linting/Tooling:** ESLint, Nodemon, Babel Node

<a id="5"></a>
## 🧠 Features
- User signup flow with backend validation and duplicate-email handling
- Login flow with bcrypt credential verification and access token response
- Protected nested routes under `/konto` using `ProtectedRoute`
- Authenticated dashboard fetch (`/dashboard/:id`) via bearer token
- Zustand stores for user state, form state, and content state
- Member portal pages: Mina Sidor, Medlemskap, Events, Erbjudanden
- Public pages: Om Medlemskap, Logga In, Bli Medlem
- Responsive navigation with two hamburger menus (public + portal)
- Auto-close behavior on hamburger menu links
- Theming system with centralized color tokens and shared UI variants
- Signup integration with Mailchimp (contact creation + merge fields)
- API endpoint discovery on root route (`GET /` with endpoint list)

<a id="6"></a>
## 🎯 Project Objectives
Main objectives for the project:
- Build and connect a real frontend + backend flow
- Practice auth, protected routing, and API integration
- Work with reusable UI components and shared theme system
- Build responsive pages for both public and member sections

### Required conditions
- React frontend + Node.js/Express backend + MongoDB
- Authentication
- React Router navigation
- Global state management
- At least two external libraries beyond core stack
- A React hook not covered in curriculum
- Cross-browser support: Chrome, Firefox, Safari
- Fully responsive: 320px–1600px
- 100% Lighthouse Accessibility score
- Clean Code practices
- Mobile-first design with cohesive colour scheme and consistent typography
- Submission of: full-project GitHub PR, deployed backend & frontend

### Stretch Goals (optional)
- Go beyond Grade G with clear technical depth and project ambition
- Integrate meaningful tools/APIs/frameworks beyond course content
- Show strong frontend/backend decision-making and collaboration
- Polish UX with micro-interactions, loading states, and accessibility extras
- Provide strong docs: README, API docs, and visual walkthroughs
- Demonstrate iteration and thoughtful problem-solving in code and design


<a id="7"></a>
## ♿ Accessibility
Accessibility work includes:
- Semantic HTML in reusable components
- Visible focus styles in form controls
- Keyboard-accessible navigation and buttons
- Color tokens centralized in theme for contrast tuning

Planned improvements:
- Additional ARIA labels for complex interactions
- Broader screen reader flow testing
- Lighthouse 100%
- Real-time validation feedback in signup and login forms

<a id="8"></a>
## 🏗️ Architecture
The app is split into clear frontend and backend modules, with shared responsibilities separated by route, component type, and state domain.

<a id="s1"></a>
### 🛠 Folder Structure
```text
womenation-membership/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seedingDatabase/
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── public/
│   │   └── media/
│   │       ├── icons/
│   │       ├── images/
│   │       └── logo/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── navigation/
│   │   │   ├── pages/
│   │   │   ├── typography/
│   │   │   └── ui/
│   │   ├── constants/
│   │   ├── data/
│   │   ├── layouts/
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   └── portal-pages/
│   │   ├── routes/
│   │   ├── store/
│   │   ├── styles/
│   │   └── themes/
│   └── vite.config.js
├── PLANNING.md
├── README.md
└── TODO.md
```

<a id="s2"></a>
### 🧭 Pages & Routes
| Route | Description |
|-------|-------------|
| `/` | Redirects to `/om-medlemskap` |
| `/om-medlemskap` | Public membership information |
| `/logga-in` | Login page |
| `/bli-medlem` | Signup page |
| `/konto` | Protected account entry |
| `/konto/mina-sidor` | User information page |
| `/konto/medlemskap` | Membership content page |
| `/konto/events` | Member events page |
| `/konto/erbjudanden` | Member offers page |

<a id="s3"></a>
### 🔄 Data Flow Overview
#### Signup Flow
1. User submits signup form in frontend.
2. Frontend posts to `POST /users/signup`.
3. Backend validates and stores user in MongoDB.
4. Backend attempts Mailchimp sync.
5. Frontend updates user state and navigates to account flow.

#### Login + Protected Flow
1. User submits login form.
2. Frontend posts to `POST /users/login`.
3. Backend validates password and returns `accessToken`.
4. Frontend stores user in Zustand.
5. Protected routes allow access via `ProtectedRoute`.
6. Frontend fetches dashboard data with bearer token.

<a id="s4"></a>
### 🔑 API Usage
Base URL (production):
- `https://womenation-membership.onrender.com`

Main endpoints:
- `GET /` - API welcome + endpoint listing
- `GET /users` - List users
- `POST /users/signup` - Create user
- `POST /users/login` - Authenticate user
- `GET /dashboard/:id` - Authenticated user dashboard data

Auth:
- Header format: `Authorization: Bearer <accessToken>`

Error handling:
- `400` for invalid request / failed signup validation flow
- `409` for duplicate email on signup
- `401` for invalid login or missing/invalid auth token
- `404` for user not found (`/dashboard/:id`)
- `500` for internal server errors
- `502` for Mailchimp integration failure

<a id="9"></a>
## ▶️ Run Locally
### 1. Clone repository
```bash
git clone https://github.com/mikaelasturk/womenation-membership
cd womenation-membership
```

### 2. Start backend
```bash
cd backend
npm install
npm run dev
```

Optional environment variables for backend integrations:
- `MONGO_URL`
- `MAILCHIMP_API_KEY`
- `MAILCHIMP_SERVER_PREFIX`
- `MAILCHIMP_LIST_ID`

### 3. Start frontend
```bash
cd ../frontend
npm install
npm run dev
```

<a id="10"></a>
## 🚗 Roadmap
Describe the planning process, implementation phase, and future improvements.

### 📂 Project Documentation
This project uses a structured workflow with interconnected documentation:

- **[📄 PLANNING.md](PLANNING.md)** - Detailed planning document with design decisions, tech stack, wireframes, and timelines
- **[✅ TODO.md](TODO.md)** - Active task tracking with priorities, status updates, and development progress

**Workflow:**
1. **Plan** → Use PLANNING.md to define goals, design, and architecture
2. **Break Down** → Convert plan into actionable tasks in TODO.md
3. **Execute** → Work through TODO items, updating status as you go
4. **Document** → Update this README with completed features and learnings

### Planning
Brief description of initial planning and design decisions.
Optional link to a planning document.
[📄 PLANNING.md](PLANNING.md)

### Execution 
Describe how the project was implemented, including architectural decisions, state management, and challenges encountered.

### Retrospect
Summarize reflections, lessons learned, technical insights, and ideas for improvement.

<a id="11"></a>
## 🧑‍💻 Authors

### Carolina Oldertz
- [GitHub](https://www.github.com/carro-barro)
- [LinkedIn](https://www.linkedin.com/in/carolina-oldertz-a875601b8/)

### Mikaela Sturk
- [GitHub](https://www.github.com/mikaelasturk)
- [LinkedIn](https://www.linkedin.com/in/mikaelasturk)

<a id="12"></a>
## 📄 License
This project was created as part of a Technigo course assignment and not to be shared outside of school.
For educational purposes only.

 
---

<div align="center">
 <br>
  Made with ❤️  by Carolina Oldertz & Mikaela Sturk 
</div>