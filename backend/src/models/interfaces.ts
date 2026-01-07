// Interface definitions for the Sprint90 platform
import { Request, Response, NextFunction } from 'express';

// Service interfaces
export interface IAuthService {
  generateToken(payload: any): string;
  verifyToken(token: string): any;
  hashPassword(password: string): Promise<string>;
  verifyPassword(password: string, hash: string): Promise<boolean>;
  authenticateUser(email: string, password: string): Promise<any>;
}

export interface IStudentService {
  createStudent(studentData: any): Promise<any>;
  getStudentById(id: string): Promise<any>;
  getStudentByEmail(email: string): Promise<any>;
  updateStudent(id: string, updates: any): Promise<any>;
  getStudentProgress(studentId: string): Promise<any>;
  getRecommendations(studentId: string): Promise<any[]>;
}

export interface IConceptService {
  createConcept(conceptData: any): Promise<any>;
  getAllConcepts(): Promise<any[]>;
  getConceptById(id: string): Promise<any>;
  getConceptsBySubject(subject: string): Promise<any[]>;
  getConceptsByGrade(grade: number): Promise<any[]>;
  updateConcept(id: string, updates: any): Promise<any>;
  deleteConcept(id: string): Promise<boolean>;
  searchConcepts(query: string): Promise<any[]>;
}

// Repository interfaces
export interface IStudentRepository {
  create(studentData: any): Promise<any>;
  findById(id: string): Promise<any>;
  findByEmail(email: string): Promise<any>;
  update(id: string, updates: any): Promise<any>;
  delete(id: string): Promise<boolean>;
}

export interface IConceptRepository {
  create(conceptData: any): Promise<any>;
  findAll(): Promise<any[]>;
  findById(id: string): Promise<any>;
  findBySubject(subject: string): Promise<any[]>;
  findByGrade(grade: number): Promise<any[]>;
  update(id: string, updates: any): Promise<any>;
  delete(id: string): Promise<boolean>;
  search(query: string): Promise<any[]>;
}

export interface IQuestionRepository {
  create(questionData: any): Promise<any>;
  findByConceptId(conceptId: string): Promise<any[]>;
  findById(id: string): Promise<any>;
  update(id: string, updates: any): Promise<any>;
  delete(id: string): Promise<boolean>;
}

// Middleware interfaces
export interface IAuthMiddleware {
  authenticate: (req: Request, res: Response, next: NextFunction) => void;
  authorize: (...roles: string[]) => (req: Request, res: Response, next: NextFunction) => void;
}

export interface ITokenMiddleware {
  verifyToken: (req: Request, res: Response, next: NextFunction) => void;
  verifyAdminToken: (req: Request, res: Response, next: NextFunction) => void;
  verifyStudentToken: (req: Request, res: Response, next: NextFunction) => void;
}

// Database interfaces
export interface IDatabase {
  query(text: string, params?: any[]): Promise<any>;
  connect(): Promise<any>;
  end(): Promise<void>;
}

export interface IRedisClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  get(key: string): Promise<string | null>;
  set(key: string, value: string, options?: any): Promise<string>;
  del(key: string): Promise<number>;
  exists(key: string): Promise<number>;
  expire(key: string, seconds: number): Promise<boolean>;
}

// API Route interfaces
export interface IRouteHandler {
  (req: Request, res: Response, next?: NextFunction): Promise<void> | void;
}

export interface IRoute {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  handler: IRouteHandler;
  middleware?: any[];
}

// Configuration interfaces
export interface IConfig {
  nodeEnv: string;
  port: number;
  databaseUrl: string;
  redisUrl: string;
  jwtSecret: string;
  jwtExpiry: string;
  googleOAuth: {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
  };
  frontendUrl: string;
}

// Controller interfaces
export interface IController {
  getAll: IRouteHandler;
  getOne: IRouteHandler;
  create: IRouteHandler;
  update: IRouteHandler;
  delete: IRouteHandler;
}

// Service factory interfaces
export interface IServiceFactory {
  createAuthService(): IAuthService;
  createStudentService(): IStudentService;
  createConceptService(): IConceptService;
}