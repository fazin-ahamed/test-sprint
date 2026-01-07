import { Request, Response, NextFunction } from 'express';
import { verifyToken as verifyJwtToken } from '../services/authService';

export async function verifyTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = verifyJwtToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ 
      error: error instanceof Error ? error.message : 'Invalid token' 
    });
  }
}
