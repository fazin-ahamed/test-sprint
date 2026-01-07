import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', err);

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (err.message === 'Invalid or expired token') {
    return res.status(401).json({ error: err.message });
  }

  res.status(500).json({ 
    error: 'Internal server error',
    ...(config.NODE_ENV === 'development' && { debug: err.message })
  });
}
