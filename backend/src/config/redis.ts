import { createClient } from 'redis';
import { config } from './env';

export const redisClient = createClient({
  url: config.REDIS_URL
});

export const connectRedis = async (): Promise<void> => {
  try {
    await redisClient.connect();
    console.log('✅ Redis connection successful');
  } catch (error) {
    console.error('❌ Redis connection failed:', error);
  }
};

export const disconnectRedis = async (): Promise<void> => {
  try {
    await redisClient.disconnect();
    console.log('🔌 Redis disconnected');
  } catch (error) {
    console.error('❌ Redis disconnection failed:', error);
  }
};

export default redisClient;