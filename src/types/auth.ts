import { ReactElement } from 'react';

// TYPES IMPORT
import { UserProfile } from '~/types/user';

export type GuardProps = {
  children: ReactElement | null;
};

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  login: (account: string, password: string) => Promise<void>;
  logout: () => void;
};

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  token?: string | null;
}

export interface AuthActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}

export interface Credentials {
  account: string;
  password: string;
}
