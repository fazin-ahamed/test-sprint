# Sprint90 - AI-Driven JEE & CBSE Exam Prep Platform

Sprint90 is a comprehensive AI-driven exam preparation platform designed specifically for JEE (Joint Entrance Examination) and CBSE students. The platform provides personalized learning experiences, adaptive question practice, and detailed analytics to help students optimize their preparation strategy.

## 🚀 Features

- **AI-Powered Recommendations**: Personalized study plans based on student performance
- **Comprehensive Question Bank**: Extensive collection of practice questions for JEE and CBSE
- **Progress Analytics**: Detailed insights into student performance and weak areas
- **Adaptive Learning**: Difficulty levels that adjust based on student capabilities
- **Admin Dashboard**: Comprehensive management tools for content and user administration
- **Multi-Role Support**: Separate interfaces for students and administrators

## 🛠 Tech Stack

### Backend
- **Node.js 18+** with TypeScript
- **Express.js** for API framework
- **PostgreSQL 15** for primary database
- **Redis** for caching and session management
- **Passport.js** with Google OAuth for authentication
- **JWT** for secure token-based authentication

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Axios** for API communication

### Infrastructure
- **Docker & Docker Compose** for containerization
- **PostgreSQL 15** database
- **Redis 7** cache
- **Nginx** for production frontend serving

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js 18+** and npm
- **Docker** and Docker Compose
- **Git**

## 🚀 Quick Start with Docker

The fastest way to get Sprint90 running:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sprint90
   ```

2. **Start all services with Docker**:
   ```bash
   docker-compose up
   ```

3. **Access the applications**:
   - Frontend Student App: http://localhost:3000
   - Admin Dashboard: http://localhost:3002
   - Backend API: http://localhost:3001
   - Health Check: http://localhost:3001/api/health

This will automatically:
- Start PostgreSQL database
- Start Redis cache
- Build and start the backend
- Build and start both frontend applications

## 💻 Local Development Setup

If you prefer to run services locally without Docker:

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install all workspace dependencies
npm run install-all
```

### 2. Environment Configuration

Create `.env` files in each directory:

**Backend** (`backend/.env`):
```env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://sprint90_user:sprint90_password@localhost:5432/sprint90_dev
REDIS_URL=redis://localhost:6379
JWT_SECRET=dev_secret_key_change_in_production_to_at_least_32_chars
JWT_EXPIRY=7d
GOOGLE_OAUTH_CLIENT_ID=your_client_id_here
GOOGLE_OAUTH_CLIENT_SECRET=your_client_secret_here
GOOGLE_OAUTH_REDIRECT_URI=http://localhost:3000/auth/google/callback
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`frontend/.env`):
```env
VITE_API_BASE_URL=http://localhost:3001
VITE_GOOGLE_OAUTH_CLIENT_ID=your_client_id_here
```

**Admin Frontend** (`admin-frontend/.env`):
```env
VITE_API_BASE_URL=http://localhost:3001
```

### 3. Database Setup

#### Option A: Using Docker (Recommended)
```bash
docker-compose up postgres redis
```

#### Option B: Local Installation
1. Install PostgreSQL 15 and Redis
2. Create database:
   ```sql
   CREATE DATABASE sprint90_dev;
   CREATE USER sprint90_user WITH PASSWORD 'sprint90_password';
   GRANT ALL PRIVILEGES ON DATABASE sprint90_dev TO sprint90_user;
   ```

### 4. Start Development Servers

```bash
# Start all services concurrently
npm run dev:all

