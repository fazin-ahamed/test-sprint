// Logging middleware
import { Request, Response, NextFunction } from 'express';

export interface LoggerRequest extends Request {
  startTime?: number;
}

export const requestLogger = (req: LoggerRequest, res: Response, next: NextFunction): void => {
  req.startTime = Date.now();
  
  const { method, url, ip } = req;
  const userAgent = req.get('User-Agent') || 'Unknown';
  
  console.log(`🔄 ${method} ${url} - ${ip} - ${userAgent}`);
  
  // Log response when finished
  res.on('finish', () => {
    const duration = req.startTime ? Date.now() - req.startTime : 0;
    const { statusCode } = res;
    
    // Color coding for status codes
    const statusEmoji = statusCode >= 500 ? '❌' : 
                       statusCode >= 400 ? '⚠️' : 
                       statusCode >= 300 ? '🔄' : '✅';
    
    console.log(`${statusEmoji} ${method} ${url} - ${statusCode} - ${duration}ms`);
  });
  
  next();
};

export const errorLogger = (err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error('🚨 Error caught by error logger:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers
  });
  
  next(err);
};

export default { requestLogger, errorLogger };