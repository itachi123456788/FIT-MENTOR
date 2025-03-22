Fit-Mentor/
│── public/                 # Public assets (accessible by users)
│   ├── images/             # App images (logos, backgrounds, etc.)
│   ├── icons/              # Icon assets (SVG, PNG, etc.)
│   ├── index.html          # Main HTML file
│
│── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── ProgressChart.tsx
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │
│   ├── pages/              # Page-level components
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   ├── WorkoutLog.tsx
│   │   ├── Profile.tsx
│   │   ├── Settings.tsx
│   │
│   ├── services/           # API calls and backend interaction
│   │   ├── workoutService.ts
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │
│   ├── context/            # Context API for state management
│   │   ├── AuthContext.tsx
│   │   ├── WorkoutContext.tsx
│   │
│   ├── assets/             # Static assets like fonts & styles
│   │   ├── styles.css
│   │   ├── theme.ts
│   │
│   ├── utils/              # Utility functions/helpers
│   │   ├── formatDate.ts
│   │   ├── calculateBMI.ts
│   │   ├── workoutHelpers.ts
│   │
│   ├── App.tsx             # Main App Component
│   ├── main.tsx            # Entry point
│   ├── routes.tsx          # Routes configuration
│
│── backend/                # Backend logic (if needed)
│   ├── server.ts           # Express.js or FastAPI backend
│   ├── database/           # Database models and connection
│   ├── controllers/        # API controllers
│   ├── routes/             # API routes
│   ├── middleware/         # Auth & error handling
│
│── tests/                  # Unit and integration tests
│   ├── components/         # Tests for UI components
│   ├── services/           # Tests for API services
│   ├── hooks/              # Tests for custom hooks
│
│── .gitignore              # Git ignore file
│── package.json            # Dependencies and scripts
│── tsconfig.json           # TypeScript configuration
│── README.md               # Documentation
