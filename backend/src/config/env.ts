import dotenv from 'dotenv';

dotenv.config();

import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.string().default('3001'),
  DATABASE_URL: z.string().startsWith('postgresql://'),
  REDIS_URL: z.string().startsWith('redis://'),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters'),
  JWT_EXPIRY: z.string().default('7d'),
  GOOGLE_OAUTH_CLIENT_ID: z.string(),
  GOOGLE_OAUTH_CLIENT_SECRET: z.string(),
  GOOGLE_OAUTH_REDIRECT_URI: z.string().url(),
  FRONTEND_URL: z.string().url(),
});

const envResult = envSchema.safeParse(process.env);

if (!envResult.success) {
  console.error('❌ Environment validation failed:');
  console.error(envResult.error.format());
  throw new Error('Invalid environment variables');
}

export const config = envResult.data;

export const env = {
  nodeEnv: config.NODE_ENV,
  port: config.PORT,
  databaseUrl: config.DATABASE_URL,
  redisUrl: config.REDIS_URL,
  jwtSecret: config.JWT_SECRET,
  jwtExpiry: config.JWT_EXPIRY,
  googleOAuth: {
    clientId: config.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: config.GOOGLE_OAUTH_CLIENT_SECRET,
    redirectUri: config.GOOGLE_OAUTH_REDIRECT_URI
  },
  frontendUrl: config.FRONTEND_URL
};
