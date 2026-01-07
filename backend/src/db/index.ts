// Database configuration and connection management
import { pool } from '../config/database';

export { pool };

export const initializeDatabase = async (): Promise<boolean> => {
  try {
    // Test database connection
    const client = await pool.connect();
    await client.query('SELECT NOW()');
    client.release();
    
    console.log('✅ Database initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    return false;
  }
};

export const closeDatabase = async (): Promise<void> => {
  try {
    await pool.end();
    console.log('🔌 Database connection closed');
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
  }
};

export default {
  pool,
  initializeDatabase,
  closeDatabase
};