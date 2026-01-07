import jwt from 'jsonwebtoken';
import { config } from '../config/env';
import { getUserByGoogleId, createUser, createStudent } from './userService';
import { OAuthResult, JWTPayload } from '../types/auth';

export function generateToken(userId: string, email: string, role: string): string {
  return jwt.sign(
    {
      sub: userId,
      user_id: userId,
      email,
      role,
    },
    config.JWT_SECRET,
    {
      algorithm: 'HS256',
      expiresIn: '7d',
    }
  );
}

export function verifyToken(token: string): JWTPayload {
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256'],
    }) as JWTPayload;
    return decoded;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

export async function handleOAuthLogin(googleId: string, email: string): Promise<OAuthResult> {
  let user = await getUserByGoogleId(googleId);
  
  if (!user) {
    user = await createUser(email, googleId);
    await createStudent(user.id);
  }
  
  const token = generateToken(user.id, user.email, user.role);
  
  return {
    success: true,
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
}
