import express from 'express';
import passport from 'passport';
import { verifyTokenMiddleware } from '../middleware/verifyToken';
import { generateToken } from '../services/authService';
import { config } from '../config/env';

const router = express.Router();

// GET /auth/google - Initiates Google OAuth flow
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// GET /auth/google/callback - Google redirects here after user authorization
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req: any, res: express.Response) => {
    const result = req.user as any;
    
    // Redirect to frontend with token
    const redirectUrl = new URL(`${config.FRONTEND_URL}/auth/callback`);
    redirectUrl.searchParams.set('token', result.token);
    redirectUrl.searchParams.set('email', result.user.email);
    redirectUrl.searchParams.set('role', result.user.role);
    
    res.redirect(redirectUrl.toString());
  }
);

// GET /auth/me - Returns current authenticated user (Protected)
router.get(
  '/me',
  verifyTokenMiddleware,
  (req: express.Request, res: express.Response) => {
    const user = (req as any).user;
    res.json({
      id: user.user_id,
      email: user.email,
      role: user.role,
    });
  }
);

// POST /auth/refresh-token - Refreshes JWT token (Protected)
router.post(
  '/refresh-token',
  verifyTokenMiddleware,
  (req: express.Request, res: express.Response) => {
    const user = (req as any).user;
    const newToken = generateToken(
      user.user_id,
      user.email,
      user.role
    );
    res.json({ token: newToken });
  }
);

// POST /auth/logout - Logout endpoint
router.post('/logout', (req: express.Request, res: express.Response) => {
  // Frontend handles token removal
  res.json({ success: true });
});

export default router;
