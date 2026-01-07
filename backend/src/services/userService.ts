import { Pool } from 'pg';
import pool from '../config/database';
import { User, Student } from '../types/auth';

export async function getUserByGoogleId(googleId: string): Promise<User | null> {
  const result = await pool.query(
    'SELECT id, email, google_id, role, created_at, updated_at FROM users WHERE google_id = $1',
    [googleId]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  
  return result.rows[0] as User;
}

export async function getUserById(userId: string): Promise<User> {
  const result = await pool.query(
    'SELECT id, email, google_id, role, created_at, updated_at FROM users WHERE id = $1',
    [userId]
  );
  
  if (result.rows.length === 0) {
    throw new Error('User not found');
  }
  
  return result.rows[0] as User;
}

export async function createUser(email: string, googleId: string): Promise<User> {
  const result = await pool.query(
    `INSERT INTO users (email, google_id, role, created_at, updated_at)
     VALUES ($1, $2, 'student', NOW(), NOW())
     ON CONFLICT (google_id) DO UPDATE SET updated_at = NOW()
     RETURNING id, email, google_id, role, created_at, updated_at`,
    [email, googleId]
  );
  
  return result.rows[0] as User;
}

export async function createStudent(userId: string): Promise<Student> {
  const result = await pool.query(
    `INSERT INTO students (user_id, target_exams, subjects_opted, onboarding_completed, diagnostic_completed, is_initialized, created_at, updated_at)
     VALUES ($1, '[]'::jsonb, '{}'::jsonb, false, false, false, NOW(), NOW())
     ON CONFLICT (user_id) DO NOTHING
     RETURNING id, user_id, target_exams, subjects_opted, onboarding_completed, diagnostic_completed, is_initialized, created_at, updated_at`,
    [userId]
  );
  
  return result.rows[0] as Student;
}

export async function getStudentByUserId(userId: string): Promise<Student | null> {
  const result = await pool.query(
    'SELECT id, user_id, target_exams, subjects_opted, onboarding_completed, diagnostic_completed, is_initialized, created_at, updated_at FROM students WHERE user_id = $1',
    [userId]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  
  return result.rows[0] as Student;
}
