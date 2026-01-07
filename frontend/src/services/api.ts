// API service for frontend
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Try to refresh token
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await axios.post(`${API_BASE_URL}/api/auth/refresh`, {
            refreshToken,
          });
          
          const { accessToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          
          // Retry original request
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          // Refresh failed, redirect to login
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/api/auth/login', credentials),
  
  logout: () => api.post('/api/auth/logout'),
  
  refresh: (refreshToken: string) =>
    api.post('/api/auth/refresh', { refreshToken }),
  
  getProfile: () => api.get('/api/auth/profile'),
  
  googleAuth: () => window.location.href = `${API_BASE_URL}/api/auth/google`,
};

// Student API
export const studentAPI = {
  getProfile: () => api.get('/api/student/profile'),
  
  updateProfile: (data: any) => api.put('/api/student/profile', data),
  
  getProgress: () => api.get('/api/student/progress'),
  
  getRecommendations: () => api.get('/api/student/recommendations'),
  
  getQuestions: (params?: any) => api.get('/api/student/questions', { params }),
  
  submitAnswer: (questionId: string, answer: any) =>
    api.post(`/api/student/questions/${questionId}/answer`, { answer }),
};

// Concepts API
export const conceptsAPI = {
  getAll: () => api.get('/api/concepts'),
  
  getById: (id: string) => api.get(`/api/concepts/${id}`),
  
  getBySubject: (subject: string) => api.get(`/api/concepts/subject/${subject}`),
  
  getByGrade: (grade: number) => api.get(`/api/concepts/grade/${grade}`),
  
  getQuestions: (id: string) => api.get(`/api/concepts/${id}/questions`),
  
  search: (query: string) => api.get(`/api/concepts/search/${query}`),
};

export default api;