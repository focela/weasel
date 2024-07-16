// PROJECT IMPORT
import axios from '~/utils/axios';

// TYPES IMPORT
import { Credentials } from '~/types/auth';

export const getUser = () => axios.get(`/api/private/user`);
export const postLogin = (data: Credentials) => axios.post('/api/private/login', data);
