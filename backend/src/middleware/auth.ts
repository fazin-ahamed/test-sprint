// Authentication middleware
import { Request, Response, NextFunction } from 'express';
import { AuthService, JWTPayload } from '../services/authService';

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Access denied. No token provided.' });
    return;
  }

  const token = authHeader.substring(7);
  const payload = AuthService.verifyToken(token);
  
  if (!payload) {
    res.status(401).json({ error: 'Invalid token.' });
    return;
  }

  req.user = payload;
  next();
};

export const authorize = (...roles: Array<'student' | 'admin'>): (req: Request, res: Response, next: NextFunction) => void => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ error: 'Authentication required.' });
      return;
    }

    if (!roles.includes(req.user.role)) {
      res.status(403).json({ error: 'Insufficient permissions.' });
      return;
    }

    next();
  };
};