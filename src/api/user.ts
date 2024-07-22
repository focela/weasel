import { stringify } from 'qs';
import axios from '~/utils/axios';
import { UserQuery } from '~/types/user';

export const getList = (query: UserQuery) => axios.get(`/api/private/users?${stringify(query)}`);
