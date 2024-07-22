export type UserProfile = {
  first_name: string;
  last_name: string;
};

export interface UserProps {
  loading: boolean;
  users: UserProfile[];
  error: object | string | null;
}

export interface UserQuery {
  search?: string;
  status?: number;
  limit: number;
  page: number;
}
