import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/authService';
import { JWTPayload } from '../types/auth';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }

    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ 
      error: error instanceof Error ? error.message : 'Invalid token' 
    });
  }
};

export const authorize = (...roles: Array<'student' | 'admin' | 'teacher'>): (req: Request, res: Response, next: NextFunction) => void => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;
    if (!user) {
      res.status(401).json({ error: 'Authentication required.' });
      return;
    }

    if (!roles.includes(user.role as any)) {
      res.status(403).json({ error: 'Insufficient permissions.' });
      return;
    }

    next();
  };
};
