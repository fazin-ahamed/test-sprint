// Token verification middleware
import { Request, Response, NextFunction } from 'express';
import { AuthService, JWTPayload } from '../services/authService';

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      res.status(401).json({ error: 'Access token required' });
      return;
    }

    const payload = AuthService.verifyToken(token);
    if (!payload) {
      res.status(401).json({ error: 'Invalid or expired token' });
      return;
    }

    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token verification failed' });
  }
};

export const verifyAdminToken = (req: Request, res: Response, next: NextFunction): void => {
  verifyToken(req, res, () => {
    if (req.user?.role !== 'admin') {
      res.status(403).json({ error: 'Admin access required' });
      return;
    }
    next();
  });
};

export const verifyStudentToken = (req: Request, res: Response, next: NextFunction): void => {
  verifyToken(req, res, () => {
    if (req.user?.role !== 'student') {
      res.status(403).json({ error: 'Student access required' });
      return;
    }
    next();
  });
};