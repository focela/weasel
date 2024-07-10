import { UserProfile } from '~/types/user';

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  login: (email: string, password: string) => Promise<void>;
};

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  token?: string | null;
}

export interface AuthReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}