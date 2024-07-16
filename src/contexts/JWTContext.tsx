import { createContext, ReactElement, useEffect, useReducer } from 'react';

// THIRD-PARTY IMPORT
import { jwtDecode } from 'jwt-decode';

// PROJECT IMPORT
import authReducer from '~/contexts/auth-reducer/auth';
import axios from '~/utils/axios';
import Loader from '~/components/Loader';
import { getUser, postLogin } from '~/api/auth';

// TYPES IMPORT
import { InitialLoginContextProps, JWTContextType } from '~/types/auth';
import { KeyedObject } from '~/types';

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken: (st: string) => boolean = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(accessToken);

  return decoded.exp > Date.now() / 1000;
};

const setSession = (accessToken?: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');
        if (accessToken && verifyToken(accessToken)) {
          setSession(accessToken);
          const response = await getUser();
          const { user } = response.data;
          dispatch({
            type: 'LOGIN',
            payload: {
              isLoggedIn: true,
              user
            }
          });
        } else {
          dispatch({
            type: 'LOGOUT'
          });
        }
      } catch (err) {
        dispatch({
          type: 'LOGOUT'
        });
      }
    };

    init();
  }, []);

  const login = async (account: string, password: string) => {
    const response = await postLogin({ account, password });
    const { access_token, user } = response.data;
    setSession(access_token);
    dispatch({
      type: 'LOGIN',
      payload: {
        isLoggedIn: true,
        user
      }
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout }}>{children}</JWTContext.Provider>;
};

export default JWTContext;
