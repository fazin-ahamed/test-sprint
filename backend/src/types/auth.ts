export interface User {
  id: string;
  email: string;
  google_id?: string;
  role: 'student' | 'admin' | 'teacher';
  created_at: Date;
  updated_at: Date;
}

export interface Student {
  id: string;
  user_id: string;
  target_exams: string[];
  subjects_opted: Record<string, string>;
  onboarding_completed: boolean;
  diagnostic_completed: boolean;
  is_initialized: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface JWTPayload {
  sub: string;
  user_id: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export interface OAuthResult {
  success: boolean;
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