# Or start individually:
npm run dev:backend  # Backend on :3001
npm run dev:frontend # Frontend on :3000
npm run dev:admin    # Admin on :3002
```

## 📁 Project Structure

```
sprint90/
├── backend/                 # Node.js/Express API server
│   ├── src/
│   │   ├── api/            # API route handlers
│   │   │   ├── auth.ts     # Authentication routes
│   │   │   ├── student.ts  # Student-specific routes
│   │   │   ├── admin.ts    # Admin management routes
│   │   │   └── concepts.ts # Concept-related routes
│   │   ├── services/        # Business logic layer
│   │   │   ├── authService.ts
│   │   │   ├── conceptService.ts
│   │   │   └── studentService.ts
│   │   ├── middleware/     # Express middleware
│   │   │   ├── auth.ts     # Authentication middleware
│   │   │   ├── errorHandler.ts
│   │   │   └── logger.ts   # Request logging
│   │   ├── models/        # TypeScript interfaces & types
│   │   │   ├── types.ts
│   │   │   └── interfaces.ts
│   │   ├── config/        # Configuration files
│   │   │   ├── env.ts
│   │   │   ├── database.ts
│   │   │   └── redis.ts
│   │   ├── db/           # Database utilities
│   │   └── index.ts      # Application entry point
│   ├── migrations/       # Database migrations
│   ├── seeds/          # Database seed files
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── .env.example
├── frontend/            # React student frontend
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable UI components
│   │   ├── services/   # API service functions
│   │   ├── hooks/      # Custom React hooks
│   │   └── styles/     # CSS/styling files
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── Dockerfile
│   └── .env.example
├── admin-frontend/      # React admin dashboard
│   ├── src/
│   │   ├── pages/      # Admin page components
│   │   ├── components/ # Reusable UI components
│   │   └── services/   # API service functions
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── Dockerfile
│   └── .env.example
├── docker-compose.yml
├── package.json        # Root package.json with workspaces
├── .gitignore
└── README.md
```

## 🔧 Available Scripts

### Root Level Scripts
```bash
npm run install-all    # Install dependencies for all workspaces
npm run dev:backend    # Start backend development server
npm run dev:frontend   # Start frontend development server
npm run dev:admin      # Start admin frontend development server
npm run dev:all        # Start all development servers concurrently
npm run build:all      # Build all applications
```

### Backend Scripts
```bash
npm run dev           # Start with nodemon (auto-reload)
npm run build         # Compile TypeScript
npm run start         # Start production server
npm run migrate:up     # Run database migrations
npm run migrate:down   # Rollback database migrations
npm run seed:concepts  # Seed concepts data
```

### Frontend Scripts
```bash
npm run dev           # Start Vite development server
npm run build         # Build for production
npm run preview       # Preview production build
npm run type-check    # Run TypeScript type checking
```

## 🧪 API Health Check

Verify the backend API is running correctly:

```bash
curl http://localhost:3001/api/health
```

Expected response:
```json
{
  "status": "ok"
}
```

## 🗄 Database Migrations

To set up the database schema:

```bash
# Run migrations
npm run migrate:up

# Rollback if needed
npm run migrate:down

# Seed initial data
npm run seed:concepts
```

## 🔐 Authentication Setup

### Google OAuth Configuration

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Update environment variables:
   - `GOOGLE_OAUTH_CLIENT_ID`
   - `GOOGLE_OAUTH_CLIENT_SECRET`
   - `GOOGLE_OAUTH_REDIRECT_URI`

### JWT Configuration

Update `JWT_SECRET` in your backend `.env` file:
- Use a strong, random string (minimum 32 characters)
- Never commit secrets to version control

## 🚢 Production Deployment

### Using Docker

1. Build all images:
   ```bash
   docker-compose -f docker-compose.prod.yml build
   ```

2. Deploy:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Environment Variables for Production

Update all `.env` files for production:
- Set `NODE_ENV=production`
- Use strong, unique secrets
- Configure proper database URLs
- Set appropriate CORS origins

## 🛠 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use meaningful variable and function names
- Write comprehensive JSDoc comments

### Git Workflow
1. Create feature branches from `main`
2. Make atomic commits with clear messages
3. Run tests before pushing
4. Create pull requests for code review

### Testing
```bash
# Run backend tests
npm test

# Run frontend tests
npm test
```

## 📊 Monitoring & Logging

### Health Checks
- Backend: `GET /api/health`
- Database connection status logged on startup
- Redis connection status logged on startup

### Logging
- Request/response logging middleware enabled
- Error logging with stack traces in development
- Structured logging for production

## 🆘 Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**Database Connection Issues:**
- Verify PostgreSQL is running: `docker ps` or `pg_isready`
- Check connection string in `.env`
- Ensure database exists and user has permissions

**Redis Connection Issues:**
- Verify Redis is running: `docker ps` or `redis-cli ping`
- Check `REDIS_URL` in `.env`

**Module Not Found:**
```bash
# Reinstall dependencies
npm run install-all
```

### Getting Help

1. Check the logs for error messages
2. Verify environment variables are set correctly
3. Ensure all required services (PostgreSQL, Redis) are running
4. Check the [troubleshooting section](#-troubleshooting)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 🔗 Links

- **Frontend Student App**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3002
- **Backend API**: http://localhost:3001
- **API Documentation**: http://localhost:3001/api-docs (if implemented)

---

**Happy Learning! 🎓**