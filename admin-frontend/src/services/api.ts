// API service for admin frontend
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
    const token = localStorage.getItem('adminAccessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Redirect to admin login
      localStorage.removeItem('adminAccessToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Admin Auth API
export const adminAuthAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/api/admin/auth/login', credentials),
  
  logout: () => api.post('/api/admin/auth/logout'),
  
  getProfile: () => api.get('/api/admin/auth/profile'),
};

// Admin Users API
export const adminUsersAPI = {
  getAll: (params?: any) => api.get('/api/admin/users', { params }),
  
  getById: (id: string) => api.get(`/api/admin/users/${id}`),
  
  update: (id: string, data: any) => api.put(`/api/admin/users/${id}`, data),
  
  delete: (id: string) => api.delete(`/api/admin/users/${id}`),
  
  create: (data: any) => api.post('/api/admin/users', data),
};

// Admin Concepts API
export const adminConceptsAPI = {
  getAll: (params?: any) => api.get('/api/admin/concepts', { params }),
  
  getById: (id: string) => api.get(`/api/admin/concepts/${id}`),
  
  create: (data: any) => api.post('/api/admin/concepts', data),
  
  update: (id: string, data: any) => api.put(`/api/admin/concepts/${id}`, data),
  
  delete: (id: string) => api.delete(`/api/admin/concepts/${id}`),
};

// Admin Questions API
export const adminQuestionsAPI = {
  getAll: (params?: any) => api.get('/api/admin/questions', { params }),
  
  getById: (id: string) => api.get(`/api/admin/questions/${id}`),
  
  create: (data: any) => api.post('/api/admin/questions', data),
  
  update: (id: string, data: any) => api.put(`/api/admin/questions/${id}`, data),
  
  delete: (id: string) => api.delete(`/api/admin/questions/${id}`),
};

// Admin Analytics API
export const adminAnalyticsAPI = {
  getDashboard: () => api.get('/api/admin/analytics/dashboard'),
  
  getUserAnalytics: (params?: any) => api.get('/api/admin/analytics/users', { params }),
  
  getConceptAnalytics: (params?: any) => api.get('/api/admin/analytics/concepts', { params }),
  
  getQuestionAnalytics: (params?: any) => api.get('/api/admin/analytics/questions', { params }),
  
  getPerformanceAnalytics: (params?: any) => api.get('/api/admin/analytics/performance', { params }),
  
  exportReport: (type: string, params?: any) => 
    api.get(`/api/admin/analytics/export/${type}`, { 
      params, 
      responseType: 'blob' 
    }),
};

export default api;