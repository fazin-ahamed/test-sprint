# Authentication Layer Implementation - Sprint90 PRD Section 5A.1

## Overview
Complete authentication system with Google OAuth 2.0 and JWT token management.

## Files Created/Modified

### Database Schema
- `backend/migrations/1704623400003_create_users_and_students.js` - Creates users and students tables

### Configuration
- `backend/src/config/env.ts` - Environment variable validation with Zod
- `backend/src/config/passport.ts` - Passport Google OAuth strategy configuration

### Services
- `backend/src/services/authService.ts` - JWT token generation/verification, OAuth login handler
- `backend/src/services/userService.ts` - User CRUD operations (getUserByGoogleId, getUserById, createUser, createStudent, getStudentByUserId)

### Middleware
- `backend/src/middleware/verifyToken.ts` - JWT verification middleware for protected routes
- `backend/src/middleware/errorHandler.ts` - Centralized error handling
- `backend/src/middleware/auth.ts` - Authentication and authorization helpers (updated)

### API Routes
- `backend/src/api/auth.ts` - Complete auth routes:
  - GET /auth/google - Initiates Google OAuth flow
  - GET /auth/google/callback - OAuth callback handler
  - GET /auth/me - Get current user (protected)
  - POST /auth/refresh-token - Refresh JWT (protected)
  - POST /auth/logout - Logout endpoint

### Type Definitions
- `backend/src/types/auth.ts` - TypeScript interfaces (User, Student, JWTPayload, OAuthResult)

### Main Server
- `backend/src/index.ts` - Updated with security middleware (Helmet, CORS), Passport initialization, auth routes

### Environment
- `backend/.env` - Environment variables (gitignored)
- `backend/.env.example` - Environment variables template

## Database Schema

### users table
- id (UUID, PK)
- email (VARCHAR(255), UNIQUE, NOT NULL)
- google_id (VARCHAR(255), UNIQUE)
- role (ENUM: student/admin/teacher, DEFAULT: student)
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)

### students table
- id (UUID, PK)
- user_id (UUID, FK to users, UNIQUE, NOT NULL)
- target_exams (JSONB)
- subjects_opted (JSONB)
- onboarding_completed (BOOLEAN, DEFAULT: false)
- diagnostic_completed (BOOLEAN, DEFAULT: false)
- is_initialized (BOOLEAN, DEFAULT: false)
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)

## API Endpoints

### GET /auth/google
Redirects to Google OAuth consent screen

### GET /auth/google/callback
Handles OAuth callback from Google, creates user if not exists, generates JWT, redirects to frontend

### GET /auth/me (Protected)
Returns current authenticated user info
Headers: Authorization: Bearer {token}

### POST /auth/refresh-token (Protected)
Generates a new JWT token
Headers: Authorization: Bearer {token}

### POST /auth/logout
Logout endpoint (frontend handles token removal)

## Security Features

1. **Helmet**: Security headers (CSP, frameguard, HSTS)
2. **CORS**: Configured for FRONTEND_URL only
3. **JWT**: Stateless tokens with 7-day expiration
4. **Session**: Secure, httpOnly cookies
5. **Environment Validation**: All required env vars validated at startup
6. **Error Handling**: Consistent error responses without sensitive details

## JWT Token Structure
```json
{
  "sub": "user-uuid",
  "user_id": "user-uuid",
  "email": "user@example.com",
  "role": "student",
  "iat": 1234567890,
  "exp": 1235172690
}
```

## Environment Variables Required
- NODE_ENV
- PORT
- DATABASE_URL
- REDIS_URL
- JWT_SECRET (min 32 characters)
- JWT_EXPIRY
- GOOGLE_OAUTH_CLIENT_ID
- GOOGLE_OAUTH_CLIENT_SECRET
- GOOGLE_OAUTH_REDIRECT_URI
- FRONTEND_URL

## Dependencies Added
- express-session (session management for Passport)
- @types/express-session (TypeScript types)

## Testing

### Health Check
```bash
curl http://localhost:3001/api/health
```

### OAuth Flow (Browser)
Navigate to: http://localhost:3001/auth/google

### Protected Route (Valid Token)
```bash
curl -H "Authorization: Bearer {your_jwt_token}" http://localhost:3001/auth/me
```

### Protected Route (No Token)
```bash
curl http://localhost:3001/auth/me
# Expected: 401 - { "error": "No token provided" }
```

## Status
✅ All files implemented
✅ Database migrations created and run
✅ TypeScript compilation successful
✅ Server starts successfully
✅ Environment validation working
