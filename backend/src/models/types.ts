// TypeScript type definitions for the Sprint90 platform

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'admin';
  googleId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Student extends User {
  role: 'student';
  grade: number;
  examType: 'JEE' | 'CBSE';
  targetScore?: number;
  preferences?: StudentPreferences;
  progress?: StudentProgress;
}

export interface Admin extends User {
  role: 'admin';
  permissions: AdminPermissions;
}

export interface StudentPreferences {
  subjects: string[];
  studyHours: number;
  preferredDifficulty: 1 | 2 | 3 | 4 | 5;
  weakAreas: string[];
}

export interface StudentProgress {
  totalConcepts: number;
  completedConcepts: number;
  averageScore: number;
  timeSpent: number; // in minutes
  streakDays: number;
}

export interface Concept {
  id: string;
  title: string;
  description: string;
  subject: string;
  grade: number;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
  prerequisites: string[];
  tags: string[];
  aiGeneratedContent?: AIGeneratedContent;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIGeneratedContent {
  explanation: string;
  examples: string[];
  practiceQuestions: Question[];
  visualAids?: string[];
  relatedConcepts: string[];
}

export interface Question {
  id: string;
  conceptId: string;
  question: string;
  type: 'multiple-choice' | 'multiple-select' | 'short-answer' | 'numerical';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface StudentAnswer {
  id: string;
  studentId: string;
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  timeSpent: number; // in seconds
  attemptNumber: number;
  submittedAt: Date;
}

export interface StudySession {
  id: string;
  studentId: string;
  conceptId: string;
  startTime: Date;
  endTime?: Date;
  timeSpent: number; // in minutes
  questionsAttempted: number;
  correctAnswers: number;
  notes?: string;
}

export interface Analytics {
  studentId: string;
  totalStudyTime: number;
  conceptsCompleted: number;
  averageScore: number;
  weakAreas: string[];
  strongAreas: string[];
  progressTrend: ProgressData[];
  timeDistribution: TimeDistribution;
}

export interface ProgressData {
  date: string;
  score: number;
  conceptsCompleted: number;
  timeSpent: number;
}

export interface TimeDistribution {
  bySubject: Record<string, number>;
  byDifficulty: Record<number, number>;
  byDayOfWeek: Record<string, number>;
}

export interface AdminPermissions {
  canManageUsers: boolean;
  canManageContent: boolean;
  canViewAnalytics: boolean;
  canManageQuestions: boolean;
  canManageConcepts: boolean;
}

// Database query result types
export type QueryResult<T> = {
  rows: T[];
  rowCount: number;
};

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Authentication types
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface GoogleAuthData {
  googleId: string;
  email: string;
  firstName: string;
  lastName: string;
  picture?: string;
}

// Validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}