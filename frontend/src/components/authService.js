import axios from 'axios';

const API_URL = 'http://localhost:3500/api/auth';

export const RegisterForm = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const getHome = (token) => axios.get(`${API_URL}/home`, { headers: { Authorization: token } });
